eventyData.primaryContactLabel = "Inquiry email";
eventyData.primaryPhone = "+420 774 910 543";
eventyData.baseLocation = "Prague / Central Bohemia";

eventyData.hero.title = "Outdoor and climbing events done differently";
eventyData.hero.subtitle =
  "Premium climbing and outdoor experiences for companies and private groups from Prague and the surrounding area. We arrange transport, instructors, equipment, programme, safety, refreshments and photo coverage.";
eventyData.hero.body = [
  "We organise outdoor and climbing experiences for companies, teams and private groups. This is not a standard climbing lesson. We create complete tailor-made events from transport and programme design to safe delivery and photo coverage.",
  "Whether you want a one-day climbing experience, a corporate team building day, a weekend outdoor stay or a more adrenaline-focused programme for a small team, we take care of everything."
];
eventyData.hero.slides = eventyData.hero.slides.map((slide) => ({
  ...slide,
  alt: slide.alt
}));

eventyData.priceNote =
  "Prices are based on the current cost model and are listed excluding VAT. The final offer is always refined according to group size, location, transport, programme length and selected add-on services.";

eventyData.safetyText = "Safety is the foundation of every event we run.";
eventyData.safetyHighlights = [
  "We adapt every programme to the group's experience level, the weather, the location and the current conditions.",
  "Climbing and outdoor activities are led by experienced instructors with suitable equipment and a clear safety briefing.",
  "Each event is designed individually so it stays memorable, well managed and accessible even to complete beginners."
];

eventyData.benefits = [
  {
    title: "Transport from Prague and the surrounding area",
    text: "Pick-up, transport to the venue and return travel arranged according to the agreed scenario."
  },
  {
    title: "A safe programme",
    text: "Experienced instructors, suitable equipment and a programme adapted to the group and the location."
  },
  {
    title: "Complete service",
    text: "Organisation, refreshments, accommodation, photographer and programme add-ons in one solution."
  },
  {
    title: "Tailored events",
    text: "Every date and programme is adjusted to the people involved, the weather, the budget and the goals of the event."
  },
  {
    title: "A backup plan in advance",
    text: "Weather does not surprise us. For every event, we can prepare an approved backup option before the event date."
  }
];

const [dayService, teamService, multiDayService, adrenalineService, customService] = eventyData.services;

Object.assign(dayService, {
  name: "Climbing day without the hassle",
  audience: "For small groups of 4-6 people",
  teaser:
    "A one-day climbing experience with transport from Prague and the surrounding area, instructors, equipment and a safely guided programme.",
  priceFrom: "from CZK 22,900 / group excl. VAT",
  heroAlt: "Sandstone towers in the Czech Republic for a one-day climbing experience",
  cardAlt: "Sandstone climbing area for a one-day climbing experience",
  heroSlides: [
    {
      src: "assets/images/prachov.jpg",
      alt: "Sandstone towers in the Czech Republic for a one-day climbing experience"
    },
    {
      src: "assets/images/lezecky.jpg",
      alt: "Climbing shoes on a rock during a one-day climbing experience"
    }
  ],
  cardSlides: [
    {
      src: "assets/images/prachov.jpg",
      alt: "Sandstone climbing area for a one-day climbing experience"
    },
    {
      src: "assets/images/lezecky.jpg",
      alt: "Climbing shoes on a rock during a one-day climbing experience"
    }
  ],
  detailText: [
    "Take your team or private group out into the rocks without planning stress or heavy logistics. We prepare a one-day climbing experience with transport from Prague and the surrounding area, instructors, equipment and a safely guided programme.",
    "We pick you up in the morning, take you to a suitable climbing area, adapt the programme to the group's experience level and take care of the full day. You simply enjoy climbing, nature and the shared experience."
  ],
  idealFor: [
    "small company teams",
    "groups of friends",
    "families",
    "private groups of 4-6 people",
    "beginners and mildly advanced climbers"
  ],
  process: [
    "We confirm the target location, group experience and the preferred style of the day.",
    "We pick you up in Prague or the surrounding area, or at another agreed meeting point.",
    "On site we prepare the equipment, briefing and programme according to the weather and group profile.",
    "After the event we take you back and can also add photos or recommendations for follow-up activities."
  ],
  included: [
    "transport from Prague and the surrounding area and back",
    "selection of a suitable location",
    "instructors and full-day organisation",
    "basic climbing equipment",
    "safety briefing",
    "drinks and a light snack"
  ]
});
dayService.standard.price = "from CZK 22,900 / group excl. VAT";
dayService.standard.note = "Recommended for 4-6 people.";
dayService.standard.items = [
  "transport from Prague and the surrounding area and back by car",
  "2 instructors delivering the programme",
  "selection of a suitable location",
  "basic climbing equipment",
  "safety briefing",
  "top rope climbing",
  "basic team activities",
  "light refreshments and hydration",
  "organisation of the whole event"
];
dayService.premium.price = "from CZK 36,900 / group excl. VAT";
dayService.premium.note = "Extended variant with a photographer, better refreshments and a broader programme.";
dayService.premium.items = [
  "everything from Standard",
  "photographer for 2-3 hours",
  "extended programme with add-on activities",
  "better refreshments (hot meal + coffee)",
  "selection and editing of photos after the event"
];

