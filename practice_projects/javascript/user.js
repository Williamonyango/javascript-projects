document.addEventListener('DOMContentLoaded', function () {
    const submit = document.querySelector('#Submitt');
    document.querySelector('form').onsubmit = function () {
        const name = document.querySelector('#name').value;
        
        if (name.length > 0) {
            submit.disabled = true;
        }
        else {
            submit.disabled = false;
        }
        
        alert(`Hello, ${name}`);
    }
})