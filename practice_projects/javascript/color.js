document.addEventListener('DOMContentLoaded', function(){
    //change the font color to red
    document.querySelector('#red').onclick = function(){
        document.querySelector('#hello').style.color = 'red';
    }
    //change the font color to blue
    document.querySelector('#blue').onclick = function(){
        document.querySelector('#hello').style.color = 'blue';
    }
    //change the font color to yellow
    document.querySelector('#yellow').onclick = function(){
        document.querySelector('#hello').style.color = 'yellow';
    }
    //change the font color to green
    document.querySelector('#green').onclick = function(){
        document.querySelector('#hello').style.color = 'green';
    }
})