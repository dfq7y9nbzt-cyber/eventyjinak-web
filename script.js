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

function getServiceActions(service) {
  return service.actions || {
    primaryLabel: "Detail služby",
    primaryHref: `sluzby.html#${service.id}`,
    secondaryLabel: "Poptat termín",
    secondaryHref: `rezervace.html?service=${service.id}`
  };
}

function createServiceCard(service) {
  const actions = getServiceActions(service);
  const card = createElement("article", "service-card service-card--featured");
  card.innerHTML = `
    <img src="${service.cardImage}" alt="${service.cardAlt}" class="service-card__image">
    <div class="service-card__body">
      <h3>${service.name}</h3>
      <p class="service-card__audience">${service.audience}</p>
      <p>${service.teaser}</p>
      <p class="price-tag">${service.priceFrom}</p>
      <div class="card-actions">
        <a class="button button-primary" href="${actions.primaryHref}">${actions.primaryLabel}</a>
        <a class="button button-cta-green" href="${actions.secondaryHref}">${actions.secondaryLabel}</a>
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
    eventyData.services
      .filter((service) => service.showOnHome !== false)
      .forEach((service) => featuredGrid.appendChild(createServiceCard(service)));
  }

  qsa("[data-price-note]").forEach((node) => {
    node.textContent = eventyData.priceNote;
  });
}

function renderServicesPage() {
  const detailSections = qs("#service-details");
  if (detailSections) {
    eventyData.services.forEach((service) => {
      const actions = getServiceActions(service);
      const section = createElement("section", "service-detail");
      section.id = service.id;
      section.innerHTML = `
        <div class="service-detail__media">
          <img src="${service.heroImage}" alt="${service.heroAlt}">
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
      `;
      if (eventyData.safetyHighlights?.length) {
        safety.appendChild(createList(eventyData.safetyHighlights));
      }

      metaGrid.append(idealFor, process, included, safety);

      let packages;
      if (service.customExperience) {
        packages = createElement("article", "info-card info-card--custom-service");
        packages.innerHTML = `
          <h3>Poskládejte si vlastní akci krok za krokem</h3>
          <p>V detailním formuláři si zvolíte počet osob, termín nebo rozpětí dnů, typ akce, druh skály, oblast v ČR, náročnost přístupu i služby, které pro vás máme zajistit.</p>
          <p class="small-note">Pokud si nejste jistí volbou, napište nám rychlý dotaz a doporučíme vhodnou variantu.</p>
        `;
      } else {
        packages = createElement("div", "package-grid");
        packages.append(
          createPackageCard("Standard", service.standard),
          createPackageCard("Premium", service.premium)
        );
      }

      const ctaBar = createElement("div", "detail-actions");
      ctaBar.innerHTML = `
        <a class="button button-primary" href="${actions.primaryHref}">${actions.primaryLabel}</a>
        <a class="button button-secondary" href="${actions.secondaryHref}">${actions.secondaryLabel}</a>
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

function parseParticipantCount(value) {
  const numbers = (value || "")
    .toString()
    .match(/\d+/g);

  if (!numbers || !numbers.length) return 0;
  return Math.max(...numbers.map((item) => Number(item)).filter((item) => Number.isFinite(item)));
}

function getInclusiveDays(fromValue, toValue, eventType) {
  if (!fromValue) {
    return eventType === "Vícedenní pobyt" ? 2 : 1;
  }

  if (!toValue) {
    return eventType === "Vícedenní pobyt" ? 2 : 1;
  }

  const from = new Date(fromValue);
  const to = new Date(toValue);
  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime()) || to < from) {
    return eventType === "Vícedenní pobyt" ? 2 : 1;
  }

  const diffDays = Math.round((to - from) / 86400000) + 1;
  return Math.max(1, diffDays);
}

function roundUpPrice(value) {
  return Math.ceil(value / 500) * 500;
}

function formatPrice(value) {
  return `${Math.round(value).toLocaleString("cs-CZ")} Kč`;
}

function parseBudgetValue(value) {
  const numbers = (value || "")
    .toString()
    .replace(/\s/g, "")
    .match(/\d+/g);

  if (!numbers || !numbers.length) return 0;
  return Number(numbers.join(""));
}

