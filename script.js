const servicesById = Object.fromEntries(eventyData.services.map((service) => [service.id, service]));

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createList(items, className = "plain-list") {
  const list = createElement("ul", className);
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  return list;
}

function createServiceCard(service) {
  const card = createElement("article", "service-card service-card--featured");
  card.innerHTML = `
    <img src="${service.cardImage}" alt="${service.cardAlt}" class="service-card__image">
    <div class="service-card__body">
      <h3>${service.name}</h3>
      <p class="service-card__audience">${service.audience}</p>
      <p>${service.teaser}</p>
      <p class="price-tag">${service.priceFrom}</p>
      <div class="card-actions">
        <a class="button button-primary" href="sluzby.html#${service.id}">Detail služby</a>
        <a class="button button-cta-green" href="rezervace.html?service=${service.id}">Poptat termín</a>
      </div>
    </div>
  `;
  return card;
}

function createBenefitCard(benefit) {
  const card = createElement("article", "benefit-card");
  card.innerHTML = `
    <h3>${benefit.title}</h3>
    <p>${benefit.text}</p>
  `;
  return card;
}

function createAddonCard(addon) {
  const card = createElement("article", "info-card");
  const note = addon.note ? `<p class="small-note">${addon.note}</p>` : "";
  card.innerHTML = `
    <h3>${addon.title}</h3>
    ${note}
  `;
  card.appendChild(createList(addon.items));
  return card;
}

function createFaqItem(faq) {
  const details = createElement("details", "faq-item");
  details.innerHTML = `
    <summary>${faq.question}</summary>
    <p>${faq.answer}</p>
  `;
  return details;
}

function createDocumentCard(documentItem) {
  const card = createElement("article", "document-card");
  card.innerHTML = `
    <h3>${documentItem.title}</h3>
    <p>${documentItem.description}</p>
    <span class="document-placeholder">PDF / odkaz doplníme</span>
  `;
  return card;
}

function createPackageCard(title, packageData) {
  const card = createElement("article", "package-card");
  card.innerHTML = `
    <p class="eyebrow">${title}</p>
    <h3>${packageData.price}</h3>
    <p class="small-note">${packageData.note}</p>
  `;
  card.appendChild(createList(packageData.items));
  return card;
}

