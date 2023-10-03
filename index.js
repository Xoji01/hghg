
let students = [
    {
        name: "baxtzod",
        age: 15,
        isMarried: false,
        hair_color: "blue"
    },
    {
        name: "islom",
        age: 15,
        isMarried: true,
        hair_color: "red"
    },
    {
        name: "safir",
        age: 15,
        isMarried: false,
        hair_color: "lisiy"
    },
    {
        name: "abdumanon",
        age: 13,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "xojimurod",
        age: 16,
        isMarried: true,
        hair_color: "pink"
    },
    {
        name: "aziza soliyeva",
        age: 15,
        isMarried: true,
        hair_color: "green"
    },
    {
        name: "aziza",
        age: 15,
        isMarried: false,
        hair_color: "skyblue"
    },
    {
        name: "ismoil",
        age: 12,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "artyom",
        age: 14,
        isMarried: false,
        hair_color: "purple"
    },
    {
        name: "abdukhafiz",
        age: 17,
        isMarried: false,
        hair_color: "white"
    },
    {
        name: "bobur",
        age: 18,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "shoxa",
        age: 17,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "alSafir",
        age: 15,
        isMarried: true,
        hair_color: "orange"
    },
]

let married = students.filter(names => names.isMarried === true);
let nomarried = students.filter(names => names.isMarried === false);

console.log("Женатые", married.map(names => names.name));
console.log("Неженатые", nomarried.map(names => names.name));
let max = students.sort( (a,b) => b.age - a.age ).filter(el => el.age === students[0].age);
console.log('самый старший',max);
let min = students.sort( (a,b) => a.age - b.age ).filter(el => el.age === students[0].age);
console.log('самый младший',min);