function getCustomEventBaseSurcharge(eventType, days) {
  const multipliers = {
    "Lezecká pohoda v přírodě": 0,
    "Vzdělávací / seznamovací kurz": 1500,
    "Zábavný event pro skupinu": 2500,
    "Adrenalinový program": 6000,
    "Firemní teambuilding": 4000,
    "Vícedenní pobyt": 2500,
    "Soukromá oslava nebo uzavřená akce": 3000,
    "Nevím, chci doporučit vhodný formát": 2000
  };

  return (multipliers[eventType] || 0) * days;
}

function getTransportCost(participants, travelKm) {
  const transport = eventyData.customEstimator.transport;
  const safeKm = travelKm || 180;

  if (participants <= 6) {
    return (transport.smallCarPer100Km / 100) * safeKm;
  }

  if (participants <= 8) {
    return Math.max(safeKm * transport.upTo8PerKm, transport.minimumUpTo8);
  }

  if (participants <= 16) {
    return Math.max(safeKm * transport.upTo16PerKm, transport.minimumUpTo16);
  }

  if (participants <= 20) {
    return Math.max(safeKm * transport.upTo20PerKm, transport.minimumUpTo20);
  }

  return Math.max(safeKm * transport.over20PerKm, transport.minimumOver20);
}

function getRockTypeCategory(locality) {
  return locality.rockType === "piskovec" ? "piskovec" : "skala";
}

function getDetailedRockTypeLabel(rockType) {
  const labels = {
    piskovec: "pískovec",
    zula: "žula a pevná skála",
    vapenec: "vápenec",
    buliznik: "tvrdá skála / buližník"
  };
  return labels[rockType] || rockType;
}

function getRecommendedRockType(selectedActivities, season) {
  if (selectedActivities.has("Drytool / zimní techniky") || selectedActivities.has("Via ferrata")) {
    return "skala";
  }

  if (season === "zimní období") {
    return "skala";
  }

  if (
    selectedActivities.has("Přespání / bivakový zážitek") ||
    selectedActivities.has("Bushcraft / pobyt v přírodě") ||
    selectedActivities.has("Lezecký den na pohodu")
  ) {
    return "piskovec";
  }

  return "";
}

function localitySupportsAudience(locality, audienceFit) {
  if (!audienceFit || audienceFit === "je mi to jedno") return true;

  const familyFriendly = new Set([
    "prachovske-skaly",
    "borecke-skaly",
    "divoka-sarka",
    "srbsko-alkazar",
    "drabske-svetnicky",
    "pisecke-skaly",
    "svaty-jan"
  ]);

  if (audienceFit === "vhodné pro děti" || audienceFit === "vhodné pro rodiny") {
    return locality.access !== "dobrodružnější nástup" && familyFriendly.has(locality.value);
  }

  if (audienceFit === "vhodné pro firmu") {
    return true;
  }

  if (audienceFit === "vhodné pro partu přátel") {
    return true;
  }

  return true;
}

