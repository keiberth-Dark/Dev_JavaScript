
const d = document;

let x = 0,
    y = 0;


export function moveBall(e, ball, stage){
  const $ball = d.querySelector(ball),
      $stage = d.querySelector(stage),
      limistaball = $ball.getBoundingClientRect(),
      limitsStage = $stage.getBoundingClientRect();

      // console.log(e.keyCode);
      // console.log(e.key);
      // console.log(limistaball,limitsStage);

      
      switch (e.keyCode) {
        case 37: 
        if(limistaball.left > limitsStage.left) {
          e.preventDefault();
          x--;
        }   
        break;
        case 38:  
        if(limistaball.top > limitsStage.top){ 
          e.preventDefault();
          y--;
        }
        break;
        case 39: 
        if(limistaball.right < limitsStage.right) {
          e.preventDefault();
          x++;}    
        break;
        case 40: 
        if(limistaball.bottom < limitsStage.bottom) {
          e.preventDefault();
          y++;}     
        break;
        
        default:
          break;
        }
        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
      }
      
export function shortcuts(e) {
    /* console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlkey);
    console.log(e.altkey);
    console.log(e.shiftkey);
    console.log(e); */
    //console.log([e.type,e.key,e.keyCode,e.ctrlkey,e.altkey,e.shiftkey,e]);

    if (e.key === "a" && e.altkey){
      alert("Se a presionado la letra a");
    }

    if (e.key === "c" && e.altkey){
      confirm("Se a Ello una confirmacion");
    }

    if (e.key === "p" && e.altkey){
      prompt("Se a Ello un aviso");
    }
}