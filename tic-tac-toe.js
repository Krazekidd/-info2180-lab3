window.onload = function(){


const parentdiv = document.getElementById("board");
const childdiv  = parentdiv.getElementsByTagName("div");

for (let i = 0; i < childdiv.length; i++){
      childdiv[i].classList.add("square")
}
 
let y = [null, null, null,null, null, null,null, null, null];
let player = "X"; 



for ( const div of childdiv){
    div.addEventListener("click", function(e){
        const i = Array.from (childdiv).indexOf(div);
        if (y[i] == null){
         div.textContent = player;
         y[i] = player;
         div.classList.add(player);
        if (player =='X') {
         div.classList.add("square.X");  
        }
        else if (player == 'O') {
         div.classList.add(".square.O");  
        }
        player = (player === 'X') ? 'O' : 'X';
        }
    });
    div.addEventListener('mouseover', function(){
        div.classList.add('hover');
    })

    div.addEventListener('mouseout', function(e){
        div.classList.remove('hover')
    })
}
    



    
}
    

































