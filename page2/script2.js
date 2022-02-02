// Variables Function Name and Email
const nameWrapper = document.getElementById("name-wrapper");
const nameError = document.getElementById("error-name");

const emailWrapper = document.getElementById("email-wrapper");
const emailError = document.getElementById("error-email");

// Variables Function Date and Time
const dateWrapper = document.getElementById("date-wrapper");
const dateError = document.getElementById("error-date");

const timeWrapper = document.getElementById("time-wrapper");
const timeError = document.getElementById("error-time");

// Validation Function Name and Email
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let year = document.getElementById("year").value;
  let hour = document.getElementById("hour").value;
  let minute = document.getElementById("minute").value;

  let valid = true;

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

  return valid;
}
