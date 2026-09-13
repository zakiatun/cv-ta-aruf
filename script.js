function switchTab(tabId) {
  const sections = document.querySelectorAll(".section-block");
  const buttons = document.querySelectorAll(".tab-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("bg-white", "text-emerald-900", "shadow-xs");
    btn.classList.add("text-slate-600", "hover:text-slate-900");
  });

  const activeBtn = document.getElementById(`btn-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove("text-slate-600", "hover:text-slate-900");
    activeBtn.classList.add("bg-white", "text-emerald-900", "shadow-xs");
  }

  sections.forEach((sec) => {
    if (tabId === "all") {
      sec.style.display = "block";
    } else if (tabId === "biodata" && sec.id === "sec-biodata") {
      sec.style.display = "block";
    } else if (tabId === "karakter" && sec.id === "sec-karakter") {
      sec.style.display = "block";
    } else if (tabId === "visi" && sec.id === "sec-visi") {
      sec.style.display = "block";
    } else {
      sec.style.display = "none";
    }
  });
}
