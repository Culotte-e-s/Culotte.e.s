const svgs = document.querySelectorAll('.bg-svg');

  svgs.forEach((svg) => {
    // Random position
    moveSVG(svg);

    // Random animation duration and delay
    const duration = 8 + Math.random() * 20; // 8–18s
    const delay = Math.random() * 10;         // 0–5s

    svg.style.animationDuration = `${duration}s`;
    svg.style.animationDelay = `${delay}s`;

    // Move it again every time animation completes
    svg.addEventListener('animationiteration', () => {
      moveSVG(svg);
    });
  });

  function moveSVG(svg) {
    const randX = Math.random() * 80; // in vw
    const randY = Math.random() * 80; // in vh
    svg.style.left = `${randX}vw`;
    svg.style.top = `${randY}vh`;
  }
