// 1. For the given JSON iterate over all for loops(for, for in, for of, forEach)

let json_struct = [
    { "id": "10", "class": "child-of-9" },
    { "id": "11", "class": "child-of-10" }
]


//for

// for (var i = 0; i < json_struct.length; i++) {
//     console.log(json_struct[i].id)
//     console.log(json_struct[i].class)
// }


// for of
// for (var i of json_struct) {
//     console.log(i.id)
//     console.log(i.class)
// }

// for in
// for (var i in json_struct) {
//     console.log(json_struct[i].id)
//     console.log(json_struct[i].class)
// }

// forEach
json_struct.forEach(function (value) {
    console.log(value.id)
    console.log(value.class)
})




