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
        <div class="rounded-lg outline outline-light-border/60 dark:outline-dark-border/60 outline-offset-6">
            <a href="${p.link}">
                <div class="rounded-lg backdrop-blur-md bg-light-back p-4 shadow-sm h-full hover:shadow-2xl hover:-translate-y-3 hover:rotate-1 transition duration-300">
                    <div class="h-45 w-full">
                        <img src="${p.image}" alt="${p.title}" class="object-cover max-h-full rounded-lg">
                    </div>
                    <hr class="my-2 border-t border-t-stone-300 border-2">
                    <div class="py-2">
                      <div id="resize-text" class="text-lg font-semibold leading-tight text-gray-900 hover:underline">${p.title}</div>
                      <span class="text-sm text-gray-500 font-mono">${p.month}</span>
                      <span class="text-sm text-gray-500 font-mono">${p.year}</span>
                    </div>
                    <hr class="my-1 border-t border-t-stone-300 border-2">
                </div>
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