Object.assign(teamService, {
  name: "Corporate climbing team building",
  audience: "For teams of 8-20 people",
  teaser:
    "Complete organisation, transport, climbing, team activities and optional photographer or catering.",
  priceFrom: "from CZK 36,900 / group excl. VAT",
  heroAlt: "Corporate climbing team building in Czech rocks",
  cardAlt: "Corporate climbing team building in Czech rocks",
  heroSlides: [
    {
      src: "assets/images/sam-leze-jura.jpg",
      alt: "Corporate climbing team building in Czech rocks"
    },
    {
      src: "assets/images/vezicka-2.jpg",
      alt: "Climbing group on a sandstone tower during a corporate team building day",
      position: "center 18%"
    }
  ],
  cardSlides: [
    {
      src: "assets/images/sam-leze-jura.jpg",
      alt: "Corporate climbing team building in Czech rocks"
    },
    {
      src: "assets/images/vezicka-2.jpg",
      alt: "Climbing group on a sandstone tower during a corporate team building day",
      position: "center 18%"
    }
  ],
  detailText: [
    "We take your team out of the office and into nature for a day people will remember. Rock climbing, team challenges, safe facilitation, transport from Prague and the surrounding area and complete organisation in one package.",
    "We design the programme so it also works for complete beginners. Participants experience climbing, trust, communication and shared challenges. You tell us the group size and your goal, and we prepare the rest."
  ],
  idealFor: [
    "companies",
    "HR teams",
    "office managers",
    "small and medium-sized teams",
    "groups of 8-20 people"
  ],
  process: [
    "We go through the event goals, group size and the desired intensity of the experience.",
    "We propose the location, schedule, transport and a suitable group split.",
    "On site we lead the climbing, team challenges and full coordination.",
    "After the event we can provide a summary, photos or follow-up recommendations."
  ],
  included: [
    "programme concept",
    "transport from Prague and the surrounding area",
    "instructors according to group size",
    "event coordination",
    "equipment rental",
    "safety briefing",
    "drinks and a snack"
  ]
});
teamService.standard.price = "from CZK 36,900 / group excl. VAT";
teamService.standard.note = "Recommended for 8-12 people. 13-16 people from CZK 52,000, 17-20 people from CZK 66,000 excl. VAT.";
teamService.standard.items = [
  "programme concept",
  "transport from Prague and the surrounding area by minibus according to group size",
  "instructors according to participant count",
  "event coordination",
  "equipment rental",
  "safety briefing",
  "climbing and team activities",
  "basic drinks and snack",
  "pre-event organisation"
];
teamService.premium.price = "from CZK 64,900 / group excl. VAT";
teamService.premium.note = "Recommended for 8-12 people. 13-16 people from CZK 82,000, 17-20 people from CZK 99,000 excl. VAT.";
teamService.premium.items = [
  "everything from Standard",
  "photographer",
  "better refreshments / outdoor catering",
  "extended team programme",
  "photo set after the event",
  "short event video"
];

