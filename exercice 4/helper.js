
  let M = {
    delta: 20 ,
    margin: 50
  }
  

  let drawGrid = function(){
    let canvas = document.querySelector("canvas");
    
    let ctx = canvas.getContext("2d");
    let w = canvas.width - 2*M.margin;
    let h = canvas.height - 2*M.margin;

    // clear canvas
    ctx.clearRect(0, 0, w, h);
    let offsetX = Math.floor( w / M.delta );
    let offsetY = Math.floor( h / M.delta );
    
    ctx.translate(M.margin + .5, M.margin + .5);
    ctx.strokeStyle = 'gray';
    ctx.beginPath();
    // draw horizontal lines
    for(let i=0; i<=w; i+=offsetX){
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
    }

    // draw vertical lines
    for(let j=0; j<=h; j+=offsetY){
      ctx.moveTo(0, j);
      ctx.lineTo(w, j);
      
    }
    ctx.stroke();
    ctx.closePath();
     // add numbers for each line
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(M.margin, M.margin-12);
    ctx.textAlign = 'center';
    for(let i=0; i<w; i+=offsetX){
      ctx.fillText(i/offsetX, i, 0);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.translate(M.margin-16, M.margin+4);
    for(let j=0; j<h; j+=offsetY){
      ctx.fillText(j/offsetY, 0, j);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

    
  let randomColor = function(){
    let r = Math.floor(255 * Math.random() );
    let g = Math.floor(255 * Math.random() );
    let b = Math.floor(255 * Math.random() );
    return "rgb("+r+","+g+","+b+")";
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

  let speedyDrawBloc = function(){

    let canvas = document.querySelector("canvas");
      
    let ctx = canvas.getContext("2d");
    let w = canvas.width - 2*M.margin;
    let h = canvas.height - 2*M.margin;
    let offsetX = Math.floor(w/M.delta);
    let offsetY = Math.floor(h/M.delta);

    
    return function(i,j, color='random'){
        if (color=='random') color = randomColor();
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(M.margin+.5 + i*offsetX, M.margin+.5 + j*offsetY, offsetX, offsetY );
       // console.log(i + " " + j + " " + color)

       console.log((M.margin+.5 + i*offsetX)+ " " + (M.margin+.5 + j*offsetY)+ " " + offsetX+ " " + offsetY  )

       console.log(j*offsetY);
    }


  }();


  drawGrid();

