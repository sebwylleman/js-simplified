// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const form = document.querySelector("#form")
const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")
const passwordConfInput = document.querySelector("#password-confirmation")
const termsInput = document.querySelector("#terms")
const errorsList = document.querySelector(".errors-list")
const errors = document.querySelector(".errors")
// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", (e) => {
  //    TODO: Create an array to store all error messages and clear any old error messages
  const errorMessages = []
  clearErrors()

  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long
  // 2. Ensure the password is at least 10 characters long
  // //      3. Ensure the password and confirmation password match
  // //      4. Ensure the terms checkbox is checked
  const correctUsername = usernameInput.value.length >= 6
  const correctPassword = passwordInput.value.length >= 10
  const matchingPasswords =
    passwordInput.value.length === passwordConfInput.value.length

  if (!correctUsername) {
    errorMessages.push("Username must be at least 6 characters long.")
  }
  if (!correctPassword) {
    errorMessages.push("Password must be at least 10 characters long.")
  }

  if (!matchingPasswords) {
    errorMessages.push("Password don't match. Try again")
  }

  if (!termsInput.checked) {
    errorMessages.push("You must agree to the terms to submit the form.")
  }

  //
  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorMessages.length > 0) {
    e.preventDefault()
    showErrors(errorMessages)
  }
})
// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  while (errorsList.firstChild != null) {
    errorsList.removeChild(errorsList.firstChild)
  }
  errors.classList.remove("show")
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
  errorMessages.forEach((error) => {
    const li = document.createElement("li")
    li.innerText = error
    errorsList.appendChild(li)
  })

  errors.classList.add("show")
}
