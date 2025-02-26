//your JS code here. If required.

let promiseTimes = []; // Store time taken for each promise

let prom = Promise.all([
    new Promise((resolve) => {
        let start = performance.now();
        setTimeout(() => {
            let end = performance.now();
            promiseTimes.push({ name: "Promise 1", time: ((end - start) / 1000).toFixed(2) });
            resolve();
        }, 2000);
    }),
    new Promise((resolve) => {
        let start = performance.now();
        setTimeout(() => {
            let end = performance.now();
            promiseTimes.push({ name: "Promise 2", time: ((end - start) / 1000).toFixed(2) });
            resolve();
        }, 1000);
    }),
    new Promise((resolve) => {
        let start = performance.now();
        setTimeout(() => {
            let end = performance.now();
            promiseTimes.push({ name: "Promise 3", time: ((end - start) / 1000).toFixed(2) });
            resolve();
        }, 2500);
    })
]);

let defaultRow = document.getElementById("loading");
let tableBody = document.getElementsByTagName("tbody")[0];

prom.then(() => {
    defaultRow.remove();
    let sum = 0;
    for (let i = 0; i < promiseTimes.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = promiseTimes[i].name;
        let td2 = document.createElement("td");

        sum += parseFloat(`${promiseTimes[i].time}.toFixed(2)`);

        td2.textContent = Math.round(`${promiseTimes[i].time}`); // Display time taken
        tr.append(td1, td2);
        tableBody.appendChild(tr);
    }

    console.log(sum)

    let finalRow = document.createElement("tr");
    let finalCol1 = document.createElement("td");
    finalCol1.textContent= "Total";
    finalCol1.style.fontWeight = "bold"
    let finalCol2 = document.createElement("td");
    finalCol2.textContent = sum.toFixed(2);
    finalRow.append(finalCol1,finalCol2);
    tableBody.appendChild(finalRow);
});

console.log(promiseTimes);