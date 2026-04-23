const siteData = [
  {
    id: "skaly",
    name: "Lezení ve skalách",
    shortDescription: "Programy pro první kroky venku i pro zkušenější lezce.",
    description:
      "Skalní programy pro jednotlivce i menší skupiny. Důraz na bezpečnost, vedení a opravdový zážitek ve skále.",
    services: [
      {
        id: "prvni-lezeni-venku",
        name: "První lezení venku",
        price: "od 2 490 Kč / osoba",
        duration: "3-4 hodiny",
        capacity: "1-4 osoby",
        summary: "Seznámení se skalou, jištěním, pohybem a prvním lezením v přírodě.",
        bullets: ["Zapůjčení základního vybavení", "Instruktor po celou dobu", "Vhodné i bez předchozí zkušenosti"]
      },
      {
        id: "pokrocili-zazitek",
        name: "Lezecký zážitek pro pokročilé",
        price: "od 3 900 Kč / skupina",
        duration: "5 hodin",
        capacity: "1-3 osoby",
        summary: "Technika, práce v terénu, výběr cest a vedený den pro lezce se zkušeností.",
        bullets: ["Vhodné pro lezce se základy", "Možnost zaměření na techniku", "Program podle výkonnosti skupiny"]
      },
      {
        id: "lezecke-objevovani",
        name: "Lezecké objevování",
        price: "od 4 500 Kč / skupina",
        duration: "celý den",
        capacity: "2-6 osob",
        summary: "Celodenní objevování skalní oblasti, kombinace lezení a pohybu v přírodě.",
        bullets: ["Více stanovišť během dne", "Důraz na atmosféru a objevování", "Vhodné pro kamarády i páry"]
      }
    ]
  },
  {
    id: "teambuilding-skaly",
    name: "Teambuilding ve skalách",
    shortDescription: "Firemní a skupinové programy s jasným rozdělením podle velikosti týmu.",
    description:
      "Společný zážitek ve skalách, který můžeme přizpůsobit menším týmům i větším skupinám. Program je vedený s ohledem na bezpečí a flow celé akce.",
    services: [
      {
        id: "male-skupiny",
        name: "Malé skupiny do 7 lidí",
        price: "od 12 900 Kč / akce",
        duration: "4 hodiny",
        capacity: "do 7 lidí",
        summary: "Kompaktní teambuilding s intenzivním zapojením všech účastníků.",
        bullets: ["Vhodné pro malé firmy", "Vyšší míra individuálního vedení", "Možnost přidat společný piknik"]
      },
      {
        id: "stredni-skupiny",
        name: "Skupiny 8-16 lidí",
        price: "od 21 500 Kč / akce",
        duration: "4-6 hodin",
        capacity: "8-16 lidí",
        summary: "Skalní program s rotací stanovišť a zapojením všech členů týmu.",
        bullets: ["Vhodné pro týmové dny", "Možnost rozdělení do menších skupin", "Dobře funguje i pro smíšené úrovně zkušeností"]
      },
      {
        id: "velke-skupiny",
        name: "Velké skupiny",
        price: "od 34 900 Kč / akce",
        duration: "na míru",
        capacity: "17+ lidí",
        summary: "Zážitkový program ve větším formátu s koordinací více instruktorů.",
        bullets: ["Scénář na míru", "Možnost kombinovat lezení a outdoor výzvy", "Vhodné pro větší firmy nebo eventy"]
      }
    ]
  },
  {
    id: "oslavy",
    name: "Oslavy s lezením",
    shortDescription: "Zážitkové oslavy pro děti i venkovní akce s lezením.",
    description:
      "Lezení jako středobod oslavy. Pro děti i pro skupiny, které chtějí netradiční program venku.",
    services: [
      {
        id: "oslavy-pro-deti",
        name: "Oslavy pro děti",
        price: "od 6 900 Kč / akce",
        duration: "3 hodiny",
        capacity: "až 12 dětí",
        summary: "Hravá oslava s lezením, jednoduchými výzvami a bezpečným vedením.",
        bullets: ["Program přiměřený věku", "Možnost tematického scénáře", "Vhodné pro začátečníky"]
      },
      {
        id: "zazitkova-oslava-venku",
        name: "Zážitková oslava venku",
        price: "od 9 500 Kč / akce",
        duration: "4 hodiny",
        capacity: "6-16 osob",
        summary: "Venkovní oslava postavená na lezení, pohybu a společném zážitku.",
        bullets: ["Pro partu přátel i rodinu", "Lezení doplněné o další aktivity", "Možnost fotografického balíčku"]
      }
    ]
  },
  {
    id: "prespani",
    name: "Přespání ve skalách",
    shortDescription: "Netradiční noc v přírodě rozdělená podle velikosti skupiny.",
    description:
      "Zážitkové přespání ve skalním prostředí s přípravou, vedením a bezpečným průběhem. Program lze přizpůsobit velikosti skupiny.",
    services: [
      {
        id: "prespani-1-3",
        name: "Přespání ve skalách pro 1-3 lidi",
        price: "od 8 900 Kč / noc",
        duration: "večer + noc + ráno",
        capacity: "1-3 osoby",
        summary: "Intimnější varianta pro dvojice, trojici přátel nebo malý tým.",
        bullets: ["Komorní vedený zážitek", "Doporučení vhodné lokality", "Vhodné i jako dárkový zážitek"]
      },
      {
        id: "prespani-4-5",
        name: "Přespání ve skalách pro 4-5 lidí",
        price: "od 12 900 Kč / noc",
        duration: "večer + noc + ráno",
        capacity: "4-5 osob",
        summary: "Vyvážený formát pro menší skupinu, která chce společný zážitek v přírodě.",
        bullets: ["Skvělé pro kamarády i menší tým", "Program s večerní atmosférou", "Možnost doplnit ranní aktivitu"]
      },
      {
        id: "prespani-6-7",
        name: "Přespání ve skalách pro 6-7 lidí",
        price: "od 17 500 Kč / noc",
        duration: "večer + noc + ráno",
        capacity: "6-7 osob",
        summary: "Silný skupinový zážitek s větším důrazem na organizaci a scénář.",
        bullets: ["Vhodné pro oslavu nebo teambuilding", "Důraz na logistiku a komfort", "Možnost rozšíření o denní program"]
      }
    ]
  },
  {
    id: "indoor",
    name: "Indoor stěny",
    shortDescription: "Varianta pro město, firmy i oslavy, když chcete lezení pod střechou.",
    description:
      "Lezecké programy na indoor stěnách. Dobré pro firmy, skupiny i první kontakt s lezením bez ohledu na počasí.",
    services: [
      {
        id: "indoor-teambuilding",
        name: "Teambuilding s lezením",
        price: "od 11 500 Kč / akce",
        duration: "3 hodiny",
        capacity: "6-18 osob",
        summary: "Firemní lezení na stěně s programem přizpůsobeným skupině.",
        bullets: ["Vhodné celoročně", "Nenáročné na logistiku", "Možnost doplnit o soutěžní prvky"]
      },
      {
        id: "indoor-oslava",
        name: "Oslava s lezením",
        price: "od 7 900 Kč / akce",
        duration: "2,5 hodiny",
        capacity: "6-14 osob",
        summary: "Dynamická indoor oslava s lezením a jednoduchým organizačním průběhem.",
        bullets: ["Vhodné pro děti i dospělé", "Program přizpůsoben úrovni skupiny", "Praktické i za horšího počasí"]
      },
      {
        id: "seznamuji-se-s-lezenim",
        name: "Seznamuji se s lezením",
        price: "od 1 690 Kč / osoba",
        duration: "2 hodiny",
        capacity: "1-6 osob",
        summary: "První bezpečné setkání s lezením na stěně pod vedením instruktora.",
        bullets: ["Ideální start pro začátečníky", "Bez nutnosti vlastní výbavy", "Vhodné i jako dárek"]
      }
    ]
  },
  {
    id: "zima",
    name: "Zimní zážitky",
    shortDescription: "Outdoor programy pro chladnější část roku.",
    description:
      "Zimní varianty zážitků pro skupiny i jednotlivce. Víc příroda, víc atmosféra, pořád jasná organizace a vedení.",
    services: [
      {
        id: "zimni-teambuilding",
        name: "Teambuilding v přírodě",
        price: "od 14 500 Kč / akce",
        duration: "4-5 hodin",
        capacity: "6-20 osob",
        summary: "Zimní firemní program s outdoor prvky a společným zážitkem v přírodě.",
        bullets: ["Varianta pro firmy a týmy", "Lze spojit s krátkým workshopem", "Program přizpůsoben počasí"]
      },
      {
        id: "ledolezecky-zazitek",
        name: "Ledolezecký zážitek",
        price: "od 4 900 Kč / osoba",
        duration: "celý den",
        capacity: "1-4 osoby",
        summary: "Vedený ledolezecký den pro klienty, kteří chtějí silný zimní zážitek.",
        bullets: ["Specifická zimní disciplína", "Možnost zapůjčení vybavení", "Vhodné po domluvě podle podmínek"]
      }
    ]
  }
];

