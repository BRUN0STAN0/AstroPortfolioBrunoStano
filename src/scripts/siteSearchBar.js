const looksLikeUrl = (value) => {
  if (!value) return false;
  return /^(https?:\/\/|www\.|\/|#|\.\.?\/)/i.test(value);
};

const normalizeText = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const scrollToElement = (element, scroller) => {
  if (!(element instanceof HTMLElement)) return;

  if (scroller instanceof HTMLElement) {
    const top =
      element.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top +
      scroller.scrollTop -
      20;
    scroller.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

const navigateToHash = (hash, scroller) => {
  const target = document.querySelector(hash);
  if (!(target instanceof HTMLElement)) return false;
  scrollToElement(target, scroller);
  history.replaceState(null, "", hash);
  return true;
};

const clearHighlights = () => {
  const highlights = Array.from(document.querySelectorAll("mark[data-site-search-highlight='true']"));
  for (const highlight of highlights) {
    const parent = highlight.parentNode;
    if (!parent) continue;
    parent.replaceChild(document.createTextNode(highlight.textContent || ""), highlight);
    if (parent instanceof HTMLElement) {
      parent.normalize();
    }
  }
};

const highlightFirstMatch = (root, rawQuery) => {
  if (!(root instanceof Element) || !rawQuery.trim()) return null;
  const queryLower = rawQuery.toLowerCase();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest("script, style, noscript, mark[data-site-search-highlight='true']")) {
        return NodeFilter.FILTER_REJECT;
      }
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let node = walker.nextNode();
  while (node) {
    const text = node.nodeValue || "";
    const index = text.toLowerCase().indexOf(queryLower);
    if (index >= 0) {
      const before = text.slice(0, index);
      const found = text.slice(index, index + rawQuery.length);
      const after = text.slice(index + rawQuery.length);
      const fragment = document.createDocumentFragment();
      if (before) fragment.appendChild(document.createTextNode(before));

      const mark = document.createElement("mark");
      mark.setAttribute("data-site-search-highlight", "true");
      mark.style.background = "rgba(250, 204, 21, 0.55)";
      mark.style.padding = "0 0.14em";
      mark.style.borderRadius = "0.22em";
      mark.textContent = found;
      fragment.appendChild(mark);

      if (after) fragment.appendChild(document.createTextNode(after));
      node.parentNode.replaceChild(fragment, node);
      return mark;
    }
    node = walker.nextNode();
  }

  return null;
};

export const initSiteSearchBar = () => {
  const form = document.querySelector("[data-site-search-form]");
  const input = document.querySelector("[data-site-search-input]");
  if (!(form instanceof HTMLFormElement) || !(input instanceof HTMLInputElement)) return;

  const scroller = document.querySelector("[data-aos-scroll-container]");
  let currentUrlValue = "";
  const updateInputWithCurrentUrl = () => {
    currentUrlValue = window.location.href;
    if (document.activeElement !== input || !input.value.trim()) {
      input.value = currentUrlValue;
    }
  };

  updateInputWithCurrentUrl();
  window.addEventListener("hashchange", updateInputWithCurrentUrl);
  window.addEventListener("popstate", updateInputWithCurrentUrl);

  input.addEventListener("focus", () => {
    if (input.value.trim() === currentUrlValue) {
      input.value = "";
    }
  });

  input.addEventListener("blur", () => {
    if (!input.value.trim()) {
      input.value = currentUrlValue;
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const rawValue = input.value.trim();
    if (!rawValue) return;

    if (looksLikeUrl(rawValue)) {
      try {
        const targetUrl = new URL(rawValue, window.location.origin);
        if (targetUrl.origin !== window.location.origin) {
          window.location.href = targetUrl.href;
          return;
        }

        const samePath = targetUrl.pathname === window.location.pathname;
        if (samePath && targetUrl.hash) {
          if (navigateToHash(targetUrl.hash, scroller)) {
            updateInputWithCurrentUrl();
            return;
          }
        }

        window.location.href = targetUrl.href;
        return;
      } catch {
        // Fallback to content search below.
      }
    }

    clearHighlights();
    const query = normalizeText(rawValue);
    if (!query) return;

    const searchableSections = Array.from(document.querySelectorAll("main section[id]"));
    const match = searchableSections.find((section) => {
      const text = normalizeText(section.textContent || "");
      return text.includes(query);
    });

    if (match) {
      const highlight = highlightFirstMatch(match, rawValue);
      if (highlight) {
        scrollToElement(highlight, scroller);
      } else {
        scrollToElement(match, scroller);
      }
      if (match.id) {
        history.replaceState(null, "", `#${match.id}`);
        updateInputWithCurrentUrl();
      }
      return;
    }

    const navMatch = Array.from(document.querySelectorAll("nav a[href^='#']")).find((link) => {
      const label = normalizeText(link.textContent || "");
      return label.includes(query);
    });

    if (navMatch instanceof HTMLAnchorElement && navMatch.hash) {
      if (navigateToHash(navMatch.hash, scroller)) {
        updateInputWithCurrentUrl();
      }
    }
  });
};
