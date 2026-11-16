
/* ==================================
   MACFE SEASON DATA
================================== */

const seasonData = {
  ev5: {
    year: "2023–2024 / EV5",
    title: "Building the foundations",
    copy:
      "Business development, team leadership and " +
      "organizational operations during the EV5 season.",
    chips: [
      "Business development",
      "EV5 season",
      "Leadership"
    ]
  },

  ev6: {
    year: "2024–2025 / EV6",
    title: "Growing together",
    copy:
      "Team operations, sponsor relationships and " +
      "organizational development during the EV6 season.",
    chips: [
      "Sponsorship",
      "Team development",
      "EV6 season"
    ]
  },

  ev7: {
    year: "2025–2026 / EV7",
    title: "A year of milestones",
    copy:
      "Vehicle reveal, Formula SAE Michigan, " +
      "team growth and leadership transition.",
    chips: [
      "EV7 Reveal",
      "Competition",
      "Leadership"
    ]
  },

  ev8: {
    year: "2026–2027 / EV8",
    title: "A new chapter",
    copy:
      "Continued involvement following my Team " +
      "Principal tenure, including Women in " +
      "Motorsports Night and industry outreach.",
    chips: [
      "Women in Motorsports",
      "Outreach",
      "Events"
    ]
  }
};


/* ==================================
   INTERACTIVE SEASON SELECTOR
================================== */

const seasonButtons =
  document.querySelectorAll("[data-season]");

const seasonYear =
  document.getElementById("season-eyebrow");

const seasonHeading =
  document.getElementById("season-heading");

const seasonCopy =
  document.getElementById("season-copy");

const seasonChips =
  document.getElementById("season-chips");

if (
  seasonButtons.length &&
  seasonYear &&
  seasonHeading &&
  seasonCopy &&
  seasonChips
) {

  seasonButtons.forEach(button => {

    button.addEventListener("click", () => {

      const data = seasonData[button.dataset.season];

      if (!data) return;

      // Update season text
      seasonYear.textContent = data.year;
      seasonHeading.textContent = data.title;
      seasonCopy.textContent = data.copy;

      // Replace highlight tags
      seasonChips.replaceChildren(
        ...data.chips.map(label => {
          const chip = document.createElement("span");
          chip.textContent = label;
          return chip;
        })
      );

      // Highlight the selected button
      seasonButtons.forEach(other => {

        const active = other === button;

        other.classList.toggle("active", active);

        other.setAttribute(
          "aria-pressed",
          String(active)
        );

      });

    });

  });

}


/* ==================================
   MOBILE NAVIGATION
================================== */

const menuButton =
  document.querySelector(".menu-toggle");

const menuLinks =
  document.querySelector(".nav-links");

if (menuButton && menuLinks) {

  menuButton.addEventListener("click", () => {

    const open =
      menuButton.getAttribute("aria-expanded") !== "true";

    menuButton.setAttribute(
      "aria-expanded",
      String(open)
    );

    menuLinks.classList.toggle("open", open);

  });

  // Close menu after clicking a link
  menuLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      menuLinks.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/* ==================================
   AUTOMATIC COPYRIGHT YEAR
================================== */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