function renderHomeHeroSlider() {
  const hero = qs(".hero--rocks");
  if (!hero || !eventyData.hero?.slides?.length) return;

  const slides = eventyData.hero.slides;
  const wrapper = createElement("div", "hero-slides");

  slides.forEach((slide, index) => {
    const item = createElement("div", `hero-slide${index === 0 ? " is-active" : ""}`);
    item.style.backgroundImage = `url("${slide.src}")`;
    item.setAttribute("role", "img");
    item.setAttribute("aria-label", slide.alt);
    wrapper.appendChild(item);
  });

  hero.prepend(wrapper);

  if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const slideNodes = qsa(".hero-slide", wrapper);
  let activeIndex = 0;

  window.setInterval(() => {
    slideNodes[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slideNodes.length;
    slideNodes[activeIndex].classList.add("is-active");
  }, 5000);
}

function renderHomePage() {
  renderHomeHeroSlider();

  const benefitGrid = qs("#benefits-grid");
  if (benefitGrid) {
    eventyData.benefits.forEach((benefit) => benefitGrid.appendChild(createBenefitCard(benefit)));
  }

  const featuredGrid = qs("#featured-services");
  if (featuredGrid) {
    eventyData.services.forEach((service) => featuredGrid.appendChild(createServiceCard(service)));
  }

  qsa("[data-price-note]").forEach((node) => {
    node.textContent = eventyData.priceNote;
  });
}

function renderServicesPage() {
  const detailSections = qs("#service-details");
  if (detailSections) {
    eventyData.services.forEach((service) => {
      const section = createElement("section", "service-detail");
      section.id = service.id;
      section.innerHTML = `
        <div class="service-detail__media">
          <img src="${service.heroImage}" alt="${service.heroAlt}">
          <p class="small-note">Placeholder fotografie. Později sem jednoduše doplníte vlastní snímky z akcí.</p>
        </div>
        <div class="service-detail__content">
          <p class="eyebrow">Detail služby</p>
          <h2>${service.name}</h2>
          <p class="service-card__audience">${service.audience}</p>
          <p class="price-tag">${service.priceFrom}</p>
        </div>
      `;

      const textBlock = createElement("div", "detail-copy");
      service.detailText.forEach((paragraph) => {
        textBlock.appendChild(createElement("p", "", paragraph));
      });

      const metaGrid = createElement("div", "detail-grid");

      const idealFor = createElement("article", "info-card");
      idealFor.innerHTML = "<h3>Pro koho je služba vhodná</h3>";
      idealFor.appendChild(createList(service.idealFor));

      const process = createElement("article", "info-card");
      process.innerHTML = "<h3>Jak akce probíhá</h3>";
      process.appendChild(createList(service.process));

      const included = createElement("article", "info-card");
      included.innerHTML = "<h3>Co zařídíme</h3>";
      included.appendChild(createList(service.included));

      const safety = createElement("article", "info-card");
      safety.innerHTML = `
        <h3>Bezpečnost a organizace</h3>
        <p>${eventyData.safetyText}</p>
        <p>${eventyData.safetyTextExtended}</p>
      `;

      metaGrid.append(idealFor, process, included, safety);

      const packages = createElement("div", "package-grid");
      packages.append(
        createPackageCard("Standard", service.standard),
        createPackageCard("Premium", service.premium)
      );

      const ctaBar = createElement("div", "detail-actions");
      ctaBar.innerHTML = `
        <a class="button button-primary" href="rezervace.html?service=${service.id}">Poptat termín</a>
        <a class="button button-secondary" href="kontakt.html">Nejdřív se poradit</a>
      `;

      detailSections.append(section, textBlock, metaGrid, packages, ctaBar);
    });
  }

  const addOnsOverview = qs("#addons-overview");
  if (addOnsOverview) {
    eventyData.addOns.forEach((addon) => addOnsOverview.appendChild(createAddonCard(addon)));
  }

  const faqOverview = qs("#services-faq");
  if (faqOverview) {
    eventyData.faq.forEach((faq) => faqOverview.appendChild(createFaqItem(faq)));
  }
}

function renderDocumentsPage() {
  const docsGrid = qs("#documents-grid");
  if (!docsGrid) return;
  eventyData.documents.forEach((documentItem) => docsGrid.appendChild(createDocumentCard(documentItem)));
}

function buildOption(value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  return option;
}

function buildEmailPreview(subject, bodyLines) {
  return `
    <article class="email-preview">
      <p class="eyebrow">Návrh e-mailu</p>
      <h3>${subject}</h3>
      <pre>${bodyLines.join("\n")}</pre>
    </article>
  `;
}

function renderInquiryForm() {
  const form = qs("#inquiry-form");
  if (!form) return;

  const actionSelect = qs("#action-type", form);
  const experienceSelect = qs("#experience-level", form);
  const flexibilitySelect = qs("#time-flexibility", form);
  const packageSelect = qs("#package-choice", form);
  const addOnBox = qs("#addon-options", form);
  const formNotice = qs("#form-notice");
  const emailOutput = qs("#email-output");
  const serviceFromQuery = new URLSearchParams(window.location.search).get("service");

  eventyData.formOptions.actionTypes.forEach((item) => actionSelect.appendChild(buildOption(item)));
  eventyData.formOptions.experienceLevels.forEach((item) => experienceSelect.appendChild(buildOption(item)));
  eventyData.formOptions.flexibility.forEach((item) => flexibilitySelect.appendChild(buildOption(item)));
  eventyData.formOptions.packages.forEach((item) => packageSelect.appendChild(buildOption(item)));

  eventyData.formOptions.addOnChoices.forEach((item, index) => {
    const label = createElement("label", "checkbox-item");
    label.innerHTML = `
      <input type="checkbox" name="addons" value="${item}">
      <span>${item}</span>
    `;
    if (index === eventyData.formOptions.addOnChoices.length - 1) {
      label.classList.add("checkbox-item--full");
    }
    addOnBox.appendChild(label);
  });

  const consentBox = qs("#consent-options", form);
  eventyData.formOptions.consents.forEach((item, index) => {
    const label = createElement("label", "checkbox-item checkbox-item--full");
    label.innerHTML = `
      <input type="checkbox" name="consents" value="${item}" ${index < 4 ? "required" : ""}>
      <span>${item}</span>
    `;
    consentBox.appendChild(label);
  });

  if (serviceFromQuery && servicesById[serviceFromQuery]) {
    actionSelect.value = servicesById[serviceFromQuery].name;
  }

  ["preferred-date", "backup-date-one", "backup-date-two"].forEach((id) => {
    const field = qs(`#${id}`, form);
    if (field) {
      field.min = new Date().toISOString().split("T")[0];
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const addOns = formData.getAll("addons");
    const consents = formData.getAll("consents");

    const summary = {
      name: formData.get("full-name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      actionType: formData.get("action-type"),
      participants: formData.get("participants"),
      groupProfile: formData.get("group-profile"),
      experience: formData.get("experience-level"),
      preferredDate: formData.get("preferred-date"),
      backupOne: formData.get("backup-date-one"),
      backupTwo: formData.get("backup-date-two"),
      flexibility: formData.get("time-flexibility"),
      packageChoice: formData.get("package-choice"),
      addOns,
      notes: formData.get("notes")
    };

    formNotice.innerHTML = `
      <div class="notice notice--success">
        <h3>Nezávazná poptávka je připravená</h3>
        <p>Frontend formuláře je validovaný a připravený na pozdější napojení na e-mail nebo backend. Níže vidíte, jak budou vypadat oba e-maily po odeslání.</p>
        <p><strong>Příjemce pro budoucí napojení:</strong> ${eventyData.recipientEmail}</p>
      </div>
    `;

    const adminSubject = `${eventyData.mailTemplates.adminSubjectPrefix} – ${summary.actionType} – ${summary.preferredDate || "termín doplníme"}`;
    const adminLines = [
      `Jméno: ${summary.name}`,
      `Firma: ${summary.company || "neuvedeno"}`,
      `E-mail: ${summary.email}`,
      `Telefon: ${summary.phone}`,
      `Typ akce: ${summary.actionType}`,
      `Balíček: ${summary.packageChoice}`,
      `Počet osob: ${summary.participants}`,
      `Věk / složení skupiny: ${summary.groupProfile || "neuvedeno"}`,
      `Zkušenosti skupiny: ${summary.experience}`,
      `Preferovaný termín: ${summary.preferredDate || "neuvedeno"}`,
      `Náhradní termín 1: ${summary.backupOne || "neuvedeno"}`,
      `Náhradní termín 2: ${summary.backupTwo || "neuvedeno"}`,
      `Časová flexibilita: ${summary.flexibility}`,
      `Příplatkové služby: ${addOns.length ? addOns.join(", ") : "bez příplatků"}`,
      `Individuální požadavky: ${summary.notes || "neuvedeno"}`,
      `Souhlasy: ${consents.length ? consents.join(" | ") : "neuvedeno"}`,
      `Datum odeslání: ${new Date().toLocaleString("cs-CZ")}`
    ];

    emailOutput.innerHTML =
      buildEmailPreview(eventyData.mailTemplates.customerSubject, eventyData.mailTemplates.customerBody) +
      buildEmailPreview(adminSubject, adminLines);
  });
}

function initMenu() {
  const toggle = qs(".menu-toggle");
  const nav = qs(".site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });
}

function initHeaderScrollState() {
  const header = qs(".site-header");
  if (!header) return;

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

function initReveal() {
  const items = qsa(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initHeaderScrollState();
  initReveal();
  renderHomePage();
  renderServicesPage();
  renderDocumentsPage();
  renderInquiryForm();
});
