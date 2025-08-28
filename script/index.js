

function getElement(id) {
  return document.getElementById(id);
}

// heart count
getElement("card-box").addEventListener("click", function(e) {
  if (e.target.className.includes("heart-btn")) {
    heartCount++;
    heartCountEl.innerText = heartCount;
  }
});

const cardBox = document.getElementById("card-box");
const heartCountEl = getElement("heart-count");
const coinCountEl = document.getElementById("coin-count");
const copyCountEl = document.getElementById("copy-count");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

let coins = 100;
let copyCount = 0;
let heartCount = 0;

// Copy + Call button
cardBox.addEventListener("click", function(e) {
    const card = e.target.closest("div.bg-white");
    if (!card) return;

    const numberEl = card.querySelector("p.text-2xl");
    const nameEl = card.querySelector("h3");
    const number = numberEl ? numberEl.innerText : "";
    const name = nameEl ? nameEl.innerText : "";


  if (e.target.closest(".copy-btn")) {
    navigator.clipboard.writeText(number);

    // copy counter update
    copyCount++;
    copyCountEl.innerText = copyCount;
    alert(`Number ${number} copied!`);
  }

  // call button click
  if (e.target.closest(".call-btn")) {
    if (coins < 20) {
      alert("Not enough coins to call!");
      return;
    }

    coins -= 20;
    coinCountEl.innerText = coins;
    alert(`Calling ${name} at ${number}... 20 coins deducted.`);

  //call history
  const li = document.createElement("li");
li.className = "bg-gray-100 p-2 rounded-md flex justify-between items-center";
const leftHTML = `
  <div>
    <strong class="text-gray-800">${name}</strong><br>
    <span class="text-gray-500">${number}</span>
  </div>
`;
const rightHTML = `
  <span class="text-black">${new Date().toLocaleTimeString()}</span>
`;

li.innerHTML = leftHTML + rightHTML;
historyList.prepend(li);
}

});
clearHistoryBtn.addEventListener("click", function() {
    historyList.innerHTML = "";
});