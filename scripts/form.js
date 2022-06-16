// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
    console.log(input)
    const result = String(input).toLowerCase();
    console.log(result === input.value.trim())
	// if (input.value.trim() !== result) {
	// 	return showError(input, message);
	// }
	// return showSuccess(input);
}

function validateEmail(input, requiredMsg) {

	if (hasValue(input, requiredMsg)) {
		return false;
	}
	return true;
}

const form = document.querySelector("#signup");

const EMAIL_BE_LOWERCASE = "Email should be lowercase";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let emailValid = validateEmail(form.elements["email"], EMAIL_BE_LOWERCASE,);
	// if valid, submit the form.
	if (emailValid) {
		alert("Demo only. No form was posted.");
	}
});

