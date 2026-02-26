export const initAosObservers = () => {
  const scroller = document.querySelector("[data-aos-scroll-container]");
  const targets = Array.from(document.querySelectorAll("[data-aos]"));
  if (!targets.length) return;

  for (const target of targets) {
    target.classList.add("aos-init");
    target.classList.remove("aos-animate");
  }

  const observeTargets = (list, root) => {
    if (!list.length) return;
    const visibleState = new WeakMap();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target;
          const wasVisible = visibleState.get(target) === true;
          const ratio = entry.intersectionRatio;
          const shouldShow = ratio >= 0.28;
          const shouldHide = ratio <= 0.08;

          if (!wasVisible && shouldShow) {
            visibleState.set(target, true);
            requestAnimationFrame(() => {
              target.classList.add("aos-animate");
            });
          } else if (wasVisible && shouldHide) {
            visibleState.set(target, false);
            target.classList.remove("aos-animate");
          }
        }
      },
      {
        root,
        rootMargin: "0px",
        threshold: [0, 0.08, 0.28, 1],
      },
    );

    for (const target of list) {
      observer.observe(target);
    }
  };

  if (scroller instanceof Element) {
    const insideScroller = targets.filter((target) => scroller.contains(target));
    const outsideScroller = targets.filter((target) => !scroller.contains(target));
    observeTargets(insideScroller, scroller);
    observeTargets(outsideScroller, null);
    return;
  }

  observeTargets(targets, null);
};
