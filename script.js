const input = document.getElementById("salary_input");
const error_div = document.getElementById("error");
const calc_button = document.getElementById("calc_button");
const result_div = document.getElementById("result_div");
const formatter = new Intl.NumberFormat("en-US", {
 style: "decimal",
 minimumFractionDigits: 2,
 maximumFractionDigits: 2,
});
window.addEventListener("load", function () {
 input.focus();
});
calc_button.addEventListener("click", function () {
 result_div.style.opacity = 0;
 error_div.style.display = "none";
 if (!input.value || input.value == 0) {
  input.value = "";
  error_div.innerHTML = "ادخل الراتب التقاعدي";
  error_div.style.display = "block";
  return;
 }
 const salary = input.value;
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
 console.log(x);
 return x;
}