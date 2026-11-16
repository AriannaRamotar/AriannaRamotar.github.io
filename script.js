
/*
  MACFE INTERACTIVE SEASON EXPLORER

  Each season has:
  - a year
  - a title
  - a description
  - a list of project highlights

  We'll expand this as we build the MACFE page.
*/

const seasons = {
  ev5: {
    year: "2023–2024",
    title: "EV5 — Building Foundations",
    description:
      "The EV5 season marked an important stage in my " +
      "leadership journey, with a focus on business " +
      "development, team operations, and organizational " +
      "initiatives.",
    highlights: [
      "Business Development",
      "Team Leadership",
      "EV5 Season"
    ]
  },

  ev6: {
    year: "2024–2025",
    title: "EV6 — Growing the Team",
    description:
      "During the EV6 season, my work included team " +
      "development, sponsorship relationships, " +
      "organizational growth, and supporting " +
      "the team's ongoing operations.",
    highlights: [
      "Sponsorship Development",
      "Team Operations",
      "EV6 Season"
    ]
  },

  ev7: {
    year: "2025–2026",
    title: "EV7 — A Year of Milestones",
    description:
      "The EV7 season included the vehicle reveal, " +
      "Formula SAE Michigan competition, team growth, " +
      "and leadership transition.",
    highlights: [
      "EV7 Reveal Event",
      "Formula SAE Michigan",
      "Team Operations"
    ]
  },

  ev8: {
    year: "2026–2027",
    title: "EV8 — Continuing the Journey",
    description:
      "Following my transition from Team Principal, " +
      "I continued contributing to the team through " +
      "outreach initiatives, including organizing " +
      "Women in Motorsports Night.",
    highlights: [
      "Women in Motorsports",
      "Industry Outreach",
      "Event Planning"
    ]
  }
};


// Find the HTML elements we'll update

const seasonButtons = document.querySelectorAll(".season-tab");

const yearElement = document.getElementById("season-year");
const titleElement = document.getElementById("season-title");
const descriptionElement =
  document.getElementById("season-description");
const highlightsElement =
  document.getElementById("season-highlights");


// Update the page when someone chooses a season

function showSeason(seasonKey) {
  const season = seasons[seasonKey];

  if (!season) {
    return;
  }

  yearElement.textContent = season.year + " SEASON";
  titleElement.textContent = season.title;
  descriptionElement.textContent = season.description;

  // Clear the previous season's highlights
  highlightsElement.replaceChildren();

  // Add the selected season's highlights
  season.highlights.forEach(function(highlight) {
    const tag = document.createElement("span");
    tag.textContent = highlight;
    highlightsElement.appendChild(tag);
  });

  // Update the active button
  seasonButtons.forEach(function(button) {
    const isActive = button.dataset.season === seasonKey;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}


// Listen for button clicks

seasonButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    showSeason(button.dataset.season);
  });
});
