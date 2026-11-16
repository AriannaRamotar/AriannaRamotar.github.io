
/* ==========================================
   ARIANNA RAMOTAR — PORTFOLIO JAVASCRIPT
========================================== */

/* MACFE SEASON DATA */

const seasonData = {
  ev5: {
    eyebrow: "EV5 / 2023–2024",
    heading: "Building the foundations.",
    copy:
      "My first full season as Team Principal brought together organizational leadership and hands-on manufacturing. Alongside budgeting, operations, and design reviews, I assisted with chassis mould manufacturing and contributed to carbon fibre cutting, layup, and infusion.",
    chips: [
      "Team leadership",
      "Chassis mould manufacturing",
      "Carbon fibre manufacturing",
      "Budgeting"
    ],
    year: "2023 / 2024",
    link: "macfe.html#ev5"
  },

  ev6: {
    eyebrow: "EV6 / 2024–2025",
    heading: "Strengthening the process.",
    copy:
      "During EV6, I continued balancing leadership and operational responsibilities with hands-on involvement in chassis manufacturing. I participated in technical design reviews, supported Formula SAE rules compliance, contributed to budgeting, and regularly worked alongside teammates in the shop to help meet project deadlines.",
    chips: [
      "Operations",
      "Design reviews",
      "Rules compliance",
      "Chassis manufacturing"
    ],
    year: "2024 / 2025",
    link: "macfe.html#ev6"
  },

  ev7: {
    eyebrow: "EV7 / 2025–2026",
    heading: "A year of milestones.",
    copy:
      "My final season as Team Principal brought together organizational growth, technical collaboration, and hands-on manufacturing. I continued supporting carbon fibre chassis production, design reviews, and project deadlines while helping deliver our EV7 Reveal, preparing for Formula SAE Michigan, and transitioning leadership to the next team.",
    chips: [
      "181 team members",
      "55 sponsors",
      "Chassis manufacturing",
      "Leadership transition"
    ],
    year: "2025 / 2026",
    link: "macfe.html#ev7"
  },

  ev8: {
    eyebrow: "EV8 / 2026–2027",
    heading: "Continuing the connection.",
    copy:
      "After transitioning from Team Principal to General Member in July 2026, I continued contributing through outreach and community engagement. This includes organizing Women in Motorsports Night, bringing together motorsport professionals and students for an evening of conversation, practical advice, and networking.",
    chips: [
      "Women in Motorsports",
      "Industry outreach",
      "Community engagement",
      "General Member"
    ],
    year: "2026 / 2027",
    link: "macfe.html#ev8"
  }
};


/* ==========================================
   INTERACTIVE SEASON SELECTOR
========================================== */

const seasonButtons = document.querySelectorAll(
  "[data-season]"
);

const seasonEyebrow = document.getElementById(
  "season-eyebrow"
);

const seasonHeading = document.getElementById(
  "season-heading"
);

const seasonCopy = document.getElementById(
  "season-copy"
);

const seasonChips = document.getElementById(
  "season-chips"
);

const seasonMore = document.querySelector(
  ".season-more"
);

const seasonArtTitle = document.querySelector(
  ".season-art-inner strong"
);

const seasonArtYear = document.querySelector(
  ".season-art-inner small"
);


function updateSeason(seasonKey) {
  const season = seasonData[seasonKey];

  if (!season) return;

  if (seasonEyebrow) {
    seasonEyebrow.textContent = season.eyebrow;
  }

  if (seasonHeading) {
    seasonHeading.textContent = season.heading;
  }

  if (seasonCopy) {
    seasonCopy.textContent = season.copy;
  }

  if (seasonChips) {
    seasonChips.replaceChildren();

    season.chips.forEach((chip) => {
      const span = document.createElement("span");
      span.textContent = chip;
      seasonChips.appendChild(span);
    });
  }

  if (seasonMore) {
    seasonMore.href = season.link;
  }

  if (seasonArtTitle) {
    seasonArtTitle.textContent =
      seasonKey.toUpperCase();
  }

  if (seasonArtYear) {
    seasonArtYear.textContent = season.year;
  }

  seasonButtons.forEach((button) => {
    const isActive =
      button.dataset.season === seasonKey;

    button.classList.toggle("active", isActive);

    button.setAttribute(
      "aria-pressed",
      String(isActive)
    );
  });
}


seasonButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateSeason(button.dataset.season);
  });
});


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle = document.querySelector(
  ".menu-toggle"
);

const navLinks = document.querySelector(
  ".nav-links"
);

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {
    const isOpen =
      navLinks.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });

}


/* ==========================================
   AUTOMATIC FOOTER YEAR
========================================== */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}


/* ==========================================
   INITIALIZE DEFAULT SEASON
========================================== */

if (seasonButtons.length > 0) {
  updateSeason("ev5");
}