Object.assign(multiDayService, {
  name: "Multi-day outdoor stay",
  audience: "For companies and groups of 4-20 people",
  teaser:
    "A weekend or multi-day stay in nature with climbing, outdoor programme, transport, accommodation and complete service.",
  priceFrom: "from CZK 5,900 / person excl. VAT",
  heroAlt: "Czech sandstone landscape for a multi-day outdoor stay",
  cardAlt: "Outdoor landscape for a multi-day climbing and outdoor stay",
  heroSlides: [
    {
      src: "assets/images/ostrov-vez.jpg",
      alt: "Czech sandstone landscape for a multi-day outdoor stay"
    },
    {
      src: "assets/images/kobyla-z-dalky.jpg",
      alt: "Rock area in nature for a multi-day outdoor stay"
    }
  ],
  cardSlides: [
    {
      src: "assets/images/ostrov-vez.jpg",
      alt: "Outdoor landscape for a multi-day climbing and outdoor stay"
    },
    {
      src: "assets/images/kobyla-z-dalky.jpg",
      alt: "Rock area in nature for a multi-day outdoor stay"
    }
  ],
  detailText: [
    "A weekend or multi-day stay in nature for companies and groups that want more than a single-day event. We arrange transport, accommodation, programme, instructors, climbing, outdoor activities, the evening part and safe delivery.",
    "The stay can be comfortable and experiential, more athletic and active, or more adventurous depending on the group. We tailor everything so participants can focus on the shared time outdoors rather than on organisation."
  ],
  idealFor: [
    "companies",
    "smaller teams",
    "groups of friends",
    "private collectives",
    "groups of 4-20 people"
  ],
  process: [
    "We confirm the stay length, budget and preferred accommodation standard.",
    "We design an itinerary with climbing, evening programme and transport from Prague and the surrounding area.",
    "On site we coordinate the entire stay, the instructors and logistics.",
    "After the return we can provide photos, video or recommendations for the next event."
  ],
  included: [
    "transport from Prague and the surrounding area",
    "stay organisation",
    "instructors according to group size",
    "climbing / outdoor programme",
    "rental of the necessary equipment",
    "accommodation search and booking",
    "safety supervision",
    "hydration / light refreshments"
  ]
});
multiDayService.standard.price = "from CZK 5,900 / person excl. VAT";
multiDayService.standard.note = "Minimum group price from CZK 39,000 excl. VAT. Accommodation is billed separately in the Standard package according to the chosen option.";
multiDayService.standard.items = [
  "transport from Prague and the surrounding area",
  "stay organisation",
  "instructors according to group size",
  "climbing / outdoor programme",
  "rental of the necessary equipment",
  "arranging and reserving accommodation",
  "safety supervision",
  "hydration / light refreshments"
];
multiDayService.premium.price = "from CZK 10,900 / person excl. VAT";
multiDayService.premium.note = "Minimum group price from CZK 69,000 excl. VAT. Accommodation at the agreed standard is included.";
multiDayService.premium.items = [
  "everything from Standard",
  "accommodation included according to the agreed standard",
  "photographer",
  "better food",
  "extended programme",
  "tailored evening programme option",
  "individual itinerary preparation"
];

Object.assign(adrenalineService, {
  name: "Adrenaline team experience",
  audience: "For small teams of 3-6 people",
  teaser:
    "An intensive programme with climbing, rappelling, height, trust and a stronger shared challenge.",
  priceFrom: "from CZK 24,900 / group excl. VAT",
  heroAlt: "Small adrenaline climbing team on Czech rocks",
  cardAlt: "Adrenaline climbing team experience",
  heroSlides: [
    {
      src: "assets/images/sam-pada.jpg",
      alt: "Small adrenaline climbing team on Czech rocks"
    },
    {
      src: "assets/images/pavel-leze.jpg",
      alt: "Climber on a rock during a guided adrenaline programme"
    }
  ],
  cardSlides: [
    {
      src: "assets/images/sam-pada.jpg",
      alt: "Adrenaline climbing team experience"
    },
    {
      src: "assets/images/pavel-leze.jpg",
      alt: "Climber on a rock during a guided adrenaline programme"
    }
  ],
  detailText: [
    "A stronger version of an outdoor event for a small group that wants a more intense climbing and adrenaline-driven experience. We combine movement in the rocks, rope techniques, trust and shared pressure in a controlled and safely led format.",
    "Ideal for small management teams, founders, close private groups or clients who want something more than a standard outdoor day. The whole event is still built on guidance, organisation and a safe structure."
  ],
  idealFor: [
    "small teams",
    "management groups",
    "founders",
    "private groups",
    "3-6 participants"
  ],
  process: [
    "We align expectations, group profile and the desired level of challenge.",
    "We select a suitable rock area and a programme with a stronger adrenaline component.",
    "On site we lead the full event including rope systems and safety supervision.",
    "After the event we can add photos, video or further programme recommendations."
  ],
  included: [
    "transport from Prague and the surrounding area",
    "specialised rope and climbing equipment",
    "minimum 2 instructors",
    "adrenaline climbing programme",
    "safety briefing and facilitation",
    "drinks and a small snack"
  ]
});
adrenalineService.standard.price = "from CZK 26,000 / group excl. VAT";
adrenalineService.standard.note = "Recommended for 3-4 people. For 5-6 people from CZK 39,000 excl. VAT.";
adrenalineService.standard.items = [
  "transport from Prague and the surrounding area and back",
  "minimum 2 instructors",
  "specialised rope and climbing equipment",
  "selection of a suitable location",
  "safety briefing",
  "adrenaline climbing programme",
  "rappelling and rope work",
  "light refreshments and hydration",
  "organisation of the whole event"
];
adrenalineService.premium.price = "from CZK 44,900 / group excl. VAT";
adrenalineService.premium.note = "Extended adrenaline version with photo coverage and a broader programme.";
adrenalineService.premium.items = [
  "everything from Standard",
  "photographer",
  "extended adrenaline programme",
  "better refreshments",
  "option to combine more activities",
  "selection and editing of photos after the event"
];

