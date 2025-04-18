  document.addEventListener("DOMContentLoaded", function () {
    const toggleLinks = document.querySelectorAll(".toggle-link");
    const logoText = document.getElementById("culotte-logo"); // Target the logo by ID
    const hiddenDivs = document.querySelectorAll(".toggle-box"); // All hidden divs
    const svg = document.getElementById("svg"); // Target the logo by ID


    toggleLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSelector = link.getAttribute("data-target");
            const target = document.querySelector(targetSelector);

            if (target) {
                target.classList.toggle("show");
                // svg.style.display = 'none';
                if (target.classList.contains("show")) {
                  svg.style.display = 'none'; // Hide the SVG when content is shown
              } else {
                  svg.style.display = 'block'; // Show the SVG when content is hidden
              }
            }


        });
    });

    // When the logo text is clicked, hide all the divs with the 'toggle-box' class
    logoText.addEventListener("click", function() {
        hiddenDivs.forEach(div => {
            div.classList.remove("show"); // Remove the 'show' class to hide the div
        });
        svg.style.display = 'block';
    });
});

