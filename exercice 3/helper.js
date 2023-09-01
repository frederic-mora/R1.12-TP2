
  let M = {
    delta: 25 ,
    margin: 50
  }
  
  let drawBloc = function(){
    let wait = 0;
    let canvas = document.querySelector("canvas");
      
    let ctx = canvas.getContext("2d");
    let w = canvas.width - 2*M.margin;
    let h = canvas.height - 2*M.margin;
    let offsetX = Math.floor(w/M.delta);
    let offsetY = Math.floor(h/M.delta);

    
    return function(i,j, color='random'){
      wait+=40;
      let drawSquare = function(){
        if (color=='reset') wait=0;
        else{
            if (color=='random') color = randomColor();
            ctx.fillStyle = color;
            ctx.fillRect(M.margin+.5 + i*offsetX, M.margin+.5 + j*offsetY, offsetX, offsetY );
        }
      }
      setTimeout(drawSquare, wait);
    }
  }()
