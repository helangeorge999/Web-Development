let username = prompt("Enter a username ")
let password = prompt("Enter a password")

// let username = "admin"
// let password = "password"

if(username === "admin"){
    if(password === "password"){
        console.log("welcome to admin dashboard")
    }
    else{
        console.log("incorrect password")
    }

}
else(
    console.log("incorrecr username")
)