---
layout: base.njk
title: Portfolio
include_header: true
border_distance: 1
border_left: border-y-2 border-l-2 rounded-l-2xl border-dashed
border_right: border-y-2 border-r-2 rounded-r-2xl border-dashed
---
<div class="content">
            <div class="font-serif text-8xl text-center text-mauve-800 dark:text-transparent dark:bg-linear-to-t bg-clip-text dark:from-mauve-500 dark:to-mauve-300 text-shadow">
                <h1>Portfolio</h1>
            </div>
            <div class="flex justify-center divide-x divide-light-border/60 dark:divide-dark-border/60 mb-6 *:hover:text-link-orange">
                <a href="https://eggshell_d.artstation.com" target="_blank">
                    <span class="font-mono font-light border-y py-1 px-2 border-light-border/60 dark:border-dark-border/60">
                        <i class="icon"></i>
                        Digital Art Portfolio
                    </span>
                </a>
                <a href="/3dgallery/" target="_blank">
                    <span class="font-mono font-light border-y py-1 px-2 border-light-border/60 dark:border-dark-border/60">
                        <i class="icon" style="background: url('/images/icons/cube.svg');"></i>
                        3D Art Portfolio
                    </span>
                </a>
            </div>
            <div>
                {% include "project_list.njk" %}
            </div>
        </div>
        
{% block scripts %}
<script src="/js/project-filter.js"></script>
{% endblock %}
