

function getElement(id) {
  return document.getElementById(id);
}

let heartCount = 0;
const heartCountEl = getElement("heart-count");

// heart count
getElement("card-box").addEventListener("click", function(e) {
  if (e.target.className.includes("heart-btn")) {
    heartCount++;
    heartCountEl.innerText = heartCount;
  }
});

const cardBox = document.getElementById("card-box");
const coinCountEl = document.getElementById("coin-count");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

let coins = 100;

// copy 
const copyCountEl = document.getElementById("copy-count");
let copyCount = 0;

// Copy + Call button
cardBox.addEventListener("click", function(e) {
  const card = e.target.closest("div"); 
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
      alert("Not enough coins to make a call!");
      return;
    }

    coins -= 20;
    coinCountEl.innerText = coins;
    alert(`Calling ${name} at ${number}... 20 coins deducted.`);

    const li = document.createElement("li");
    li.className = "bg-white p-2 rounded-md shadow-sm";
    li.innerHTML = `<strong>${name}</strong> - ${number}`;
    historyList.prepend(li);
  }
});
