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

async function submitFormToEndpoint(form, endpoint, extraFields = {}) {
  const formData = new FormData(form);
  Object.entries(extraFields).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json"
    },
    body: formData
  });

  if (!response.ok) {
    throw new Error(`Form submit failed with status ${response.status}`);
  }
}

function renderNoticeMessage(title, lines, className = "") {
  const body = lines
    .map((line) => (line ? `<p>${line}</p>` : ""))
    .join("");

  return `
    <div class="notice${className ? ` ${className}` : ""}">
      <h3>${title}</h3>
      ${body}
    </div>
  `;
}

function upsertHiddenField(form, name, value) {
  let field = qs(`input[name="${name}"]`, form);

  if (!field) {
    field = document.createElement("input");
    field.type = "hidden";
    field.name = name;
    form.appendChild(field);
  }

  field.value = value;
}

function buildReturnUrl(submittedKey) {
  const url = new URL("odeslano.html", window.location.href);
  url.searchParams.set("from", submittedKey);
  return url.toString();
}

function buildCurrentPageUrl() {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  return url.toString();
}

function configureHostedForm(form, endpoint, options) {
  const {
    formNotice,
    submittedKey,
    inactiveTitle,
    inactiveLines,
    subjectBuilder,
    autoresponseLines
  } = options;

  form.method = "POST";
  form.action = endpoint || "";
  form.acceptCharset = "UTF-8";

  if (!endpoint) {
    if (formNotice) {
      formNotice.innerHTML = renderNoticeMessage(inactiveTitle, inactiveLines);
    }
    return;
  }

  upsertHiddenField(form, "_next", buildReturnUrl(submittedKey));
  upsertHiddenField(form, "_url", buildCurrentPageUrl());
  upsertHiddenField(form, "_template", "table");

  form.addEventListener("submit", (event) => {
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }

    const formData = new FormData(form);
    const replyTo = (formData.get("email") || "").toString().trim();
    const dynamicSubject = subjectBuilder(formData);
    const autoresponse = autoresponseLines.join("\n");

    upsertHiddenField(form, "_subject", dynamicSubject);
    upsertHiddenField(form, "_replyto", replyTo);
    upsertHiddenField(form, "_autoresponse", autoresponse);

    if (formNotice) {
      formNotice.innerHTML = renderNoticeMessage("Odesíláme formulář", [
        "Po potvrzení se vrátíte zpět na tuto stránku."
      ]);
    }
  });
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

  configureHostedForm(form, eventyData.formDelivery.inquiry.endpoint.trim(), {
    formNotice,
    submittedKey: "inquiry",
    inactiveTitle: "Odeslání formuláře zatím není aktivní",
    inactiveLines: [
      `Prozatím prosím napište na ${eventyData.recipientEmail}.`
    ],
    subjectBuilder(formData) {
      const actionType = formData.get("action-type");
      const preferredDate = formData.get("preferred-date");
      return `${eventyData.mailTemplates.adminSubjectPrefix} – ${actionType} – ${preferredDate || "termín doplníme"}`;
    },
    autoresponseLines: eventyData.mailTemplates.customerBody
  });
  return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const endpoint = eventyData.formDelivery.inquiry.endpoint.trim();
    if (!endpoint) {
      formNotice.innerHTML = `
        <div class="notice">
          <h3>Odeslání formuláře zatím není aktivní</h3>
          <p>Formulář je připravený pro externí formulářovou službu, ale endpoint ještě není doplněný. Prozatím prosím napište na <a href="mailto:${eventyData.recipientEmail}">${eventyData.recipientEmail}</a>.</p>
        </div>
      `;
      return;
    }

    const formData = new FormData(form);
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
      addOns: formData.getAll("addons"),
      notes: formData.get("notes")
    };

    const adminSubject = `${eventyData.mailTemplates.adminSubjectPrefix} – ${summary.actionType} – ${summary.preferredDate || "termín doplníme"}`;

    submitFormToEndpoint(form, endpoint, {
      _subject: adminSubject,
      _replyto: summary.email,
      recipient: eventyData.formDelivery.inquiry.recipient
    })
      .then(() => {
        const customerMessage = eventyData.mailTemplates.customerBody
          .filter(Boolean)
          .map((line) => `<p>${line}</p>`)
          .join("");
        formNotice.innerHTML = `
          <div class="notice notice--success">
            <h3>${eventyData.mailTemplates.customerSubject}</h3>
            ${customerMessage}
          </div>
        `;
        form.reset();
      })
      .catch(() => {
        formNotice.innerHTML = `
          <div class="notice">
            <h3>Formulář se nepodařilo odeslat</h3>
            <p>Zkuste to prosím znovu, nebo napište přímo na <a href="mailto:${eventyData.recipientEmail}">${eventyData.recipientEmail}</a>.</p>
          </div>
        `;
      });
  });
}

function renderContactForm() {
  const form = qs("#contact-form");
  if (!form) return;

  const formNotice = qs("#contact-form-notice");

  configureHostedForm(form, eventyData.formDelivery.contact.endpoint.trim(), {
    formNotice,
    submittedKey: "contact",
    inactiveTitle: "Odeslání formuláře zatím není aktivní",
    inactiveLines: [
      `Prozatím prosím napište svůj dotaz na ${eventyData.recipientEmail}.`
    ],
    subjectBuilder(formData) {
      const firstName = (formData.get("first-name") || "").toString().trim();
      const lastName = (formData.get("last-name") || "").toString().trim();
      const fullName = `${firstName} ${lastName}`.trim();
      return `${eventyData.mailTemplates.contactSubjectPrefix} – ${fullName || "bez jména"}`;
    },
    autoresponseLines: eventyData.mailTemplates.contactCustomerBody
  });
  return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const endpoint = eventyData.formDelivery.contact.endpoint.trim();
    if (!endpoint) {
      formNotice.innerHTML = `
        <div class="notice">
          <h3>Odeslání formuláře zatím není aktivní</h3>
          <p>Prozatím prosím napište svůj dotaz na <a href="mailto:${eventyData.recipientEmail}">${eventyData.recipientEmail}</a>.</p>
        </div>
      `;
      return;
    }

    const formData = new FormData(form);
    const email = formData.get("email");
    const fullName = `${formData.get("first-name")} ${formData.get("last-name")}`.trim();
    const subject = `${eventyData.mailTemplates.contactSubjectPrefix} – ${fullName || "bez jména"}`;

    submitFormToEndpoint(form, endpoint, {
      _subject: subject,
      _replyto: email,
      recipient: eventyData.formDelivery.contact.recipient
    })
      .then(() => {
        formNotice.innerHTML = `
          <div class="notice notice--success">
            <h3>Dotaz jsme přijali</h3>
            <p>Ozveme se vám co nejdříve na uvedený e-mail.</p>
          </div>
        `;
        form.reset();
      })
      .catch(() => {
        formNotice.innerHTML = `
          <div class="notice">
            <h3>Dotaz se nepodařilo odeslat</h3>
            <p>Zkuste to prosím znovu, nebo napište přímo na <a href="mailto:${eventyData.recipientEmail}">${eventyData.recipientEmail}</a>.</p>
          </div>
        `;
      });
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
  renderContactForm();
});
