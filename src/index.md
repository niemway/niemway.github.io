---
layout: base.njk
title: Home
---
<div class="body" id="body">
    <div class="main_header">
        <h1>Nicholas Way</h1>
    </div>
    <div class="flex_body" id="model"></div>
    <div class="content_body">
        <div class="index_row_container">
            <div class="project_row">
                <a href="/about/"><div class="project_name">About</div></a>
            </div>
            <div class="project_row">
                <a href="/portfolio/"><div class="project_name">Portfolio</div></a>
            </div>
            <!--<div class="project_row">
                <a href="/blog/"><div class="project_name">Blog</div></a>
            </div>-->
            <div class="project_row">
                <a href="/static/nicholasway_resume.pdf"><div class="project_name">Resume</div></a>
            </div>
            <div class="project_row">
                <a href="/contact/"><div class="project_name">Contact</div></a>
            </div>
        </div>
    </div>
</div>

{% block scripts %}
    <script type="module" src="/js/main.js"></script>
{% endblock %}