const availabilityLabels = {
  dostupne: "Dostupné",
  "omezeně": "Omezeně",
  obsazeno: "Obsazeno",
  "na-dotaz": "Na dotaz"
};

const weekdays = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];
const months = [
  "leden",
  "únor",
  "březen",
  "duben",
  "květen",
  "červen",
  "červenec",
  "srpen",
  "září",
  "říjen",
  "listopad",
  "prosinec"
];

const heroHighlights = document.querySelector("#hero-highlights");
const categoryGrid = document.querySelector("#category-grid");
const experienceSections = document.querySelector("#experience-sections");
const categorySelect = document.querySelector("#category-select");
const serviceSelect = document.querySelector("#service-select");
const selectedServiceBox = document.querySelector("#selected-service");
const calendarGrid = document.querySelector("#calendar-grid");
const calendarLegend = document.querySelector("#calendar-legend");
const calendarTitle = document.querySelector("#calendar-title");
const upcomingDates = document.querySelector("#upcoming-dates");
const prevMonthButton = document.querySelector("#prev-month");
const nextMonthButton = document.querySelector("#next-month");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

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
    if (bucket < 8) return "omezeně";
    if (bucket < 10) return "na-dotaz";
    return "obsazeno";
  }

  if (bucket < 2) return "dostupne";
  if (bucket < 5) return "na-dotaz";
  if (bucket < 8) return "omezeně";
  return "obsazeno";
}

