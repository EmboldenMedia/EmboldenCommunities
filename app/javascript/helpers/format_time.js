document.addEventListener("DOMContentLoaded", () => {
  const datesToFormat = document.querySelectorAll("[format-date]");

  if (datesToFormat.length) {
    datesToFormat.forEach((dateEl) => {
      dateEl.innerText = new Date(dateEl.innerText).toLocaleString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    });
  }
});
