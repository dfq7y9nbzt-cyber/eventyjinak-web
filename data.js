const eventyData = {
  recipientEmail: "ahoj@eventyjinak.cz",
  primaryContactLabel: "Kontaktní e-mail pro poptávky",
  primaryPhone: "Telefon doplníme při spuštění",
  baseLocation: "Praha / Středočeský kraj",
  hero: {
    title: "Outdoorové a lezecké eventy jinak",
    subtitle:
      "Prémiové zážitky pro firmy a skupiny z Prahy. Zajistíme dopravu, instruktory, vybavení, program, bezpečnost, občerstvení i fotky. Vy si užijete akci, o zbytek se postaráme.",
    body: [
      "Pořádáme outdoorové a lezecké zážitky pro firmy, týmy a uzavřené skupiny. Nejsme klasický kurz lezení. Připravujeme kompletní akce na míru od dopravy přes program až po bezpečný průběh a fotodokumentaci.",
      "Ať chcete jednodenní lezecký zážitek, firemní teambuilding, víkendový pobyt v přírodě nebo intenzivní adrenalinový program pro malý tým, postaráme se o vše potřebné."
    ]
  },
  priceNote:
    "Ceny jsou orientační a uvedené bez DPH. Finální nabídku připravujeme individuálně podle počtu osob, lokality, dopravy, délky programu a rozsahu služeb.",
  safetyText:
    "Bezpečnost je pro nás základ každé akce. Program přizpůsobujeme zkušenostem účastníků, počasí, lokalitě i aktuálním podmínkám. Lezení a outdoorové aktivity probíhají pod dohledem zkušených instruktorů, s vhodným vybavením a jasnou bezpečnostní instruktáží.",
  safetyTextExtended:
    "Každá akce je připravena individuálně tak, aby byla zážitková, ale zároveň rozumně vedená a přístupná i lidem bez předchozích zkušeností.",
  operator: {
    brand: "Eventy Jinak",
    company: "IronBros s.r.o.",
    seat: "č.ev. 402, 267 11 Vráž",
    ico: "238 94 474",
    court: "C 434687 vedená u Městského soudu v Praze",
    established: "30. října 2025",
    vat: "Plátce DPH"
  },
  benefits: [
    {
      title: "Doprava z Prahy",
      text: "Vyzvednutí skupiny, doprava na místo a návrat zpět podle domluveného scénáře."
    },
    {
      title: "Bezpečný program",
      text: "Zkušení instruktoři, vhodné vybavení a program přizpůsobený lidem i lokalitě."
    },
    {
      title: "Kompletní servis",
      text: "Organizace, občerstvení, ubytování, fotograf i doplňkový program v jednom řešení."
    },
    {
      title: "Akce na míru",
      text: "Každý termín a program přizpůsobíme lidem, počasí, rozpočtu a cíli celé akce."
    }
  ],
  services: [
    {
      id: "lezecky-den-bez-starosti",
      name: "Lezecký den bez starostí",
      audience: "Pro malé skupiny 4–6 osob",
      teaser:
        "Jednodenní lezecký zážitek s dopravou z Prahy, instruktory, vybavením a bezpečně vedeným programem.",
      priceFrom: "od 32 000 Kč / skupina bez DPH",
      heroImage: "assets/images/prachov.jpg",
      heroAlt: "Prachovské skály jako placeholder hlavní fotografie služby",
      cardImage: "assets/images/prachov.jpg",
      cardAlt: "Prachovské skály jako placeholder karty služby",
      detailText: [
        "Vyrazte s malým týmem nebo skupinou ven do skal bez plánování, stresu a složité organizace. Připravíme pro vás jednodenní lezecký zážitek s dopravou z Prahy, instruktory, vybavením a bezpečně vedeným programem.",
        "Ráno vás vyzvedneme, odvezeme do vhodné lezecké oblasti, připravíme program podle zkušeností skupiny a po celý den se postaráme o bezpečný a plynulý průběh. Vy si jen užijete lezení, přírodu a společný zážitek."
      ],
      idealFor: [
        "malé firemní týmy",
        "skupiny přátel",
        "rodiny",
        "uzavřené skupiny 4–6 osob",
        "začátečníci i mírně pokročilí"
      ],
      process: [
        "Domluvíme cílovou lokalitu, zkušenosti skupiny a preferovaný typ dne.",
        "Přijedeme pro vás do Prahy nebo na domluvené nástupní místo.",
        "Na místě připravíme vybavení, instruktáž a program podle počasí a skupiny.",
        "Po akci vás odvezeme zpět a případně doplníme fotky nebo navazující doporučení."
      ],
      included: [
        "dopravu z Prahy a zpět",
        "výběr vhodné lokality",
        "instruktory a organizaci dne",
        "základní lezecké vybavení",
        "bezpečnostní instruktáž",
        "pitný režim a drobné občerstvení"
      ],
      standard: {
        price: "od 32 000 Kč / skupina bez DPH",
        note: "Vhodné pro 4–6 osob.",
        items: [
          "dopravu z Prahy a zpět vlastním autem",
          "2 osoby zajišťující program",
          "výběr vhodné lokality",
          "základní lezecké vybavení",
          "bezpečnostní instruktáž",
          "lezení na horním laně",
          "základní týmové aktivity",
          "drobné občerstvení a pitný režim",
          "organizaci celé akce"
        ]
      },
      premium: {
        price: "od 45 000 Kč / skupina bez DPH",
        note: "Rozšířená varianta s větší péčí a dokumentací.",
        items: [
          "vše ze Standardu",
          "fotografa na část akce",
          "rozšířený program",
          "lepší občerstvení / piknik",
          "větší časovou rezervu",
          "více individuální přípravy",
          "výběr a úpravu fotek po akci"
        ]
      }
    },
    {
      id: "firemni-lezecky-teambuilding",
      name: "Firemní lezecký teambuilding",
      audience: "Pro týmy 8–20 osob",
      teaser:
        "Kompletní organizace, doprava, lezení, týmové aktivity a možnost fotografa nebo cateringu.",
      priceFrom: "od 59 000 Kč / skupina bez DPH",
      heroImage: "assets/images/tisa.jpg",
      heroAlt: "Tiské stěny jako placeholder fotografie firemního teambuildingu",
      cardImage: "assets/images/tisa.jpg",
      cardAlt: "Skalní oblast Tisá jako placeholder karty služby",
      detailText: [
        "Vezmeme váš tým z kanceláře do přírody a připravíme den, na který se bude vzpomínat. Lezení ve skalách, týmové výzvy, bezpečný program, doprava z Prahy a kompletní organizace v jednom balíčku.",
        "Program stavíme tak, aby byl vhodný i pro úplné začátečníky. Účastníci si vyzkouší lezení, práci s důvěrou, komunikaci a společné překonávání výzev. Vy nám řeknete počet lidí a představu o akci, my připravíme vše ostatní."
      ],
      idealFor: [
        "firmy",
        "HR týmy",
        "office manažery",
        "menší a střední firemní týmy",
        "skupiny 8–20 osob"
      ],
      process: [
        "Projdeme cíle akce, počet lidí a požadovanou míru zážitku.",
        "Navrhneme lokalitu, harmonogram, dopravu i vhodné rozdělení skupin.",
        "Na místě vedeme lezení, týmové výzvy a veškerou koordinaci.",
        "Po akci dodáme shrnutí, fotky nebo doporučení pro další pokračování."
      ],
      included: [
        "návrh programu",
        "dopravu z Prahy",
        "instruktory podle počtu účastníků",
        "koordinaci akce",
        "zapůjčení vybavení",
        "bezpečnostní instruktáž",
        "pitný režim a snack"
      ],
      standard: {
        price: "od 59 000 Kč / skupina bez DPH",
        note: "Doporučeno pro 8–12 osob. 13–16 osob od 79 000 Kč, 17–20 osob od 99 000 Kč bez DPH.",
        items: [
          "návrh programu",
          "dopravu z Prahy minibusem podle velikosti skupiny",
          "instruktory podle počtu účastníků",
          "koordinaci akce",
          "zapůjčení vybavení",
          "bezpečnostní instruktáž",
          "lezení a týmové aktivity",
          "základní pitný režim a snack",
          "organizační zajištění před akcí"
        ]
      },
      premium: {
        price: "od 89 000 Kč / skupina bez DPH",
        note: "Doporučeno pro 8–12 osob. 13–16 osob od 119 000 Kč, 17–20 osob od 149 000 Kč bez DPH.",
        items: [
          "vše ze Standardu",
          "fotografa",
          "lepší občerstvení / outdoor catering",
          "rozšířený týmový program",
          "více instruktorů nebo delší program podle potřeby",
          "větší rezervu na počasí a změny",
          "fotogalerii po akci",
          "možnost krátkého shrnutí pro interní komunikaci firmy"
        ]
      }
    },
    {
      id: "vicedenni-outdoor-pobyt",
      name: "Vícedenní outdoor pobyt",
      audience: "Pro firmy a skupiny 4–20 osob",
      teaser:
        "Víkend nebo vícedenní pobyt v přírodě s lezením, outdoor programem, dopravou, ubytováním a kompletním servisem.",
      priceFrom: "od 8 900 Kč / osoba bez DPH",
      heroImage: "assets/images/hruboskalsko.jpg",
      heroAlt: "Hruboskalsko jako placeholder fotografie vícedenního pobytu",
      cardImage: "assets/images/hruboskalsko.jpg",
      cardAlt: "Hruboskalsko jako placeholder karty služby",
      detailText: [
        "Víkend nebo vícedenní pobyt v přírodě pro firmy a skupiny, které chtějí zažít víc než jednodenní akci. Připravíme dopravu, ubytování, program, instruktory, lezení, outdoorové aktivity, večerní část i bezpečný průběh.",
        "Pobyt může být komfortní a zážitkový, sportovní a aktivní, nebo dobrodružnější podle složení skupiny. Vše připravíme na míru tak, aby účastníci nemuseli řešit organizaci a mohli si naplno užít společný čas venku."
      ],
      idealFor: [
        "firmy",
        "menší týmy",
        "skupiny přátel",
        "uzavřené kolektivy",
        "skupiny 4–20 osob"
      ],
      process: [
        "Upřesníme délku pobytu, rozpočet a požadovaný standard ubytování.",
        "Navrhneme itinerář s lezením, večerním programem a dopravou z Prahy.",
        "Na místě koordinujeme celý pobyt, instruktory i logistiku.",
        "Po návratu můžeme dodat fotky, video nebo doporučení pro další akci."
      ],
      included: [
        "dopravu z Prahy",
        "základní organizaci pobytu",
        "instruktory podle velikosti skupiny",
        "lezecký / outdoor program",
        "zapůjčení základního vybavení",
        "zajištění nebo doporučení ubytování",
        "bezpečnostní vedení",
        "základní večerní program"
      ],
      standard: {
        price: "od 8 900 Kč / osoba bez DPH",
        note: "Minimální cena skupiny od 49 000 Kč bez DPH.",
        items: [
          "dopravu z Prahy",
          "základní organizaci pobytu",
          "instruktory podle velikosti skupiny",
          "lezecký / outdoor program",
          "zapůjčení základního vybavení",
          "zajištění nebo doporučení ubytování",
          "bezpečnostní vedení",
          "základní večerní program",
          "pitný režim / drobné občerstvení"
        ]
      },
      premium: {
        price: "od 13 900 Kč / osoba bez DPH",
        note: "Minimální cena skupiny od 79 000 Kč bez DPH.",
        items: [
          "vše ze Standardu",
          "ubytování zahrnuté v ceně podle dohodnutého standardu",
          "fotografa",
          "lepší stravování",
          "rozšířený program",
          "větší časovou rezervu",
          "možnost večerního speciálního programu",
          "individuální přípravu itineráře"
        ]
      }
    },
    {
      id: "adrenalinovy-teambuilding",
      name: "Adrenalinový teambuilding",
      audience: "Pro malé týmy 3–7 osob",
      teaser:
        "Intenzivní program s lezením, slaňováním, výškou a týmovou spoluprací.",
      priceFrom: "od 29 000 Kč / skupina bez DPH",
      heroImage: "assets/images/tisa.jpg",
      heroAlt: "Skály jako placeholder fotografie adrenalinového teambuildingu",
      cardImage: "assets/images/tisa.jpg",
      cardAlt: "Skalní terén jako placeholder karty služby",
      detailText: [
        "Intenzivní outdoorový program pro malé týmy, které chtějí zažít něco silnějšího než běžný teambuilding. Lezení, slaňování, výška, týmová spolupráce a bezpečně vedené dobrodružství v přírodě.",
        "Program připravujeme individuálně podle zkušeností a odvahy skupiny. Může být sportovnější, zážitkovější nebo více týmový. Po celou dobu dbáme na bezpečnost, vhodné tempo a profesionální vedení."
      ],
      idealFor: [
        "malé firemní týmy",
        "management",
        "obchodní týmy",
        "skupiny přátel",
        "skupiny 3–7 osob"
      ],
      process: [
        "Sladíme očekávání skupiny a úroveň intenzity programu.",
        "Připravíme scénář s lezením, slaňováním a outdoor výzvami podle lokality.",
        "Na místě vedeme celou akci s důrazem na bezpečnost a flow dne.",
        "Po akci dodáme doporučení, fotky nebo navazující rozšíření programu."
      ],
      included: [
        "přípravu programu",
        "dopravu z Prahy podle velikosti skupiny",
        "2 osoby zajišťující program",
        "bezpečnostní vybavení",
        "lezení / slaňování / outdoor výzvy podle lokality",
        "základní pitný režim",
        "bezpečnostní instruktáž",
        "organizaci akce"
      ],
      standard: {
        price: "od 29 000 Kč / skupina bez DPH",
        note: "Doporučeno pro 3–5 osob. Pro 6–7 osob od 39 000 Kč bez DPH.",
        items: [
          "přípravu programu",
          "dopravu z Prahy podle velikosti skupiny",
          "2 osoby zajišťující program",
          "bezpečnostní vybavení",
          "lezení / slaňování / outdoor výzvy podle lokality",
          "základní pitný režim",
          "bezpečnostní instruktáž",
          "organizaci akce"
        ]
      },
      premium: {
        price: "od 45 000 Kč / skupina bez DPH",
        note: "Doporučeno pro 3–5 osob. Pro 6–7 osob od 59 000 Kč bez DPH.",
        items: [
          "vše ze Standardu",
          "fotografa",
          "rozšířený adrenalinový program",
          "lepší občerstvení",
          "více času na místě",
          "možnost kombinace více aktivit",
          "fotogalerii po akci",
          "vyšší organizační rezervu"
        ]
      }
    }
  ],
  addOns: [
    {
      title: "Fotografie a video",
      items: [
        "Fotograf na 2–3 hodiny — od 4 900 Kč bez DPH",
        "Fotograf půlden — od 7 900 Kč bez DPH",
        "Fotograf celý den — od 11 900 Kč bez DPH",
        "Krátké reels video — od 5 900 Kč bez DPH",
        "Video z akce 60–90 sekund — od 11 900 Kč bez DPH",
        "Employer branding balíček — od 14 900 Kč bez DPH"
      ]
    },
    {
      title: "Jídlo a občerstvení",
      items: [
        "Pitný režim a snack — od 150 Kč / osoba bez DPH",
        "Piknik basic — od 350 Kč / osoba bez DPH",
        "Outdoor catering standard — od 590 Kč / osoba bez DPH",
        "Premium catering — od 990 Kč / osoba bez DPH",
        "Večerní grilování — individuálně"
      ]
    },
    {
      title: "Programové příplatky",
      items: [
        "Extra instruktor — od 4 500 Kč / den bez DPH",
        "Anglicky mluvící instruktor — +20 %",
        "Slaňování jako samostatné stanoviště — od 5 900 Kč bez DPH",
        "Via ferrata varianta — individuálně",
        "Večerní program — od 5 900 Kč bez DPH",
        "Záložní indoor program — od 7 900 Kč bez DPH",
        "Dárkový balíček pro účastníky — od 250 Kč / osoba bez DPH"
      ]
    },
    {
      title: "Doprava",
      items: [
        "U malých skupin je doprava často zahrnuta v ceně balíčku.",
        "U větších skupin se doprava počítá podle počtu osob, lokality, délky akce a typu vozidla.",
        "Minibus a autobus řešíme individuální kalkulací."
      ],
      note:
        "U většiny akcí zajišťujeme dopravu z Prahy a zpět. U menších skupin využíváme vlastní dopravu, u větších skupin smluvní minibus nebo autobus."
    }
  ],
  faq: [
    {
      question: "Musíme mít s lezením zkušenosti?",
      answer:
        "Ne. Většinu programů připravujeme tak, aby byly vhodné i pro úplné začátečníky. Program vždy přizpůsobíme skupině."
    },
    {
      question: "Co když bude špatné počasí?",
      answer:
        "Podle typu akce navrhneme úpravu programu, náhradní lokalitu, přesun termínu nebo záložní variantu. Finální řešení domlouváme individuálně."
    },
    {
      question: "Zajišťujete dopravu z Prahy?",
      answer:
        "Ano. U menších skupin často využíváme vlastní dopravu, u větších skupin zajišťujeme minibus nebo autobus."
    },
    {
      question: "Je v ceně vybavení?",
      answer:
        "Ano, základní lezecké a bezpečnostní vybavení je součástí programu, pokud není v konkrétní nabídce uvedeno jinak."
    },
    {
      question: "Lze objednat fotografa?",
      answer:
        "Ano. Fotograf je součástí Premium balíčků nebo jej lze objednat jako příplatkovou službu."
    },
    {
      question: "Je poptávka závazná?",
      answer:
        "Ne. Odesláním formuláře posíláte nezávaznou poptávku. Termín potvrzujeme až po ověření kapacity instruktorů, dopravy a vhodné lokality."
    }
  ],
  documents: [
    {
      id: "vop",
      title: "Všeobecné obchodní podmínky",
      description: "Místo pro budoucí PDF nebo samostatnou stránku s obchodními podmínkami."
    },
    {
      id: "gdpr",
      title: "Zásady zpracování osobních údajů",
      description: "Místo pro budoucí PDF nebo stránku s ochranou osobních údajů."
    },
    {
      id: "bezpecnost",
      title: "Potvrzení rizik a bezpečnostních pravidel",
      description: "Místo pro PDF s bezpečnostními pravidly a informovaným souhlasem."
    },
    {
      id: "foto-video",
      title: "Souhlas s fotografiemi a videem",
      description: "Místo pro dokument k použití fotek a videa z akcí."
    }
  ],
  formOptions: {
    actionTypes: [
      "Lezecký den bez starostí",
      "Firemní lezecký teambuilding",
      "Vícedenní outdoor pobyt",
      "Adrenalinový teambuilding",
      "Nevím, chci poradit"
    ],
    experienceLevels: [
      "žádné",
      "začátečníci",
      "smíšená skupina",
      "pokročilejší"
    ],
    flexibility: [
      "termín je pevný",
      "jsme flexibilní",
      "chceme doporučit vhodný termín"
    ],
    packages: ["Standard", "Premium", "Nevím, chci poradit"],
    addOnChoices: [
      "Fotograf",
      "Video / reels",
      "Catering",
      "Lepší občerstvení",
      "Ubytování",
      "Večerní program",
      "Anglicky mluvící instruktor",
      "Dárkové balíčky",
      "Jiné"
    ],
    consents: [
      "Souhlasím se zpracováním osobních údajů za účelem vyřízení poptávky.",
      "Beru na vědomí, že odesláním formuláře nevzniká závazná rezervace termínu.",
      "Beru na vědomí, že termín a kapacitu potvrdí organizátor individuálně.",
      "Souhlasím se zasláním odpovědi a doplňujících informací k poptávce e-mailem."
    ]
  },
  mailTemplates: {
    customerSubject: "Poptávka přijata – Eventy Jinak",
    customerBody: [
      "Dobrý den,",
      "",
      "děkujeme za vaši poptávku akce u Eventy Jinak.",
      "",
      "Obdrželi jsme informace k plánovanému termínu, počtu osob a typu akce. Nyní ověříme dostupnost instruktorů, dopravy, vhodné lokality a případných doplňkových služeb.",
      "",
      "Do 3 pracovních dnů se vám ozveme s potvrzením, zda jsme schopni termín kapacitně zajistit, případně navrhneme vhodnou alternativu.",
      "",
      "Odesláním poptávky zatím nevzniká závazná rezervace. Termín je platný až po našem potvrzení a domluvení konkrétních podmínek.",
      "",
      "Děkujeme a těšíme se na společnou akci.",
      "",
      "Eventy Jinak",
      "provozuje IronBros s.r.o."
    ],
    adminSubjectPrefix: "Nová poptávka Eventy Jinak"
  }
};
