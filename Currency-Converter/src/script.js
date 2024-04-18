const url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
// let flag = document.querySelector("#flagto");
let fromcountry = document.querySelector(".from select");
let tocountry = document.querySelector(".to select");
for (let select of dropdowns) {
  for (codes in countryList) {
    let newoptions = document.createElement("option");
    newoptions.innerHTML = codes;
    // newoptions.value = codes;
    if (select.name === "from" && codes === "USD") {
      newoptions.selected = "selected";
    }

    if (select.name === "to" && codes === "INR") {
      newoptions.selected = "selected";
    }
    select.append(newoptions);
  }
  select.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}
const updateflag = (element) => {
  let countrycoder = element.value;
  let finalflag = countryList[countrycoder];
  let newsrc = `https://flagsapi.com/${finalflag}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};
let btn = document.querySelector(".btn");
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let value = document.querySelector("#vale");
  console.log(value.value);
  if (value.value === "0" || value.value < 0) {
    value.value = 1;
  }
  finalURL = `${url}/${fromcountry.value}/${tocountry.value}.json`;
  let exp = finalURL.toLowerCase();
  // let exp2 = exp.fetch(exp);
  console.log(exp);
  let responce = await fetch(exp);
  let rate = await responce.json();
  let finalvalue = value.value;
  let finalrate = rate[tocountry.value.toLowerCase()];
  console.log(finalrate);
  let msg = document.querySelector(".msg");
  let finalresult = finalrate*value.value;
  msg.innerText = `${finalvalue} ${fromcountry.value} IS EQUAL TO ${finalresult} ${tocountry.value}. `;
});