Object.assign(customService, {
  name: "Tailored experience built around you",
  audience: "For companies, private groups and special one-off requests",
  teaser:
    "Did not find exactly what you are looking for? Build your own climbing or outdoor experience step by step.",
  priceFrom: "Individual quote based on your brief",
  heroAlt: "Outdoor landscape for a tailor-made experience",
  cardAlt: "Outdoor landscape for a tailor-made experience",
  actions: {
    primaryLabel: "Interactive form",
    primaryHref: "custom-experience-en.html",
    secondaryLabel: "Quick question",
    secondaryHref: "contact-en.html"
  },
  detailText: [
    "Did not find exactly what you were looking for? Do you already know the type of rock, adventure level, location or supporting services you want? This option was designed exactly for those tailor-made requests.",
    "Inside the interactive form you can build your own climbing or outdoor day step by step. If you would rather get advice first, send us a quick question and we will shape the proposal together."
  ],
  idealFor: [
    "specific corporate briefs",
    "groups with a clear idea of the location or rock type",
    "a combination of climbing, outdoor, transport, accommodation and add-ons",
    "clients who want to build the event from the ground up"
  ],
  process: [
    "You choose the group size, timing, type of event and preferred style.",
    "You select the rock type, location and services we should include.",
    "We prepare an estimated calculation and then a real proposal based on availability.",
    "If needed, we refine the event together before the final offer and contract draft."
  ],
  included: [
    "tailor-made concept preparation",
    "manual recommendation of a suitable format",
    "alignment of logistics and availability",
    "individual quotation"
  ]
});

eventyData.addOns = [
  {
    title: "Photography and video",
    items: [
      "Photographer for 2-3 hours - from CZK 6,900 excl. VAT",
      "Half-day photographer - from CZK 10,900 excl. VAT",
      "Full-day photographer - from CZK 15,900 excl. VAT",
      "Short reels video - from CZK 6,900 excl. VAT",
      "Event video 60-90 seconds - from CZK 14,900 excl. VAT"
    ]
  },
  {
    title: "Food and refreshments",
    items: [
      "Hydration and snack - included in most packages",
      "Standard outdoor catering - from CZK 590 / person excl. VAT",
      "Premium catering - from CZK 990 / person excl. VAT",
      "Evening barbecue - individually quoted"
    ]
  },
  {
    title: "Programme add-ons",
    items: [
      "Indoor backup programme - included",
      "Extra instructor - from CZK 6,500 / day excl. VAT",
      "English-speaking instructor - +20%",
      "Rappelling as a stand-alone station - from CZK 7,900 excl. VAT",
      "Evening programme - from CZK 7,900 excl. VAT",
      "Gift pack for participants - from CZK 290 / person excl. VAT",
      "Via ferrata variant - individually quoted"
    ]
  }
];

eventyData.faq = [
  {
    question: "Who are these services for?",
    answer: "We mainly work for companies, teams, private groups and clients looking for a fully arranged outdoor or climbing event from Prague and the surrounding area."
  },
  {
    question: "Do participants need climbing experience?",
    answer: "Not at all. Most events are designed for complete beginners or mixed groups. We adapt the venue, programme and pace accordingly."
  },
  {
    question: "How is the final date confirmed?",
    answer: "The form is only a non-binding inquiry. A binding reservation is created only after we send a contract draft and the deposit payment is received."
  },
  {
    question: "What if the weather changes?",
    answer: "For every event we can suggest a programme adjustment, a backup location, a new date or an indoor backup solution. The final decision is always agreed individually."
  }
];

