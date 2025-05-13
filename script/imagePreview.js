const previewBox = document.getElementById("previewBox");
  const previewImage = document.getElementById("previewImage");
  const images = document.querySelectorAll(".publication_container_images img");

  function showPreview(img) {
    previewImage.src = img.src;
    previewBox.style.display = "block";
  }

  function hidePreview() {
    previewBox.style.display = "none";
    previewImage.src = "";
  }

  const isMobile = () => window.innerWidth <= 768;

  images.forEach(img => {
    if (!isMobile()) {
      // Desktop: hover behavior
      img.addEventListener("mouseenter", () => showPreview(img));
      img.addEventListener("mouseleave", () => hidePreview());
    } else {
      // Mobile: tap behavior
      img.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent document click from closing it
        showPreview(img);
      });
    }
  });

  // Mobile: hide preview when clicking outside
  if (isMobile()) {
    document.addEventListener("click", (e) => {
      if (!previewBox.contains(e.target)) {
        hidePreview();
      }
    });

    previewBox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }