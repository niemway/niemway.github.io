---
layout: base.njk
title: bieg2D
month: July
month_id: 7
year: 2024
tech: ["Lua", "C++", "Game Engine"]
image: "/images/cover_bieg2D.gif"
link: "/projects/bieg2d/"
include_header: true
---

<div
    class="p-4 content font-futura dark:bg-mauve-800"
>
    <!-- title image -->
    <img
        class="block dark:hidden w-md mx-auto"
        src="/images/bieg_logo_dark.png"
        alt="bieg2D Logo"
    />
    <img
        class="hidden dark:block w-md mx-auto"
        src="/images/bieg_logo_light.png"
        alt="bieg2D Logo"
    />
    <iframe
        class="w-1/2 aspect-video mx-auto my-10"
        src="https://www.youtube.com/embed/x2kTdPCbUUc"
        title="bieg2D Animator demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
    <p class="text-2xl p-4">
        bieg2D is a simple C++ powered engine, designed for ease of use.
        It's free, open-source, and works on Windows, macOS, and Linux!
    </p>
    <p class="text-2xl p-4">
        The engine is licensed under the zlib/libpng license, which
        means it's free to use for personal and commercial purposes. No
        limitations!
    </p>
    <!--<h1>games made with bieg2D</h1>
    <div
        class="project_row_container"
        style="font-family: Futura Regular"
    >
        <div class="project_thumbnail">
		<a href="project_pages/spirovr_project_page.html">
			<img src="../images/cover_spirovr.gif" alt="SpiroVR">
			<span class="project_name">SpiroVR</span>
		</a>
	</div>
    </div>-->
    <div class="*:border-2 *:rounded-full flex flex-col md:flex-row justify-between p-10 *:px-3 *:hover:bg-white *:hover:text-gray-700 text-3xl mb-20">
        <a href="https://github.com/niemway/bieg2D">
            <div class="project_name flex">
                <svg
                    class="w-7.5 h-7.5 me-1 pt-1.5"
                    aria-hidden="true"
                    xmlns="http://w3.org"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                >
                    <path
                        fill-rule="evenodd"
                        d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"
                        clip-rule="evenodd"
                    />
                </svg>
                <p class="flex-none">
                Contribute!
                </p>
            </div>
        </a>
        <a href="" target="_blank">
            <div class="project_name flex">
                <p class="flex-none">
                Engine Documentation (not finished)
                </p>
            </div>
        </a>
    </div>
</div>
