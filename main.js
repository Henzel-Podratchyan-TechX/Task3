//Part 1
const firstName = "Henzel";
const lastName = "Podratchyan";
const birthYear = 2003;
let currentYear = 2025;
let isStudent = true;
const hobbies = ["Watching movies", "Playing games", "Collecting cards", "Experimenting"]
const contact = {
    email: "example@mail.com",
    phone: "+37498765432",
    city: "Yerevan"
}

//Part 2
console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}`);

//Part 3
const ageString = "25"
const ageNumber = 25

console.log("Comparison with == operator: ");
console.log(ageString == ageNumber);
console.log("Comparison with === operator: ");
console.log(ageString === ageNumber);
