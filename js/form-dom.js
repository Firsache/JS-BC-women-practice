const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

const policyCheckbox = document.querySelector(".js-policy-checkbox");
const submitBtn = document.querySelector('.js-form-submit-button');
const formSubmit = document.querySelector('.js-form');

inputNameEl.addEventListener('focus', evt => {
    inputNameEl.style.outlineColor = 'red';
});

inputNameEl.addEventListener('blur', evt => {
    outputNameEl.style.color = 'blue';
});
inputNameEl.addEventListener('input', evt => {
    //const inputNameValue = inputNameEl.value;
    //console.log(inputNameValue);

    outputNameEl.textContent = inputNameEl.value;
});

policyCheckbox.addEventListener('change', evt => {
    if (policyCheckbox.checked && inputNameEl.value !== "") {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.disabled = true;
    }
})

formSubmit.addEventListener('submit', evt => {
    evt.preventDefault();
})