document.addEventListener('DOMContentLoaded', function () {
    // by default the submit button should be disabled
    document.querySelector('#Submit').disabled = true;
    document.querySelector('#task').onkeyup = () => {
        if (document.querySelector('#task').value.length>0){
            document.querySelector('#Submit').disabled = false;
        }else{
            document.querySelector('#Submit').disabled = true;
        }
        
    }
    document.querySelector('form').onsubmit = function () {
        const task = document.querySelector('#task').value;

        const li = document.createElement('li')
        li.innerHTML = task;
        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value='';

        document.querySelector('#Submit').disabled = true;       
        // stop form from submitting
        return false
    }
})