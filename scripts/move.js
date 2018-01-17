window.addEventListener('load', init);

function init(){  
    window.addEventListener('scroll', moveText);
    var top = window.pageYOffset;
    function moveText(){
        var yPosition = pageYOffset;
        if(yPosition >= 0){
            
            var secondMoveValue = yPosition/7;
            var secondHeading = document.getElementById('second-heading');
            secondHeading.style.left = 'calc(20% + '+ secondMoveValue +'px)';
            
             var firstMoveValue = yPosition/5;
            var firstHeading = document.getElementById('first-heading');
            firstHeading.style.left = 'calc(50% - '+ firstMoveValue +'px)';
            
         }
     }             
}