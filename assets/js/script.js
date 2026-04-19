//Salvataggio del valore del contatore
const savedCounterVal = localStorage.getItem("counterValue");
let counterValue = savedCounterVal ? parseInt(savedCounterVal, 10) : 0;


const app = document.getElementById("app");

// Creazione degli elementi dell'interfaccia
const container = document.createElement("div");
container.className = "counter-container";

const title = document.createElement("h1");
title.className = "counter-title";
title.textContent = "Counter App";

const valueDisplay = document.createElement("div");
valueDisplay.className = "counter-value";

const buttonsWrapper = document.createElement("div");
buttonsWrapper.className = "counter-buttons";

// Funzione per creare un pulsante (decremento, reset, incremento)
function createButton(text) {
    const button = document.createElement("button");
    button.className = "counter-btn";
    button.textContent = text;
    return button;
}

const decrementButton = createButton("-");
const resetButton = createButton("Reset");
const incrementButton = createButton("+");

// Funzioni per aggiornare il display del contatore e salvare il valore
function renderCounter() {
    valueDisplay.textContent = counterValue;
}

function saveCounter() {
    localStorage.setItem("counterValue", counterValue);
}

function syncCounter() {
    renderCounter();
    saveCounter();
}

decrementButton.addEventListener("click", function () {
    counterValue--;
    syncCounter();
});

incrementButton.addEventListener("click", function () {
    counterValue++;
    syncCounter();
});

resetButton.addEventListener("click", function () {
    counterValue = 0;
    syncCounter();
});

// Costruzione dell'interfaccia
buttonsWrapper.appendChild(decrementButton);
buttonsWrapper.appendChild(resetButton);
buttonsWrapper.appendChild(incrementButton);

container.appendChild(title);
container.appendChild(valueDisplay);
container.appendChild(buttonsWrapper);

// Aggiunta del container al DOM
app.appendChild(container);

//Inizializzazione del contatore
renderCounter();