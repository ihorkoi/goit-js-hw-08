const throttle = require('lodash.throttle');


const formRef = document.querySelector('.feedback-form');

if (localStorage['feedback-form-state']) {
    formRef.email.value = JSON.parse(localStorage['feedback-form-state']).email;
    formRef.message.value = JSON.parse(localStorage['feedback-form-state']).message;    
}

const formData = {};

formRef.addEventListener('input', throttle((evt) => {
    formData[evt.target.name] = evt.target.value;
    localStorage['feedback-form-state'] = JSON.stringify(formData);
}),500)


formRef.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(JSON.parse(localStorage['feedback-form-state']));
    formRef.reset();
    localStorage.removeItem('feedback-form-state');
})