document.addEventListener('DOMContentLoaded', function () {
   document.querySelector('#color').onchange = function(){
    document.querySelector('#hello').style.color = this.value;
   }
})