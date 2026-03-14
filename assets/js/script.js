//Salvataggio del valore del contatore
const savedCounterVal = localStorage.getItem("counterValue");
let counterValue = savedCounterVal ? parseInt(savedCounterVal) : 0;


const app = document.getElementById("app");

// Creazione degli elementi dell'interfaccia
const container = document.createElement("div");
container.className = "counter-container";

const title = document.createElement("h1");
title.className = "counter-title";
title.textContent = "Counter App";

const valueDisplay = document.createElement("div");
valueDisplay.className = "counter-value";
valueDisplay.textContent = counterValue;

const buttonsWrapper = document.createElement("div");
buttonsWrapper.className = "counter-buttons";

const decrementButton = document.createElement("button");
decrementButton.className = "counter-btn";
decrementButton.textContent = "-";

const resetButton = document.createElement("button");
resetButton.className = "counter-btn";
resetButton.textContent = "Reset";

const incrementButton = document.createElement("button");
incrementButton.className = "counter-btn";
incrementButton.textContent = "+";


// Funzione per aggiornare il valore 
function updateCounter() {
    valueDisplay.textContent = counterValue;
    localStorage.setItem("counterValue", counterValue);
}

// Evento click per decrementare -
decrementButton.addEventListener("click", function () {
    counterValue--;
    updateCounter();
});

// Evento click per incrementare +
incrementButton.addEventListener("click", function () {
    counterValue++;
    updateCounter();
});

//Reset del contatore
resetButton.addEventListener("click", function () {
    counterValue = 0;
    updateCounter();
});

// Struttura finale
buttonsWrapper.appendChild(decrementButton);
buttonsWrapper.appendChild(resetButton);
buttonsWrapper.appendChild(incrementButton);

container.appendChild(title);
container.appendChild(valueDisplay);
container.appendChild(buttonsWrapper);

app.appendChild(container);