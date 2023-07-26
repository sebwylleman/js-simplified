const link = document.querySelector("#link")
link.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("Prevented redirection")
})
