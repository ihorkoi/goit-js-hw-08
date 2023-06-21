const throttle = require('lodash.throttle');

const FORM_KEY = 'feedback-form-state'

const formRef = document.querySelector('.feedback-form');

if (localStorage[FORM_KEY]) {
    for (key of Object.keys(JSON.parse(localStorage[FORM_KEY]))) {
       formRef[key].value = JSON.parse(localStorage[FORM_KEY])[key]
   }
}

const formData = JSON.parse(localStorage[FORM_KEY]) || {};

formRef.addEventListener('input', throttle((evt) => {
    formData[evt.target.name] = evt.target.value;
    localStorage[FORM_KEY] = JSON.stringify(formData);
}),500)


formRef.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(JSON.parse(localStorage[FORM_KEY]));
    formRef.reset();
    localStorage.removeItem(FORM_KEY);
})