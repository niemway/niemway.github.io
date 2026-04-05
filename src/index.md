---
layout: base.njk
title: Home
texture: true
border_distance: 4
---
<div class="antialiased min-h-full flex flex-col items-center justify-center p-8" id="body">
    <div class="max-w-3xl w-full mx-auto"> <!-- everything holder -->
        <div class="bg-light-back dark:bg-dark-back w-fit mx-auto">
            <h1 class="font-serif text-8xl text-center text-mauve-800 dark:text-transparent dark:bg-linear-to-t bg-clip-text dark:from-mauve-500 dark:to-mauve-300 text-shadow">Nicholas</h1>
        </div>
        <div class="bg-light-back dark:bg-dark-back w-fit mx-auto">
            <h1 class="font-serif text-8xl text-center text-mauve-800 dark:text-transparent dark:bg-linear-to-t bg-clip-text dark:from-mauve-500 dark:to-mauve-300 text-shadow">Way</h1>
        </div>
        <div class="flex justify-center" id="model"></div>
        <div class="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4">
            <div class="p-4 text-stone-800 dark:text-stone-200 uppercase">
                <div class="font-gothic border-r border-light-border/60 dark:border-dark-border/60 *:*:backdrop-blur-sm">
                    <a href="/about/"><div class="text-2xl sm:text-lg border border-light-border/60 dark:border-dark-border/60 my-2 pr-4 pl-1 px-0.5 w-full hover:text-link-orange hover:border-link-orange">About</div></a>
                    <a href="/portfolio/"><div class="text-2xl sm:text-lg border border-light-border/60 dark:border-dark-border/60 my-2 pr-4 pl-1 px-0.5 w-full hover:text-link-orange hover:border-link-orange">Portfolio</div></a>
                    <a href="/resume/"><div class="text-2xl sm:text-lg border border-light-border/60 dark:border-dark-border/60 my-2 pr-4 pl-1 px-0.5 w-full hover:text-link-orange hover:border-link-orange">Resume</div></a>
                    <a href="/contact/"><div class="text-2xl sm:text-lg border border-light-border/60 dark:border-dark-border/60 my-2 pr-4 pl-1 px-0.5 w-full hover:text-link-orange hover:border-link-orange">Contact</div></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="-z-1 inset-0 pointer-events-none absolute *:border-light-border/60 *:dark:border-dark-border/60">
    <div class="absolute top-18 bottom-0 border-y-2 border-x-2 rounded-2xl h-9/10" style="left: 4rem; right: 4rem;"></div>
</div>


{% block scripts %}
<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.128.0/build/three.module.js"
    }
  }
</script>
<script type="module" src="/js/main.js"></script>
{% endblock %}
