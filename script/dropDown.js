document.addEventListener("DOMContentLoaded", function () {
    const toggleLinks = document.querySelectorAll(".toggle-link");
    const logoText = document.getElementById("culotte-logo");
    const hiddenDivs = document.querySelectorAll(".toggle-box");
    const svg = document.getElementById("svg");


    toggleLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSelector = link.getAttribute("data-target");
            const target = document.querySelector(targetSelector);

            if (target) {
                target.classList.toggle("show");
                if (target.classList.contains("show")) {
                  svg.style.display = 'none';
                  if (link.textContent === 'Read More...') {
                    link.textContent = 'Read Less...';
                }
                } else {
                  svg.style.display = 'block';
                  if (link.textContent === 'Read Less...') {
                    link.textContent = 'Read More...';
                }
              }
            }
        });
    });


    logoText.addEventListener("click", function() {
        hiddenDivs.forEach(div => {
            div.classList.remove("show");
        });
        svg.style.display = 'block';
    });
});
