---
layout: base.njk
title: Portfolio
include_header: true
---
<div class="content">
            <div class="body_header">
                <h1>Portfolio</h1>
            </div>
            <!--center align this div -->
            <div style="text-align: center;">
                <a href="https://eggshell_d.artstation.com" target="_blank">
                    <span class="project-card">
                        <i class="icon"></i>
                        Digital Art Portfolio
                    </span>
                </a>
                <a href="/3dgallery/" target="_blank">
                    <span class="project-card">
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