function renderHeroHighlights() {
  const highlightedServices = siteData.map((category) => ({
    categoryName: category.name,
    service: category.services[0]
  }));

  heroHighlights.innerHTML = highlightedServices
    .map(
      ({ categoryName, service }) => `
        <article class="highlight-card">
          <strong>${service.name}</strong>
          <p>${categoryName}</p>
          <p>${service.price}</p>
        </article>
      `
    )
    .join("");
}

function renderCategories() {
  categoryGrid.innerHTML = siteData
    .map(
      (category) => `
        <article class="category-card reveal">
          <h3>${category.name}</h3>
          <p>${category.shortDescription}</p>
          <a href="#${category.id}">Zobrazit služby</a>
        </article>
      `
    )
    .join("");
}

function renderExperienceSections() {
  experienceSections.innerHTML = siteData
    .map(
      (category) => `
        <section id="${category.id}" class="experience-block reveal">
          <div class="experience-header">
            <div>
              <p class="eyebrow">${category.name}</p>
              <h3>${category.description}</h3>
            </div>
            <p>${category.services.length} variant${category.services.length > 1 ? "y" : "a"} služby</p>
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
                    <button type="button" data-category="${category.id}" data-service="${service.id}">
                      Zobrazit v rezervacích
                    </button>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  experienceSections.querySelectorAll("button[data-service]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategoryId = button.dataset.category;
      activeServiceId = button.dataset.service;
      syncReservationSelectors();
      renderSelectedService();
      renderCalendar();
      document.querySelector("#rezervace").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderSelectors() {
  categorySelect.innerHTML = siteData
    .map((category) => `<option value="${category.id}">${category.name}</option>`)
    .join("");

  categorySelect.addEventListener("change", () => {
    activeCategoryId = categorySelect.value;
    const currentCategory = siteData.find((item) => item.id === activeCategoryId);
    activeServiceId = currentCategory.services[0].id;
    renderServiceOptions();
    renderSelectedService();
    renderCalendar();
  });

  serviceSelect.addEventListener("change", () => {
    activeServiceId = serviceSelect.value;
    renderSelectedService();
    renderCalendar();
  });

  syncReservationSelectors();
}

function renderServiceOptions() {
  const activeCategory = siteData.find((category) => category.id === activeCategoryId) || siteData[0];

  serviceSelect.innerHTML = activeCategory.services
    .map((service) => `<option value="${service.id}">${service.name}</option>`)
    .join("");

  if (!activeCategory.services.some((service) => service.id === activeServiceId)) {
    activeServiceId = activeCategory.services[0].id;
  }

  serviceSelect.value = activeServiceId;
}

function syncReservationSelectors() {
  categorySelect.value = activeCategoryId;
  renderServiceOptions();
}

function renderSelectedService() {
  const result = getServiceById(activeServiceId);
  if (!result) return;

  const { service, category } = result;

  selectedServiceBox.innerHTML = `
    <p class="eyebrow">Vybraná služba</p>
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

function renderLegend() {
  calendarLegend.innerHTML = Object.entries(availabilityLabels)
    .map(
      ([status, label]) => `
        <span class="status-pill" data-status="${status}">${label}</span>
      `
    )
    .join("");
}

function renderCalendar() {
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

  renderUpcomingDates(service.id);
}

function renderUpcomingDates(serviceId) {
  const upcoming = [];
  const cursor = new Date();
  let scanned = 0;

  while (upcoming.length < 5 && scanned < 120) {
    const status = getStatusForDay(serviceId, cursor);
    if (status === "dostupne" || status === "omezeně") {
      upcoming.push({
        label: formatDateLabel(cursor),
        status: availabilityLabels[status]
      });
    }
    cursor.setDate(cursor.getDate() + 1);
    scanned += 1;
  }

  upcomingDates.innerHTML = `
    <p class="eyebrow">Nejbližší možné termíny</p>
    <p>Ukázka termínů, které jsou právě dostupné nebo omezeně dostupné pro vybranou službu.</p>
    <ul>
      ${upcoming.map((item) => `<li>${item.label} | ${item.status}</li>`).join("")}
    </ul>
  `;
}

function initCalendarNavigation() {
  prevMonthButton.addEventListener("click", () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
    renderCalendar();
  });

  nextMonthButton.addEventListener("click", () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
    renderCalendar();
  });
}

function initMenu() {
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

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

function init() {
  renderHeroHighlights();
  renderCategories();
  renderExperienceSections();
  renderSelectors();
  renderSelectedService();
  renderLegend();
  renderCalendar();
  initCalendarNavigation();
  initMenu();
  initRevealAnimation();
}

init();
