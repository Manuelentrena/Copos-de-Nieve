const canvas = document.querySelector('#nieve');
const cuadro = canvas.getContext('2d');

const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight;

const tipoNieve = {
  num: 150,
  tamaño: 4,
  color: "white",
}

let copos = [];


crearCopos();
nevar();


function crearCopos() {
  for (let i = 0; i < tipoNieve.num; i++) {
    copos.push( {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      tamaño: Math.random() * tipoNieve.tamaño,
      toX: Math.random() * 10 - 5,
      toY: Math.random() * 5 + 1,
    })
  }
}



function nevar() {
  cuadro.clearRect(0, 0, w, h);
  copos.map((copo)=>{
    cuadro.beginPath();
    cuadro.fillStyle = tipoNieve.color;
    cuadro.arc(copo.x, copo.y,copo.tamaño,0,2*Math.PI);
    cuadro.fill();

    if (copo.x > w) { copo.x = 0;}
    if (copo.x < 0) { copo.x = w;}
    if (copo.y > h) { copo.y = 0;}

    copo.x += copo.toX;
    copo.y += copo.toY;
  });
  setTimeout(nevar,18);
}


