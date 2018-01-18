window.addEventListener('load', init);


function init(){
    window.addEventListener('scroll', showNumbers);
    
    
    
    
    
    
    
    function showNumbers(){
        
    
        const projects = document.querySelector('.projects');
        const features = document.getElementById('features');
        const top = projects.offsetTop - 500;
        const number = document.getElementById('number');
        let currentOffset = window.pageYOffset;
        let moveValue = window.pageYOffset/1.20;
        let currentNumber = 1;
        let currentNumberPosition = 0;
        if(currentOffset >=top){
            number.textContent = currentNumber;
            number.style.display = "block";
            moveNumber();
        }
        
       function moveNumber(){
           number.style.top = 'calc(410px + '+ moveValue +'px)';
           if(currentOffset < 410){
               number.style.display = "none";
           }
           else if(currentOffset > 440 &currentOffset <770){
               currentNumber = 1;
               number.textContent = currentNumber;
           }
           else if(currentOffset > 770 & currentOffset < 1115){
               currentNumber = 2;
               number.textContent = currentNumber;
           }else if(currentOffset > 1115 & currentOffset <1405) {
               currentNumber = 3;
               number.textContent = currentNumber;
           }else if(currentOffset > 1405 & currentOffset <1800) {
               currentNumber = 4;
               number.textContent = currentNumber;
           }else if(currentOffset > 1790 & currentOffset <2035) {
               currentNumber = 5;
               number.textContent = currentNumber;
           }else{
               number.style.display = "none";
           }
        }
    }
    window.addEventListener('scroll', showText);
    
   // kazde 100 offsetu powinno dawac .1
    
    //1600
    
   function showText() {
        const about = document.querySelector('#about');
        let currentOffset = window.pageYOffset;
       
        let difference =  currentOffset - 1900;
       
       about.style.opacity = 0;
       let value = (difference / 500) +0.1;
       if(currentOffset >= 1584){
            animate();
        }

       function animate() {
           about.style.opacity = value;

       }
            //text-shadow: 0px 3px 0px #b2a98f,
//                 0px 14px 10px rgba(0,0,0,0.15),
//                 0px 24px 2px rgba(0,0,0,0.1),
//                 0px 34px 30px rgba(0,0,0,0.1);

    }
}