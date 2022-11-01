// Variables Function Name and Email
const nameWrapper = document.getElementById("name-wrapper");
const nameError = document.getElementById("error-name");

const emailWrapper = document.getElementById("email-wrapper");
const emailError = document.getElementById("error-email");

// Variables Function Date and Time
const dateWrapper = document.getElementById("date-wrapper");
const dateError = document.getElementById("error-date");
const datePastError = document.getElementById("error-past-date");

const timeWrapper = document.getElementById("time-wrapper");
const timeError = document.getElementById("error-time");

let futureDate = true;

function checkFutureDate() {
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;

  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth() + 1;

  if ((month < currentMonth) & (day < currentDay)) {
    dateWrapper.classList.add("change");
    datePastError.classList.remove("hidden");
    dateError.classList.add("hidden");
    futureDate = false;
  }

  if (month == "" || day == "" || year == "") {
    datePastError.classList.add("hidden");
    dateError.classList.remove("hidden");
  }
  console.log(futureDate);
}

// Validation Function Name and Email
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  let hour = document.getElementById("hour").value;
  let minute = document.getElementById("minute").value;

  if (name == "") {
    nameWrapper.classList.add("change");
    nameError.classList.remove("hidden");
    valid = false;
  }

  if (email == "") {
    emailWrapper.classList.add("change-email");
    emailError.classList.remove("hidden");
    valid = false;
  }

  if (month == "" || day == "" || year == "") {
    dateWrapper.classList.add("change");
    dateError.classList.remove("hidden");
    valid = false;
  }

  if (hour == "" || minute == "") {
    timeWrapper.classList.add("change");
    timeError.classList.remove("hidden");
    valid = false;
  }
  checkFutureDate();

  if (!futureDate) {
    valid = false;
  }
  return valid;
}

// Min and Max Year to choose
const year = document.getElementById("year");

const today = new Date().getFullYear();
const future = new Date().getFullYear() + 1;

year.setAttribute("min", today);
year.setAttribute("max", future);

// Validate Future date

// Increase and Decrease people reservation
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const numPeople = document.getElementById("num-people");
const errorPeople = document.getElementById("error-num-people");

function totalClick(click) {
  const sumvalue = parseInt(numPeople.innerText) + click;
  numPeople.innerText = sumvalue;

  // avoid negatives
  if (sumvalue < 0) {
    numPeople.innerText = 0;
    errorPeople.classList.add("hidden");
  }
  if (sumvalue > 30) {
    numPeople.innerText = 30;
    errorPeople.classList.remove("hidden");
  }
  if (sumvalue < 30) {
    errorPeople.classList.add("hidden");
  }
}
