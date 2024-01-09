let btn = document.getElementById("btn");
let birthdate = document.getElementById("birthday");
let para = document.getElementById("para");

function calculateAge() {
  let currDate = new Date();
  let birtDate = new Date(birthdate.value);
  let ans = currDate.getFullYear() - birtDate.getFullYear();
  para.innerText = `Your age is ${ans} years old`;
}
btn.addEventListener("click", calculateAge);
