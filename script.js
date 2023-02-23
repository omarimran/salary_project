const input = document.getElementById("salary_input");
const error_div = document.getElementById("error");
const calc_button = document.getElementById("calc_button");
const result_div = document.getElementById("result_div");
const formatter = new Intl.NumberFormat("en-US", {
 style: "decimal",
 minimumFractionDigits: 2,
 maximumFractionDigits: 2,
});
input.addEventListener("change", function (event) {
 if (!isNaN(input.value)) {
  const formattedValue = formatter.format(input.value);
  input.dataset.value = input.value;
  input.value = formattedValue;
  error_div.style.display = "none";
 }
 else {
  input.value = "";
  input.dataset.value = "";
 }
});
window.addEventListener("load", function () {
 input.focus();
});
calc_button.addEventListener("click", function () {
 result_div.style.opacity = 0;
 error_div.style.display = "none";
 if (!input.dataset.value || isNaN(input.dataset.value)) {
  error_div.innerHTML = "ادخل الراتب التقاعدي";
  error_div.style.display = "block";
  return;
 }
 const salary = input.dataset.value;
 const result = calculateY(salary);
 result_div.innerHTML = formatter.format(result);
 result_div.style.opacity = 1;
});
function calculateY(x) {
 x = x / 100000;
 x = x - 5;
 x = x / 5;
 x = x * 3;
 x = x + 7;
 x = x * 100000;
 return x;
}