function localitySupportsActivities(locality, selectedActivities, season) {
  if (!selectedActivities.size && (!season || season === "je mi to jedno")) return true;

  const drytoolLocalities = new Set(["vir"]);
  const viaFerrataLocalities = new Set(["vir"]);
  const bivakLocalities = new Set(["adrspach-teplice", "rabstejn", "tiske-steny-ostrov", "ostrov-labske-piskovce", "kozelka", "moravsky-kras"]);
  const winterFriendly = new Set(["vir", "divoka-sarka", "srbsko-alkazar", "palava", "moravsky-kras", "svaty-jan"]);

  if (selectedActivities.has("Drytool / zimní techniky")) {
    return drytoolLocalities.has(locality.value);
  }

  if (selectedActivities.has("Via ferrata") && !viaFerrataLocalities.has(locality.value)) {
    return false;
  }

  if (selectedActivities.has("Přespání / bivakový zážitek") && !bivakLocalities.has(locality.value)) {
    return false;
  }

  if (season === "zimní období" && !winterFriendly.has(locality.value)) {
    return false;
  }

  return true;
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
      <input type="checkbox" name="consents" value="${item}" required>
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

function renderCustomExperienceForm() {
  const form = qs("#custom-experience-form");
  if (!form) return;

  const eventTypeSelect = qs("#custom-event-type", form);
  const experienceSelect = qs("#custom-experience-level", form);
  const audienceFitSelect = qs("#custom-audience-fit", form);
  const seasonSelect = qs("#custom-season", form);
  const rockTypeSelect = qs("#custom-rock-type", form);
  const localitySelect = qs("#custom-locality", form);
  const accessSelect = qs("#custom-access", form);
  const activityBox = qs("#custom-activity-options", form);
  const serviceBox = qs("#custom-service-options", form);
  const consentBox = qs("#custom-consent-options", form);
  const formNotice = qs("#custom-form-notice");
  const localityMeta = qs("#custom-locality-meta");
  const recommendationTitle = qs("#custom-recommendation-title");
  const recommendationCopy = qs("#custom-recommendation-copy");
  const estimatePrice = qs("#custom-estimate-price");
  const estimateSummary = qs("#custom-estimate-summary");
  const estimateBreakdown = qs("#custom-estimate-breakdown");
  const estimateTrigger = qs("#custom-estimate-trigger", form.parentElement);
  let estimateVisible = false;
  let rockTypeManuallyChanged = false;

  eventyData.customFormOptions.eventTypes.forEach((item) => {
    eventTypeSelect.appendChild(buildOption(item));
  });

  eventyData.formOptions.experienceLevels.forEach((item) => {
    experienceSelect.appendChild(buildOption(item));
  });

  eventyData.customFormOptions.audienceFits.forEach((item) => {
    audienceFitSelect.appendChild(buildOption(item));
  });

  eventyData.customFormOptions.seasonOptions.forEach((item) => {
    seasonSelect.appendChild(buildOption(item));
  });

  eventyData.customFormOptions.rockTypes.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.label;
    rockTypeSelect.appendChild(option);
  });

  eventyData.customFormOptions.accessLevels.forEach((item) => {
    accessSelect.appendChild(buildOption(item));
  });

  eventyData.customFormOptions.activityChoices.forEach((item) => {
    const label = createElement("label", "checkbox-item");
    label.innerHTML = `
      <input type="checkbox" name="activities" value="${item}">
      <span>${item}</span>
    `;
    activityBox.appendChild(label);
  });

  eventyData.customFormOptions.serviceChoices.forEach((item) => {
    const label = createElement("label", "checkbox-item");
    label.innerHTML = `
      <input type="checkbox" name="requested-services" value="${item}">
      <span>${item}</span>
    `;
    serviceBox.appendChild(label);
  });

  eventyData.formOptions.consents.forEach((item) => {
    const label = createElement("label", "checkbox-item checkbox-item--full");
    label.innerHTML = `
      <input type="checkbox" name="consents" value="${item}" required>
      <span>${item}</span>
    `;
    consentBox.appendChild(label);
  });

  const renderLocalities = () => {
    const currentRockType = rockTypeSelect.value;
    const currentAudienceFit = audienceFitSelect.value;
    const currentSeason = seasonSelect.value;
    const selectedActivities = new Set(new FormData(form).getAll("activities"));
    localitySelect.innerHTML = '<option value="">Vyberte lokalitu</option>';

    const matchingLocalities = eventyData.customFormOptions.localities
      .filter((item) => (currentRockType ? currentRockType === "any" || getRockTypeCategory(item) === currentRockType : true))
      .filter((item) => localitySupportsAudience(item, currentAudienceFit))
      .filter((item) => localitySupportsActivities(item, selectedActivities, currentSeason));

    matchingLocalities.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.value;
        option.textContent = `${item.label} — ${item.region}`;
        localitySelect.appendChild(option);
      });

    localityMeta.textContent = matchingLocalities.length
      ? ""
      : "Pro tuto kombinaci aktivit, období a cílové skupiny teď nemáme v databázi vhodnou lokalitu. Napište nám dotaz a navrhneme řešení ručně.";

    if (!matchingLocalities.length) {
      recommendationTitle.textContent = "Potřebujete individuální doporučení";
      recommendationCopy.textContent = "Pro zvolenou kombinaci aktivit nebo období nemáme vhodnou lokalitu přímo ve formuláři. Napište nám dotaz a navrhneme ruční variantu.";
      return;
    }

    const recommended = matchingLocalities[0];
    recommendationTitle.textContent = recommended.label;
    recommendationCopy.textContent = `${recommended.region} | ${getDetailedRockTypeLabel(recommended.rockType)} | ${recommended.access}. Tuhle lokalitu teď doporučujeme jako nejbližší shodu podle vašeho výběru.`;
  };

  const syncLocalityMeta = () => {
    const selected = eventyData.customFormOptions.localities.find((item) => item.value === localitySelect.value);
    if (!selected) {
      localityMeta.textContent = "";
      return;
    }

    localityMeta.textContent = `${selected.label} | ${selected.region} | ${getDetailedRockTypeLabel(selected.rockType)} | ${selected.access}`;
    recommendationTitle.textContent = selected.label;
    recommendationCopy.textContent = `${selected.region} | ${getDetailedRockTypeLabel(selected.rockType)} | ${selected.access}. Tuhle lokalitu máte vybranou jako aktuální preferenci.`;
  };

  const updateEstimate = (forceVisible = false) => {
    if (forceVisible) {
      estimateVisible = true;
    }

    const formData = new FormData(form);
    const participants = parseParticipantCount(formData.get("participants"));
    const eventType = (formData.get("event-type") || "").toString();
    const days = getInclusiveDays(formData.get("date-from"), formData.get("date-to"), eventType);
    const locality = eventyData.customFormOptions.localities.find((item) => item.value === localitySelect.value);
    const budget = parseBudgetValue(formData.get("budget-estimate"));

    if (!participants || !eventType) {
      estimatePrice.textContent = "Začněte vybírat parametry akce";
      estimateSummary.textContent = "Jakmile doplníte počet osob, termín, lokalitu a služby, zobrazíme orientační cenu od bez DPH.";
      estimateBreakdown.innerHTML = "";
      return;
    }

    const estimator = eventyData.customEstimator;
    const instructorCount = Math.max(estimator.minInstructors, Math.ceil(participants / estimator.participantsPerInstructor));
    const selectedServices = new Set(formData.getAll("requested-services"));
    const selectedActivities = new Set(formData.getAll("activities"));
    const nights = Math.max(0, days - 1 || (selectedServices.has("Ubytování") ? 1 : 0));

    const breakdown = [];
    let totalCost = 0;

    const instructorCost = instructorCount * estimator.instructorCostPerDay * days;
    totalCost += instructorCost;
    breakdown.push(`Instruktoři a vedení programu (${instructorCount} × ${days} den/ny): ${formatPrice(instructorCost)}`);

    const organizationCost = participants * estimator.organizationCostPerPersonPerDay * days;
    totalCost += organizationCost;
    breakdown.push(`Organizace a administrativa (${participants} osob × ${days} den/ny): ${formatPrice(organizationCost)}`);

    const equipmentCost = participants * estimator.equipmentCostPerPerson;
    totalCost += equipmentCost;
    breakdown.push(`Základní vybavení (${participants} osob): ${formatPrice(equipmentCost)}`);

    const eventSurcharge = getCustomEventBaseSurcharge(eventType, days);
    if (eventSurcharge) {
      totalCost += eventSurcharge;
      breakdown.push(`Typ akce a programová náročnost: ${formatPrice(eventSurcharge)}`);
    }

    selectedActivities.forEach((activity) => {
      const surcharge = estimator.activitySurcharges[activity] || 0;
      if (surcharge) {
        totalCost += surcharge;
        breakdown.push(`${activity}: ${formatPrice(surcharge)}`);
      }
    });

    if (selectedServices.has("Dopravu z Prahy a okolí")) {
      const transportCost = getTransportCost(participants, locality?.travelKm);
      totalCost += transportCost;
      breakdown.push(`Doprava ${locality ? `do oblasti ${locality.label}` : "na lokalitu"}: ${formatPrice(transportCost)}`);
    }

    if (selectedServices.has("Ubytování")) {
      const lodgingCost = participants * Math.max(1, nights) * estimator.lodgingCostPerPersonPerNight;
      totalCost += lodgingCost;
      breakdown.push(`Ubytování (${participants} osob × ${Math.max(1, nights)} noc/i): ${formatPrice(lodgingCost)}`);
    }

    if (selectedServices.has("Snack a pitný režim")) {
      const snackCost = participants * days * estimator.snackCostPerPersonPerDay;
      totalCost += snackCost;
      breakdown.push(`Snack a pitný režim: ${formatPrice(snackCost)}`);
    }

    if (selectedServices.has("Catering / plnou penzi")) {
      const cateringCost = participants * days * estimator.standardCateringCostPerPersonPerDay;
      totalCost += cateringCost;
      breakdown.push(`Catering / plná penze: ${formatPrice(cateringCost)}`);
    }

    if (selectedServices.has("Fotografa")) {
      totalCost += estimator.photographerCostFlat;
      breakdown.push(`Fotograf: ${formatPrice(estimator.photographerCostFlat)}`);
    }

    if (selectedServices.has("Video / reels")) {
      totalCost += estimator.videoCostFlat;
      breakdown.push(`Video / reels: ${formatPrice(estimator.videoCostFlat)}`);
    }

    if (selectedServices.has("Večerní program")) {
      totalCost += estimator.eveningProgramCostFlat;
      breakdown.push(`Večerní program: ${formatPrice(estimator.eveningProgramCostFlat)}`);
    }

    if (selectedServices.has("Anglicky mluvícího instruktora")) {
      const englishInstructorCost = instructorCost * 0.2;
      totalCost += englishInstructorCost;
      breakdown.push(`Anglicky mluvící instruktor: ${formatPrice(englishInstructorCost)}`);
    }

    if (selectedServices.has("Záložní indoor variantu")) {
      breakdown.push("Záložní indoor varianta: v ceně");
    }

    if (selectedServices.has("Teambuildingové aktivity navíc")) {
      totalCost += estimator.extraTeamActivitiesFlat;
      breakdown.push(`Rozšířené týmové aktivity: ${formatPrice(estimator.extraTeamActivitiesFlat)}`);
    }

    if (selectedServices.has("Dárkový balíček pro účastníky")) {
      const giftCost = participants * estimator.giftPackageCostPerPerson;
      totalCost += giftCost;
      breakdown.push(`Dárkový balíček pro účastníky: ${formatPrice(giftCost)}`);
    }

    const priceWithoutVat = roundUpPrice(totalCost * estimator.marginMultiplier);
    const perPerson = roundUpPrice(priceWithoutVat / participants);

    estimatePrice.textContent = `Orientační cena od ${formatPrice(priceWithoutVat)} bez DPH`;
    let summaryText = `Pro ${participants} osob, ${days} den/ny${locality ? `, lokalita ${locality.label}` : ""}. Orientačně cca ${formatPrice(perPerson)} / osoba bez DPH.`;
    if (budget) {
      summaryText += budget >= priceWithoutVat
        ? ` Vámi zadaný rozpočet ${formatPrice(budget)} bez DPH tomuto návrhu orientačně odpovídá.`
        : ` Vámi zadaný rozpočet ${formatPrice(budget)} bez DPH je pod tímto odhadem, takže budeme hledat úspornější variantu.`;
    }
    estimateSummary.textContent = summaryText;
    estimateBreakdown.innerHTML = "";
    breakdown.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      estimateBreakdown.appendChild(li);
    });
  };

  renderLocalities();
  rockTypeSelect.addEventListener("change", renderLocalities);
  rockTypeSelect.addEventListener("change", updateEstimate);
  audienceFitSelect.addEventListener("change", renderLocalities);
  audienceFitSelect.addEventListener("change", updateEstimate);
  seasonSelect.addEventListener("change", renderLocalities);
  seasonSelect.addEventListener("change", updateEstimate);
  localitySelect.addEventListener("change", syncLocalityMeta);
  localitySelect.addEventListener("change", updateEstimate);
  rockTypeSelect.addEventListener("change", () => {
    rockTypeManuallyChanged = true;
  });

  ["custom-date-from", "custom-date-to"].forEach((id) => {
    const field = qs(`#${id}`, form);
    if (field) {
      field.min = new Date().toISOString().split("T")[0];
    }
  });

  qsa("input, select, textarea", form).forEach((field) => {
    field.addEventListener("input", () => {
      if (estimateVisible) updateEstimate();
    });
    field.addEventListener("change", () => {
      if (field.name === "activities") {
        const selectedActivities = new Set(new FormData(form).getAll("activities"));
        const recommendedRockType = getRecommendedRockType(selectedActivities, seasonSelect.value);
        if (!rockTypeManuallyChanged && recommendedRockType) {
          rockTypeSelect.value = recommendedRockType;
        }
        renderLocalities();
      }
      if (estimateVisible) updateEstimate();
    });
  });

  if (estimateTrigger) {
    estimateTrigger.addEventListener("click", () => updateEstimate(true));
  }

  configureHostedForm(form, eventyData.formDelivery.inquiry.endpoint.trim(), {
    formNotice,
    submittedKey: "custom-experience",
    inactiveTitle: "Odeslání formuláře zatím není aktivní",
    inactiveLines: [
      `Prozatím prosím napište na ${eventyData.recipientEmail}.`
    ],
    subjectBuilder(formData) {
      const eventType = (formData.get("event-type") || "").toString().trim();
      const locality = (formData.get("preferred-locality") || "").toString().trim();
      return `${eventyData.mailTemplates.adminSubjectPrefix} – zážitek na míru – ${eventType || "bez typu"}${locality ? ` – ${locality}` : ""}`;
    },
    autoresponseLines: eventyData.mailTemplates.customerBody
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
  renderCustomExperienceForm();
  renderContactForm();
});
