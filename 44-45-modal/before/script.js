/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay
*/

const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")
const openModalbtn = document.querySelector("#open-modal-btn")
const closeModalbtn = document.querySelector("#close-modal-btn")

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

openModalbtn.addEventListener("click", () => {
  modal.classList.add("open")
  overlay.classList.add("open")
})

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

closeModalbtn.addEventListener("click", closeModal)

// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

overlay.addEventListener("click", closeModal)

function closeModal() {
  modal.classList.remove("open")
  overlay.classList.remove("open")
}
