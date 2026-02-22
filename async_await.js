const myPromise = new Promise((resolve) => {
    resolve("Async/await worked!");
});

async function myFunction() {
    try {
        const result = await myPromise;
        console.log("Result:", result);
    } catch (error) {
        console.log("error:", error);
    }
}

myFunction();
