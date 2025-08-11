// Declares and initialises variables each with their proposes
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

// Displays some of the information declared by variables above
console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}`);

// Explains the difference between "==" and "===" operators
const ageString = "25"
const ageNumber = 25

console.log("Comparison with == operator: ");
console.log(ageString == ageNumber);
console.log("Comparison with === operator: ");
console.log(ageString === ageNumber);

// Uses if-else statements to display in which range the score is
const score = 84
let grade = null

if (score >= 90 && score <= 100) {
    console.log("A. 90 - 100");
    grade = "A"
} else if (score >= 80 && score < 90) {
    console.log("B. 80 - 89");
    grade = "B"
} else if (score >= 70 && score < 80) {
    console.log("C. 70 - 79");
    grade = "C"
} else if (score >= 60 && score < 70) {
    console.log("D. 60 - 69");
    grade = "D"
} else {
    console.log("F. Below 6");
    grade = "F"
}

// Uses switch-case statements to comment the grade
switch (grade) {
    case "A":
        console.log("Excellent work!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Keep improving.");
        break;
    case "D":
        console.log("Try harder.");
        break;
    default:
        console.log("Needs serious effort.");
}

// Uses the ternary operator to inform whether the user passed or not
score >= 70 ? console.log("You passed.") : console.log("You failed.")
