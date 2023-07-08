const person = {
  name: "Kyle",
  friend: {
    name: "Joe",
    friend: {
      name: "Sally",
    },
  },
}

function printNames(currentPerson) {
  if (currentPerson == null) return
  console.log(currentPerson.name)
  printNames(currentPerson.friend)
}

printNames(person)
