const siteData = [
  {
    id: "skaly",
    name: "Lezen� ve skal�ch",
    shortDescription: "Programy pro prvn� kroky venku i pro zku�en�j�� lezce.",
    description:
      "Skaln� programy pro jednotlivce i men�� skupiny. D�raz na bezpe�nost, veden� a opravdov� z�itek ve sk�le.",
    services: [
      {
        id: "prvni-lezeni-venku",
        name: "Prvn� lezen� venku",
        price: "od 2 490 K� / osoba",
        duration: "3-4 hodiny",
        capacity: "1-4 osoby",
        summary: "Sezn�men� se skalou, ji�t�n�m, pohybem a prvn�m lezen�m v p��rod�.",
        bullets: ["Zap�j�en� z�kladn�ho vybaven�", "Instruktor po celou dobu", "Vhodn� i bez p�edchoz� zku�enosti"]
      },
      {
        id: "pokrocili-zazitek",
        name: "Lezeck� z�itek pro pokro�il�",
        price: "od 3 900 K� / skupina",
        duration: "5 hodin",
        capacity: "1-3 osoby",
        summary: "Technika, pr�ce v ter�nu, v�b�r cest a veden� den pro lezce se zku�enost�.",
        bullets: ["Vhodn� pro lezce se z�klady", "Mo�nost zam��en� na techniku", "Program podle v�konnosti skupiny"]
      },
      {
        id: "lezecke-objevovani",
        name: "Lezeck� objevov�n�",
        price: "od 4 500 K� / skupina",
        duration: "cel� den",
        capacity: "2-6 osob",
        summary: "Celodenn� objevov�n� skaln� oblasti, kombinace lezen� a pohybu v p��rod�.",
        bullets: ["V�ce stanovi�� b�hem dne", "D�raz na atmosf�ru a objevov�n�", "Vhodn� pro kamar�dy i p�ry"]
      }
    ]
  },
  {
    id: "teambuilding-skaly",
    name: "Teambuilding ve skal�ch",
    shortDescription: "Firemn� a skupinov� programy s jasn�m rozd�len�m podle velikosti t�mu.",
    description:
      "Spole�n� z�itek ve skal�ch, kter� m��eme p�izp�sobit men��m t�m�m i v�t��m skupin�m. Program je veden� s ohledem na bezpe�� a flow cel� akce.",
    services: [
      {
        id: "male-skupiny",
        name: "Mal� skupiny do 7 lid�",
        price: "od 12 900 K� / akce",
        duration: "4 hodiny",
        capacity: "do 7 lid�",
        summary: "Kompaktn� teambuilding s intenzivn�m zapojen�m v�ech ��astn�k�.",
        bullets: ["Vhodn� pro mal� firmy", "Vy��� m�ra individu�ln�ho veden�", "Mo�nost p�idat spole�n� piknik"]
      },
      {
        id: "stredni-skupiny",
        name: "Skupiny 8-16 lid�",
        price: "od 21 500 K� / akce",
        duration: "4-6 hodin",
        capacity: "8-16 lid�",
        summary: "Skaln� program s rotac� stanovi�� a zapojen�m v�ech �len� t�mu.",
        bullets: ["Vhodn� pro t�mov� dny", "Mo�nost rozd�len� do men��ch skupin", "Dob�e funguje i pro sm�en� �rovn� zku�enost�"]
      },
      {
        id: "velke-skupiny",
        name: "Velk� skupiny",
        price: "od 34 900 K� / akce",
        duration: "na m�ru",
        capacity: "17+ lid�",
        summary: "Z�itkov� program ve v�t��m form�tu s koordinac� v�ce instruktor�.",
        bullets: ["Sc�n�� na m�ru", "Mo�nost kombinovat lezen� a outdoor v�zvy", "Vhodn� pro v�t�� firmy nebo eventy"]
      }
    ]
  },
  {
    id: "oslavy",
    name: "Oslavy s lezen�m",
    shortDescription: "Z�itkov� oslavy pro d�ti i venkovn� akce s lezen�m.",
    description:
      "Lezen� jako st�edobod oslavy. Pro d�ti i pro skupiny, kter� cht�j� netradi�n� program venku.",
    services: [
      {
        id: "oslavy-pro-deti",
        name: "Oslavy pro d�ti",
        price: "od 6 900 K� / akce",
        duration: "3 hodiny",
        capacity: "a� 12 d�t�",
        summary: "Hrava� oslava s lezen�m, jednoduch�mi v�zvami a bezpe�n�m veden�m.",
        bullets: ["Program p�im��en� v�ku", "Mo�nost tematick�ho sc�n��e", "Vhodn� pro za��te�n�ky"]
      },
      {
        id: "zazitkova-oslava-venku",
        name: "Z�itkov� oslava venku",
        price: "od 9 500 K� / akce",
        duration: "4 hodiny",
        capacity: "6-16 osob",
        summary: "Venkovn� oslava postaven� na lezen�, pohybu a spole�n�m z�itku.",
        bullets: ["Pro partu p��tel i rodinu", "Lezen� dopln�n� o dal�� aktivity", "Mo�nost fotografick�ho bal��ku"]
      }
    ]
  },
  {
    id: "prespani",
    name: "P�esp�n� ve skal�ch",
    shortDescription: "Netradi�n� noc v p��rod� rozd�len� podle velikosti skupiny.",
    description:
      "Z�itkov� p�esp�n� ve skaln�m prost�ed� s p��pravou, veden�m a bezpe�n�m pr�b�hem. Program lze p�izp�sobit velikosti skupiny.",
    services: [
      {
        id: "prespani-1-3",
        name: "P�esp�n� ve skal�ch pro 1-3 lidi",
        price: "od 8 900 K� / noc",
        duration: "ve�er + noc + r�no",
        capacity: "1-3 osoby",
        summary: "Intimn�j�� varianta pro dvojice, trojici p��tel nebo mal� t�m.",
        bullets: ["Komorn� veden� z�itek", "Doporu�en� vhodn� lokality", "Vhodn� i jako d�rkov� z�itek"]
      },
      {
        id: "prespani-4-5",
        name: "P�esp�n� ve skal�ch pro 4-5 lid�",
        price: "od 12 900 K� / noc",
        duration: "ve�er + noc + r�no",
        capacity: "4-5 osob",
        summary: "Vyv�en� form�t pro men�� skupinu, kter� chce spole�n� z�itek v p��rod�.",
        bullets: ["Skv�l� pro kamar�dy i men�� t�m", "Program s ve�ern� atmosf�rou", "Mo�nost doplnit rann� aktivitu"]
      },
      {
        id: "prespani-6-7",
        name: "P�esp�n� ve skal�ch pro 6-7 lid�",
        price: "od 17 500 K� / noc",
        duration: "ve�er + noc + r�no",
        capacity: "6-7 osob",
        summary: "Siln� skupinov� z�itek s v�t��m d�razem na organizaci a sc�n��.",
        bullets: ["Vhodn� pro oslavu nebo teambuilding", "D�raz na logistiku a komfort", "Mo�nost roz���en� o denn� program"]
      }
    ]
  },
  {
    id: "indoor",
    name: "Indoor st�ny",
    shortDescription: "Varianta pro m�sto, firmy i oslavy, kdy� chcete lezen� pod st�echou.",
    description:
      "Lezeck� programy na indoor st�n�ch. Dobr� pro firmy, skupiny i prvn� kontakt s lezen�m bez ohledu na po�as�.",
    services: [
      {
        id: "indoor-teambuilding",
        name: "Teambuilding s lezen�m",
        price: "od 11 500 K� / akce",
        duration: "3 hodiny",
        capacity: "6-18 osob",
        summary: "Firemn� lezen� na st�n� s programem p�izp�soben�m skupin�.",
        bullets: ["Vhodn� celoro�n�", "Nen�ro�n� na logistiku", "Mo�nost doplnit o sout�n� prvky"]
      },
      {
        id: "indoor-oslava",
        name: "Oslava s lezen�m",
        price: "od 7 900 K� / akce",
        duration: "2,5 hodiny",
        capacity: "6-14 osob",
        summary: "Dynamick� indoor oslava s lezen�m a jednoduch�m organiza�n�m pr�b�hem.",
        bullets: ["Vhodn� pro d�ti i dosp�l�", "Program p�izp�soben �rovni skupiny", "Praktick� i za hor��ho po�as�"]
      },
      {
        id: "seznamuji-se-s-lezenim",
        name: "Seznamuji se s lezen�m",
        price: "od 1 690 K� / osoba",
        duration: "2 hodiny",
        capacity: "1-6 osob",
        summary: "Prvn� bezpe�n� setk�n� s lezen�m na st�n� pod veden�m instruktora.",
        bullets: ["Ide�ln� start pro za��te�n�ky", "Bez nutnosti vlastn� v�bavy", "Vhodn� i jako d�rek"]
      }
    ]
  },
  {
    id: "zima",
    name: "Zimn� z�itky",
    shortDescription: "Outdoor programy pro chladn�j�� ��st roku.",
    description:
      "Zimn� varianty z�itk� pro skupiny i jednotlivce. V�c p��roda, v�c atmosf�ra, po��d jasn� organizace a veden�.",
    services: [
      {
        id: "zimni-teambuilding",
        name: "Teambuilding v p��rod�",
        price: "od 14 500 K� / akce",
        duration: "4-5 hodin",
        capacity: "6-20 osob",
        summary: "Zimn� firemn� program s outdoor prvky a spole�n�m z�itkem v p��rod�.",
        bullets: ["Varianta pro firmy a t�my", "Lze spojit s kr�tk�m workshopem", "Program p�izp�soben po�as�"]
      },
      {
        id: "ledolezecky-zazitek",
        name: "Ledolezeck� z�itek",
        price: "od 4 900 K� / osoba",
        duration: "cel� den",
        capacity: "1-4 osoby",
        summary: "Veden� ledolezeck� den pro klienty, kte�� cht�j� siln� zimn� z�itek.",
        bullets: ["Specifick� zimn� discipl�na", "Mo�nost zap�j�en� vybaven�", "Vhodn� po domluv� podle podm�nek"]
      }
    ]
  }
];

