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
  console.log(currentPerson.name)
  if (currentPerson.friend == null) return
  printNames(currentPerson.friend)
}

printNames(person)
