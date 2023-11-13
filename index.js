
export async function run() {
    console.log("Hello, World!")

    const myWorker = new Worker("worker.js");

    console.log("Sending WebTransport object to worker");
    let w = new WebTransport("https://echo.webtransport.day")
    await w.ready;
    myWorker.postMessage(w);
}
