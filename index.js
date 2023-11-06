const names = [
    "Ahsoka",
    "Ezra",
    "Boba",
    "Mando",
    "K-2S0",
    "C-3P0",
    "R2-D2",
    "Hera",
];
const occupations = ["jedi", "bounty-hunter", "droid", "pilot"];

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
];

const averagePriceSpan = document.querySelector("span");
const freelancersTbody = document.querySelector("tbody");

function getAverageStartingPrice() {
    return (
        freelancers.reduce((total, freelancer) => freelancer.price + total, 0) /
        freelancers.length
    ).toFixed(2);
}

function render() {
    // render the freelancers
    const freelancerRows = freelancers.map((freelancer) => {
        const freelancerRow = document.createElement("tr");
        freelancerRow.innerHTML = `
        <td>${freelancer.name}</td>
        <td>${freelancer.occupation}</td>
        <td>$${freelancer.price}</td>
      `;

        return freelancerRow;
    });
    freelancersTbody.replaceChildren(...freelancerRows);

    // update the average price
    averagePriceSpan.textContent = getAverageStartingPrice();
}

render();

function addFreelancer() {
    if (freelancers.length < 3) {
        freelancers.push({
            name: "Carol",
            occupation: "programmer",
            price: 70,
        });

        return;
    }
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation =
        occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 75) + 25;
    freelancers.push({ name, occupation, price });
}

setInterval(() => {
    addFreelancer();
    render();
}, 3000);