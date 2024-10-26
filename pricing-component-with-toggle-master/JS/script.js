const pricingBtn = document.getElementById("pricing-btn");
const btnIndicator = document.getElementById("btn-indicator");
const prices = document.querySelectorAll(".number");
let monthly = true;

pricingBtn.addEventListener("click", () => {
  btnIndicator.style.transform =
    monthly === true ? "translateX(0px)" : "translateX(30px)";
  prices[0].textContent = monthly === true ? "199.99" : "19.99";
  prices[1].textContent = monthly === true ? "249.99" : "24.99";
  prices[2].textContent = monthly === true ? "399.99" : "39.99";
  monthly = !monthly;
});
