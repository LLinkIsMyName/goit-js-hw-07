const inputElem = document.querySelector(`#name-input`);
const outputElem = document.querySelector(`#name-output`);

inputElem.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    if (value === "") {
        outputElem.textContent = "Anonymous";
    } else {
        outputElem.textContent = value;
    }
});