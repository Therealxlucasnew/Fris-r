const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
  if (!window.location.hash) {
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "instant" }), 0);
  }
});

const translations = {
  da: {
    metaDescription: "HF Cut Frisør i Gentofte. Skarp klipning, fade og skægtrim på Smakkegårdsvej 173. Book tid på telefon 71 69 19 25.",
    pageTitle: "HF Cut Frisør | Skarp klipning i Gentofte",
    brandAria: "HF Cut Frisør forside",
    menuAria: "Åbn menu",
    languageAria: "Vælg sprog",
    brandName: "HF Cut Frisør",
    brandMobileName: "HF Cut",
    brandSub: "Frisør / Barber",
    navServices: "Ydelser",
    navReviews: "Anmeldelser",
    navHours: "Åbningstider",
    navContact: "Kontakt",
    bookTime: "Book tid",
    heroEyebrow: "Smakkegårdsvej 173, Gentofte",
    heroTitle1: "Skarp",
    heroTitle2: "klipning i",
    heroTitle3: "Gentofte",
    heroCopy: "Rent snit. God stil. Lokal frisør til fade, herreklip, styling og skægtrim.",
    bookOnline: "Book tid online",
    seeServices: "Se ydelser",
    quickBookingAria: "Hurtig booking",
    nextCut: "Næste klip",
    bookPlanwayTitle: "Book direkte online",
    bookingText: "Vælg behandling og tid i Planway, så er din næste klipning klar.",
    keyInfoAria: "Nøgleinformation",
    addressLabel: "Adresse",
    addressLine: "Smakkegårdsvej 173, st. mf",
    phoneLabel: "Telefon",
    phoneHelp: "Book tid eller spørg om pris",
    qualityLabel: "Kvalitet",
    qualityTitle: "Grundig klipning",
    qualityText: "God service fra start til finish",
    servicesEyebrow: "Ydelser",
    servicesTitle: "Fade, klip og skægtrim",
    servicesIntro: "Enkel booking, tydelig aftale og et resultat der holder formen.",
    service1Alt: "Barber arbejder med en ren nakke og fade",
    service1Title: "Herreklip",
    service1Text: "Klassisk eller moderne klip med fokus på form, sider og finish.",
    service2Alt: "Tæt fade med skarp kant",
    service2Title: "Fade",
    service2Text: "Low, mid eller high fade med rene overgange og skarp nakke.",
    service3Alt: "Rolig barbersalon med moderne udtryk",
    service3Title: "Skægtrim",
    service3Text: "Trim, kanter og styling så skægget matcher frisuren.",
    priceAria: "Pris og booking",
    pricesTitle: "Priser",
    priceListAria: "Prisliste",
    priceMen: "Herre klip",
    priceFade: "Skin fade",
    priceSenior: "Pensionist",
    priceChildren: "Børn, pige og dreng (5-11 år)",
    priceFatherChild: "Far & barn",
    priceMachine: "Alm. maskineklip",
    priceMachineFade: "Maskine klip med fade",
    priceWash: "Vask",
    priceFringe: "Pandehår",
    priceNote: "Med og uden bestillingstider. Book online eller ring for at høre om ledige tider.",
    callPhone: "Ring 71 69 19 25",
    directions: "Find vej",
    goodToKnow: "Godt at vide",
    note1: "Kom gerne med referencebillede, hvis du vil ramme en bestemt fade eller længde.",
    note2: "Skal du have både klip og skæg, så sig det ved booking.",
    note3: "Salonen ligger lokalt på Smakkegårdsvej med nem adgang fra Gentofte.",
    bookingEyebrow: "Online booking",
    bookingSectionTitle: "Book din tid hos HF Cut",
    bookingSectionText: "Vælg behandling og ledig tid direkte her på siden.",
    bookingFrameTitle: "Book tid hos HF Cut Frisør",
    bookingFallbackText: "Hvis booking ikke vises korrekt, kan du åbne Planway her:",
    bookingFallbackLink: "Åbn booking",
    reviewsEyebrow: "Google anmeldelser",
    reviewsTitle: "5-stjernede ord fra kunderne",
    googleStarsAria: "4,9 ud af 5 på Google",
    googleRating: "4,9 rating på Google",
    seeGoogleReviews: "Se Google anmeldelser",
    reviewBoxAria: "Udvalgte Google anmeldelser",
    fiveStarsAria: "5 stjerner",
    reviewKristian: "De er super nice. Altid smilende og gør sig virkelig umage med dit hår.",
    reviewTorben: "Vi er super glade for at komme hos HF Cut. Både jeg og mine to drenge får altid flotte frisurer.",
    reviewSebastian: "Endelig en god frisør med en super fair pris, og klippet var helt perfekt.",
    reviewRolf: "Dygtige og utrolig venlige frisører. Og så er det tilmed rørende billigt.",
    hoursEyebrow: "Åbningstider",
    hoursTitle: "Planlæg dit besøg",
    monday: "Mandag",
    tuesday: "Tirsdag",
    wednesday: "Onsdag",
    thursday: "Torsdag",
    friday: "Fredag",
    saturday: "Lørdag",
    sunday: "Søndag",
    closed: "Lukket",
    openMaps: "Åbn i Google Maps",
    footerText: "HF Cut Frisør - Smakkegårdsvej 173, st. mf, 2820 Gentofte",
    footerBook: "Book tid online",
  },
  en: {
    metaDescription: "HF Cut barber in Gentofte. Sharp haircuts, fades and beard trims at Smakkegårdsvej 173. Book by phone at 71 69 19 25.",
    pageTitle: "HF Cut Barber | Sharp haircuts in Gentofte",
    brandAria: "HF Cut Barber home",
    menuAria: "Open menu",
    languageAria: "Choose language",
    brandName: "HF Cut Barber",
    brandMobileName: "HF Cut",
    brandSub: "Hairdresser / Barber",
    navServices: "Services",
    navReviews: "Reviews",
    navHours: "Opening hours",
    navContact: "Contact",
    bookTime: "Book now",
    heroEyebrow: "Smakkegårdsvej 173, Gentofte",
    heroTitle1: "Sharp",
    heroTitle2: "haircuts in",
    heroTitle3: "Gentofte",
    heroCopy: "Clean cuts. Good style. Local barber for fades, men's cuts, styling and beard trims.",
    bookOnline: "Book online",
    seeServices: "See services",
    quickBookingAria: "Quick booking",
    nextCut: "Next cut",
    bookPlanwayTitle: "Book directly online",
    bookingText: "Choose your service and time in Planway, and your next haircut is ready.",
    keyInfoAria: "Key information",
    addressLabel: "Address",
    addressLine: "Smakkegårdsvej 173, ground floor",
    phoneLabel: "Phone",
    phoneHelp: "Book a time or ask about prices",
    qualityLabel: "Quality",
    qualityTitle: "Thorough haircuts",
    qualityText: "Good service from start to finish",
    servicesEyebrow: "Services",
    servicesTitle: "Fades, cuts and beard trims",
    servicesIntro: "Simple booking, clear agreement and a result that keeps its shape.",
    service1Alt: "Barber working on a clean neckline and fade",
    service1Title: "Men's cut",
    service1Text: "Classic or modern cuts with focus on shape, sides and finish.",
    service2Alt: "Close fade with sharp edge",
    service2Title: "Fade",
    service2Text: "Low, mid or high fade with clean transitions and a sharp neckline.",
    service3Alt: "Calm modern barbershop interior",
    service3Title: "Beard trim",
    service3Text: "Trim, edges and styling so the beard matches the haircut.",
    priceAria: "Prices and booking",
    pricesTitle: "Prices",
    priceListAria: "Price list",
    priceMen: "Men's cut",
    priceFade: "Skin fade",
    priceSenior: "Senior",
    priceChildren: "Children, girl and boy (5-11 years)",
    priceFatherChild: "Father & child",
    priceMachine: "Standard machine cut",
    priceMachineFade: "Machine cut with fade",
    priceWash: "Wash",
    priceFringe: "Fringe",
    priceNote: "With and without appointments. Book online or call to ask about available times.",
    callPhone: "Call 71 69 19 25",
    directions: "Get directions",
    goodToKnow: "Good to know",
    note1: "Bring a reference photo if you want a specific fade or length.",
    note2: "If you need both haircut and beard trim, mention it when booking.",
    note3: "The salon is local on Smakkegårdsvej with easy access from Gentofte.",
    bookingEyebrow: "Online booking",
    bookingSectionTitle: "Book your appointment at HF Cut",
    bookingSectionText: "Choose your service and available time directly on this page.",
    bookingFrameTitle: "Book an appointment at HF Cut Barber",
    bookingFallbackText: "If booking does not display correctly, open Planway here:",
    bookingFallbackLink: "Open booking",
    reviewsEyebrow: "Google reviews",
    reviewsTitle: "5-star words from customers",
    googleStarsAria: "4.9 out of 5 on Google",
    googleRating: "4.9 rating on Google",
    seeGoogleReviews: "See Google reviews",
    reviewBoxAria: "Selected Google reviews",
    fiveStarsAria: "5 stars",
    reviewKristian: "They are super nice. Always smiling and really make an effort with your hair.",
    reviewTorben: "We are very happy coming to HF Cut. Both my two boys and I always get great haircuts.",
    reviewSebastian: "Finally a good hairdresser with a super fair price, and the haircut was perfect.",
    reviewRolf: "Skilled and incredibly friendly hairdressers. And it is even touchingly affordable.",
    hoursEyebrow: "Opening hours",
    hoursTitle: "Plan your visit",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    openMaps: "Open in Google Maps",
    footerText: "HF Cut Barber - Smakkegårdsvej 173, ground floor, 2820 Gentofte",
    footerBook: "Book online",
  },
};

