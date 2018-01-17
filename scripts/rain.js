  window.addEventListener('load', initRain);
function initRain(){

   
const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let cw = canvas.width;
        let ch = canvas.height;
     
        function Drop(dropSize, dropX, dropY, dropSpeedX, dropSpeedY) {
            this.dropSize = dropSize;
            this.dropX = dropX;
            this.dropY = dropY;
            this.dropSpeedX = dropSpeedX;
            this.dropSpeedY = dropSpeedY;
            this.createDrop = function(){
                ctx.fillStyle = "#aaa";
                ctx.fillRect(this.dropX, this.dropY, this.dropSize, this.dropSize);
            };
            this.dropFall = function(){
            this.dropX += this.dropSpeedX;
            this.dropY += this.dropSpeedY;
                if(this.dropY>=ch){
                   this.dropY =  Math.floor(Math.random()*50) + 10;
                }
                    
            };
        };
        
        
         let num = Math.floor(Math.random()*1) + 1; // 
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // random direction of X btw (-1 and 1)
        
        function createBackground(){
            //tło
            ctx.fillStyle = '#111';
            ctx.fillRect(0,0,cw,ch);
        }
         let drops = [];
         let dropsLimit = 100;
        for (let i=0; i < dropsLimit; i++){
          drops[i] = new Drop(3, Math.floor(Math.random()*canvas.width ) + 1, Math.floor(Math.random()*canvas.height) + 1, 0,  Math.floor(Math.random()*8) + 5);
        }
        function repeatOfthirty() {
        createBackground();
        for(let i=0; i < 100; i++){
            drops[i].createDrop();
            drops[i].dropFall();
            
            }
          requestAnimationFrame(repeatOfthirty);
        }
        requestAnimationFrame(repeatOfthirty);
        
}