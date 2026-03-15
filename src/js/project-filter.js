document.addEventListener("DOMContentLoaded", function () {
  // print json
  console.log("Project data element:", document.getElementById("project-data"));
  const projects = JSON.parse(
    document.getElementById("project-data").textContent,
  );
  const grid = document.getElementById("project-grid");
  const filterButtons = document.querySelectorAll("[data-filter]");

  function renderProjects(filter) {
    let filtered = projects;
    if (filter !== "all") {
      // Check if filter matches year or tech
      filtered = projects.filter(
        (p) => p.year.toString() === filter || p.tech.includes(filter),
      );
    }

    grid.innerHTML = filtered
      .map(
        (p) => `
            <div class="project-card">
                <a href="${p.link}">
                    <img src="${p.image}" alt="${p.title}">
                    <div class="project-title">${p.title}</div>
                    <span class="skill">${p.month}</span>
                    <span class="skill">${p.year}</span>
                </a>
            </div>
        `,
      )
      .join("");
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      renderProjects(btn.dataset.filter);
    });
  });

  // Initial render
  renderProjects("all");
});