const applyLanguage = (language) => {
  const dictionary = translations[language] ?? translations.da;
  document.documentElement.lang = language;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key && dictionary[key]) node.setAttribute(attr, dictionary[key]);
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("hf-cut-language", language);
  document.querySelector(".brand")?.style.setProperty("--mobile-brand-name", `"${dictionary.brandMobileName}"`);
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("[data-nav] a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("hf-cut-language");
const browserLanguage = navigator.language?.toLowerCase().startsWith("da") ? "da" : "en";
applyLanguage(savedLanguage || browserLanguage);

const today = new Date().getDay();
document.querySelector(`[data-hours] [data-day="${today}"]`)?.classList.add("is-today");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll("[data-reveal]");

if (prefersReducedMotion) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  revealItems.forEach((item, index) => {
    const explicitDelay = item.dataset.revealDelay;
    const autoDelay = item.dataset.reveal === "line" ? Math.min(index * 18, 220) : 0;
    item.style.setProperty("--reveal-delay", `${explicitDelay ?? autoDelay}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const heroImage = document.querySelector(".hero-media img");
  const updateHeroMotion = () => {
    if (!heroImage) return;
    const offset = Math.min(window.scrollY * 0.06, 44);
    heroImage.style.transform = `scale(1.04) translate3d(0, ${offset}px, 0)`;
  };

  updateHeroMotion();
  window.addEventListener("scroll", updateHeroMotion, { passive: true });
}
