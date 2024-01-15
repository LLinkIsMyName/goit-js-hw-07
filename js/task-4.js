const formElem = document.querySelector('.login-form');


formElem.addEventListener('submit', onFormSubmit)
function onFormSubmit(e) {
    e.preventDefault();

    const inputElems = formElem.elements;
    const formData = {};
    for (let i = 0; i < inputElems.length; i++) {

        let inputValue;
        let inputName;

        if (inputElems[i].tagName === 'INPUT') {
            inputValue = inputElems[i].value.trim();
            inputName = inputElems[i].name;
        }


        if (inputValue === '') {
            alert(`All form fields must be filled in`);
            return;
        }
        formData[inputName] = inputValue;
    }
    console.log(formData);
    formElem.reset();

}


