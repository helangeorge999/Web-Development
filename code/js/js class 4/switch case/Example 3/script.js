const grade = prompt("Please Enter your Grade")

switch (grade){
    case "A":
        console.log("Excellent");
    case "B":
        console.log("Good Job");
    case "C":
        console.log("Passed");
        break;
    default:
        console.log("Try Again")
}