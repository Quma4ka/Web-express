const button_1 = document.getElementById("button-to-section_1");
const button_2 = document.getElementById("button-to-section_2");
const button_3 = document.getElementById("button-to-section_3");
const link = document.getElementById("link-to-section");

const priceSection = document.querySelector(".price_sec");

button_1.addEventListener("click", () => {
  const sectionHeight = priceSection.offsetHeight;
  const targetPosition = priceSection.offsetTop - sectionHeight / 1000;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

button_2.addEventListener("click", () => {
  const sectionHeight = priceSection.offsetHeight;
  const targetPosition = priceSection.offsetTop - sectionHeight / 1000;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

button_3.addEventListener("click", () => {
  const sectionHeight = priceSection.offsetHeight;
  const targetPosition = priceSection.offsetTop - sectionHeight / 1000;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

link.addEventListener("click", (event) => {
  event.preventDefault();
  priceSection.scrollIntoView({
    behavior: "smooth",
  });
});
