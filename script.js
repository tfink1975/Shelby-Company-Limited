const h1 = document.createElement("h1");
h1.textContent = "Shelby Company Limited";
document.querySelector("body").appendChild(h1);
const h2 = document.createElement("h2");
h2.textContent = "Established in Birmingham, England in 1918";
document.querySelector("body").appendChild(h2);

function myFunction() {
    let x = document.getElementById("myTopmenu");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}