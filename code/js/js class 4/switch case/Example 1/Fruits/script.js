const fruit = prompt("Enter a name of Fruit")

switch(fruit){
    case "apple":
    case "banana":
    case "orange":
    case "Banana":
    case "Orange":
    case "Apple":
        console.log("fruit available")
        break;
    
    default:
    console.log("fruit Not available")
}