const availabilityLabels = {
  dostupne: "Dostupn�",
  "omezen�": "Omezen�",
  obsazeno: "Obsazeno",
  "na-dotaz": "Na dotaz"
};

const weekdays = ["Po", "�t", "St", "�t", "P�", "So", "Ne"];
const months = [
  "leden",
  "�nor",
  "b�ezen",
  "duben",
  "kv�ten",
  "�erven",
  "�ervenec",
  "srpen",
  "z���",
  "��jen",
  "listopad",
  "prosinec"
];

let activeCategoryId = siteData[0].id;
let activeServiceId = siteData[0].services[0].id;
let visibleMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

function formatDateLabel(date) {
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function toLocalDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getServiceById(serviceId) {
  for (const category of siteData) {
    const service = category.services.find((item) => item.id === serviceId);
    if (service) {
      return { service, category };
    }
  }
  return null;
}

function getStatusForDay(serviceId, date) {
  const day = date.getDay();
  const normalizedDay = day === 0 ? 7 : day;
  const bucket = (date.getDate() + date.getMonth() * 2 + serviceId.length) % 11;

  if (normalizedDay >= 6) {
    if (bucket < 6) return "dostupne";
    if (bucket < 8) return "omezen�";
    if (bucket < 10) return "na-dotaz";
    return "obsazeno";
  }

  if (bucket < 2) return "dostupne";
  if (bucket < 5) return "na-dotaz";
  if (bucket < 8) return "omezen�";
  return "obsazeno";
}

function renderHeroHighlights() {
  const heroHighlights = document.querySelector("#hero-highlights");
  if (!heroHighlights) return;

  const highlightedServices = siteData.map((category) => ({
    categoryName: category.name,
    service: category.services[0]
  }));

  heroHighlights.innerHTML = highlightedServices
    .map(
      ({ categoryName, service }) => `
        <a class="highlight-card" href="rezervace.html?service=${service.id}">
          <strong>${service.name}</strong>
          <p>${categoryName}</p>
          <p>${service.price}</p>
        </a>
      `
    )
    .join("");
}

function renderCategoryGrid(selector) {
  const grid = document.querySelector(selector);
  if (!grid) return;

  grid.innerHTML = siteData
    .map(
      (category) => `
        <article class="category-card reveal">
          <h3>${category.name}</h3>
          <p>${category.shortDescription}</p>
          <a href="zazitky.html#${category.id}">Zobrazit slu�by</a>
        </article>
      `
    )
    .join("");
}

function renderExperienceSections() {
  const experienceSections = document.querySelector("#experience-sections");
  if (!experienceSections) return;

  experienceSections.innerHTML = siteData
    .map(
      (category) => `
        <section id="${category.id}" class="experience-block reveal">
          <div class="experience-header">
            <div>
              <p class="eyebrow">${category.name}</p>
              <h3>${category.description}</h3>
            </div>
            <p>${category.services.length} variant${category.services.length > 1 ? "y" : "a"} slu�by</p>
          </div>
          <div class="service-list">
            ${category.services
              .map(
                (service) => `
                  <article class="service-card">
                    <div class="service-topline">
                      <h4>${service.name}</h4>
                      <span class="price-pill">${service.price}</span>
                    </div>
                    <div class="service-tags">
                      <span class="tag">${service.duration}</span>
                      <span class="tag">${service.capacity}</span>
                    </div>
                    <p>${service.summary}</p>
                    <ul class="service-bullets">
                      ${service.bullets.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                    <a class="inline-link-button" href="rezervace.html?category=${category.id}&service=${service.id}">
                      Zobrazit v rezervac�ch
                    </a>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function getPreselectedValues() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const service = params.get("service");

  if (category && siteData.some((item) => item.id === category)) {
    activeCategoryId = category;
  }

  const serviceResult = service ? getServiceById(service) : null;
  if (serviceResult) {
    activeCategoryId = serviceResult.category.id;
    activeServiceId = service;
  } else {
    activeServiceId = siteData.find((item) => item.id === activeCategoryId).services[0].id;
  }
}

function renderServiceOptions(serviceSelect) {
  const activeCategory = siteData.find((category) => category.id === activeCategoryId) || siteData[0];

  serviceSelect.innerHTML = activeCategory.services
    .map((service) => `<option value="${service.id}">${service.name}</option>`)
    .join("");

  if (!activeCategory.services.some((service) => service.id === activeServiceId)) {
    activeServiceId = activeCategory.services[0].id;
  }

  serviceSelect.value = activeServiceId;
}

function renderSelectedService(selectedServiceBox) {
  const result = getServiceById(activeServiceId);
  if (!result) return;

  const { service, category } = result;

  selectedServiceBox.innerHTML = `
    <p class="eyebrow">Vybran� slu�ba</p>
    <h3>${service.name}</h3>
    <div class="selected-service-tags">
      <span class="price-pill">${service.price}</span>
      <span class="tag">${service.duration}</span>
      <span class="tag">${service.capacity}</span>
    </div>
    <p>${service.summary}</p>
    <small>Kategorie: ${category.name}</small>
  `;
}

function renderLegend(calendarLegend) {
  calendarLegend.innerHTML = Object.entries(availabilityLabels)
    .map(([status, label]) => `<span class="status-pill" data-status="${status}">${label}</span>`)
    .join("");
}

function renderUpcomingDates(serviceId, upcomingDates) {
  const upcoming = [];
  const cursor = new Date();
  let scanned = 0;

  while (upcoming.length < 5 && scanned < 120) {
    const status = getStatusForDay(serviceId, cursor);
    if (status === "dostupne" || status === "omezen�") {
      upcoming.push({
        label: formatDateLabel(cursor),
        status: availabilityLabels[status]
      });
    }
    cursor.setDate(cursor.getDate() + 1);
    scanned += 1;
  }

  upcomingDates.innerHTML = `
    <p class="eyebrow">Nejbli��� mo�n� term�ny</p>
    <p>Uk�zka term�n�, kter� jsou pr�v� dostupn� nebo omezen� dostupn� pro vybranou slu�bu.</p>
    <ul>
      ${upcoming.map((item) => `<li>${item.label} | ${item.status}</li>`).join("")}
    </ul>
  `;
}

function renderCalendar(calendarTitle, calendarGrid, upcomingDates) {
  const current = getServiceById(activeServiceId);
  if (!current) return;

  const { service } = current;
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  calendarTitle.textContent = `${service.name} | ${months[month]} ${year}`;

  const weekdayMarkup = `
    <div class="calendar-weekdays">
      ${weekdays.map((day) => `<div class="weekday">${day}</div>`).join("")}
    </div>
  `;

  const dayCells = [];

  for (let i = 0; i < startOffset; i += 1) {
    dayCells.push('<div class="calendar-day-empty" aria-hidden="true"></div>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const status = getStatusForDay(service.id, date);
    const weekDayLabel = weekdays[(date.getDay() + 6) % 7];

    dayCells.push(`
      <article class="calendar-day">
        <time datetime="${toLocalDateValue(date)}">${day}.</time>
        <span class="status-pill" data-status="${status}">${availabilityLabels[status]}</span>
        <small>${weekDayLabel}</small>
      </article>
    `);
  }

  calendarGrid.innerHTML = `
    ${weekdayMarkup}
    <div class="calendar-days">
      ${dayCells.join("")}
    </div>
  `;

  renderUpcomingDates(service.id, upcomingDates);
}

function initReservationPage() {
  const categorySelect = document.querySelector("#category-select");
  const serviceSelect = document.querySelector("#service-select");
  const selectedServiceBox = document.querySelector("#selected-service");
  const calendarGrid = document.querySelector("#calendar-grid");
  const calendarLegend = document.querySelector("#calendar-legend");
  const calendarTitle = document.querySelector("#calendar-title");
  const upcomingDates = document.querySelector("#upcoming-dates");
  const prevMonthButton = document.querySelector("#prev-month");
  const nextMonthButton = document.querySelector("#next-month");

  if (!categorySelect || !serviceSelect || !calendarGrid || !calendarLegend || !calendarTitle || !upcomingDates) {
    return;
  }

  getPreselectedValues();

  categorySelect.innerHTML = siteData
    .map((category) => `<option value="${category.id}">${category.name}</option>`)
    .join("");

  categorySelect.value = activeCategoryId;
  renderServiceOptions(serviceSelect);
  renderSelectedService(selectedServiceBox);
  renderLegend(calendarLegend);
  renderCalendar(calendarTitle, calendarGrid, upcomingDates);

  categorySelect.addEventListener("change", () => {
    activeCategoryId = categorySelect.value;
    activeServiceId = siteData.find((item) => item.id === activeCategoryId).services[0].id;
    renderServiceOptions(serviceSelect);
    renderSelectedService(selectedServiceBox);
    renderCalendar(calendarTitle, calendarGrid, upcomingDates);
  });

  serviceSelect.addEventListener("change", () => {
    activeServiceId = serviceSelect.value;
    renderSelectedService(selectedServiceBox);
    renderCalendar(calendarTitle, calendarGrid, upcomingDates);
  });

  prevMonthButton.addEventListener("click", () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
    renderCalendar(calendarTitle, calendarGrid, upcomingDates);
  });

  nextMonthButton.addEventListener("click", () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
    renderCalendar(calendarTitle, calendarGrid, upcomingDates);
  });
}

function initMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector("#site-nav");
  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

function initRevealAnimation() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

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

  targets.forEach((item) => observer.observe(item));
}

function init() {
  renderHeroHighlights();
  renderCategoryGrid("#home-category-grid");
  renderCategoryGrid("#category-grid");
  renderExperienceSections();
  initReservationPage();
  initMenu();
  initRevealAnimation();
}

init();
