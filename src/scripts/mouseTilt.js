export const initMouseTilt = () => {
  if (!window.matchMedia("(hover: hover)").matches) return;

  document.addEventListener(
    "pointermove",
    (event) => {
      const target = event.target instanceof Element ? event.target.closest("[data-mouse-tilt]") : null;
      if (!(target instanceof HTMLElement)) return;

      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const intensity = Number(target.dataset.tiltIntensity || "10");
      const rotateY = ((x - centerX) / centerX) * intensity;
      const rotateX = ((centerY - y) / centerY) * intensity;

      target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    { passive: true },
  );

  document.addEventListener("pointerout", (event) => {
    const target = event.target instanceof Element ? event.target.closest("[data-mouse-tilt]") : null;
    if (!(target instanceof HTMLElement)) return;
    const related = event.relatedTarget;
    if (related instanceof Node && target.contains(related)) return;
    target.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
};
