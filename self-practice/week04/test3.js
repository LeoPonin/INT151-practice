const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]

const ids = students.filter(students =>students.id %2 == 0).map(students => students.id)
console.log(ids)