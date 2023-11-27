document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let fullName = document.getElementById("fullName");
    if (fullName.value.length < 6) {
      showError(fullName, "Full Name must be more than 5 characters long.");
      return;
    } else {
      clearError(fullName);
    }

    let emailAddress = document.getElementById("emailAddress");
    if (!validateEmail(emailAddress.value)) {
      showError(emailAddress, "Must be a valid email address.");
      return;
    } else {
      clearError(emailAddress);
    }

    let subject = document.getElementById("subject");
    if (subject.value.length < 16) {
      showError(subject, "Subject must be more than 15 characters long.");
      return;
    } else {
      clearError(subject);
    }

    let messageContent = document.getElementById("messageContent");
    if (messageContent.value.length < 26) {
      showError(
        messageContent,
        "Message content must be more than 25 characters long."
      );
      return;
    } else {
      clearError(messageContent);
    }

    alert("Form is valid and ready to be submitted!");
  });

function showError(inputElement, message) {
  let parent = inputElement.parentElement;
  let errorMessage = parent.querySelector(".error-message");
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function clearError(inputElement) {
  let parent = inputElement.parentElement;
  let errorMessage = parent.querySelector(".error-message");
  errorMessage.style.display = "none";
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
