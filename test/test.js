const items = [
  { price: 10 },
  { price: 100 },
  { price: 3 },
  { price: 12 },
  { price: 3 },
]

const sum = items.reduce((acc, prix) => {
  return acc + prix.price
}, 0)

console.log(sum)
