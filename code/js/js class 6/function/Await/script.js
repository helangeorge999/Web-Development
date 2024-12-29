async function greet() {
    const message = await Promise.resolve("Hello There")
    console.log(message)

}
 greet()