eventyData.formOptions.actionTypes = [
  "Climbing day without the hassle",
  "Corporate climbing team building",
  "Multi-day outdoor stay",
  "Adrenaline team experience",
  "I am not sure yet, please recommend"
];
eventyData.formOptions.experienceLevels = [
  "none",
  "beginners",
  "mixed group",
  "more advanced"
];
eventyData.formOptions.flexibility = [
  "the date is fixed",
  "we are flexible",
  "please recommend a suitable date"
];
eventyData.formOptions.packages = ["Standard", "Premium", "I need advice"];
eventyData.formOptions.addOnChoices = [
  "Photographer",
  "Video / reels",
  "Full board (3 meals)",
  "Evening programme",
  "English-speaking instructor",
  "Gift packs"
];
eventyData.formOptions.consents = [
  "I agree to the processing of personal data for the purpose of handling this inquiry.",
  "I understand that a binding order is created only after the contract draft is delivered and the deposit payment is received.",
  "I agree to receive a response and follow-up information related to this inquiry by email."
];

eventyData.customFormOptions.eventTypes = [
  "Relaxed climbing day in nature",
  "Educational / intro course",
  "Fun group event",
  "Adrenaline programme",
  "Corporate team building",
  "Multi-day stay",
  "Private celebration or closed event",
  "I am not sure, please recommend the right format"
];
eventyData.customFormOptions.rockTypes = [
  { value: "any", label: "No preference" },
  { value: "piskovec", label: "Sandstone" },
  { value: "skala", label: "Rock (limestone, granite and more)" }
];
eventyData.customFormOptions.accessLevels = [
  "easy approach",
  "moderately demanding approach",
  "more adventurous approach",
  "no preference"
];
eventyData.customFormOptions.audienceFits = [
  "no preference",
  "suitable for children",
  "suitable for families",
  "suitable for a company",
  "suitable for a group of friends"
];
eventyData.customFormOptions.seasonOptions = [
  "no preference",
  "summer season",
  "winter season"
];
eventyData.customFormOptions.activityChoices = [
  "Rock climbing",
  "Relaxed climbing day",
  "Skills course / intro training",
  "Rappelling",
  "Via ferrata",
  "Bushcraft / nature stay",
  "Hiking / ridge programme",
  "Drytool / winter techniques",
  "Evening programme",
  "Bivouac / overnight outdoor experience"
];
eventyData.customFormOptions.serviceChoices = [
  "Transport from Prague and the surrounding area",
  "Instructors and programme leadership",
  "Climbing / safety equipment",
  "Accommodation",
  "Snack and hydration",
  "Catering / full board",
  "Photographer",
  "Video / reels",
  "Evening programme",
  "English-speaking instructor",
  "Indoor backup option",
  "Additional team building activities",
  "Gift pack for participants"
];

const regionMap = {
  "Praha": "Prague",
  "Středočeský kraj": "Central Bohemian Region",
  "Liberecký kraj": "Liberec Region",
  "Královéhradecký kraj": "Hradec Kralove Region",
  "Ústecký kraj": "Usti nad Labem Region",
  "Jihočeský kraj": "South Bohemian Region",
  "Jihomoravský kraj": "South Moravian Region",
  "Moravskoslezský kraj": "Moravian-Silesian Region",
  "Vysočina": "Vysocina Region",
  "Plzeňský kraj": "Pilsen Region"
};

eventyData.customFormOptions.localities.forEach((locality) => {
  locality.region = regionMap[locality.region] || locality.region;
});

eventyData.mailTemplates.customerSubject = "We received your inquiry - Eventy Jinak";
eventyData.mailTemplates.customerBody = [
  "We have received your inquiry and will start working on it right away. We will get back to you with the next steps within 3 business days at the latest.",
  "",
  "Thank you for choosing us.",
  "",
  "Eventy Jinak"
];
eventyData.mailTemplates.contactCustomerSubject = "We received your message - Eventy Jinak";
eventyData.mailTemplates.contactCustomerBody = [
  "Thank you for your message. We will get back to you as soon as possible using the email you provided.",
  "",
  "Eventy Jinak"
];
eventyData.mailTemplates.adminSubjectPrefix = "New Eventy Jinak inquiry";
eventyData.mailTemplates.contactSubjectPrefix = "New Eventy Jinak message";
