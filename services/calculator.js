
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("CalcForm");
  const result = document.getElementById("priceResult");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const siteType = document.getElementById("siteType").value;
    const pages = parseInt(document.getElementById("pages").value);
    const customDesign = document.getElementById("customDesign").value === "yes";

    let basePrice = 0;

    switch (siteType) {
      case "business":
        basePrice = 1000;
        break;
      case "store":
        basePrice = 2000;
        break;
      case "blog":
        basePrice = 1500;
        break;
    }

    const extraPages = pages > 1 ? (pages - 1) * 200 : 0;
    const designFee = customDesign ? 1000 : 0;
    const total = basePrice + extraPages + designFee;

    result.textContent = `Estimated Price: ₪${total.toLocaleString()}`;
  });
});
