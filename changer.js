const randomcolor = function(){
    const hex = "0123456789ABCDEF";
    let col = "#";
    for(let i=0; i<6; i++){
     col += hex[Math.floor(Math.random() * 16)];
    }
    return col
}
let int;



const startcolor = function(){
    if(!int){
    int =  setInterval(bg, 1000);
    }
}

const stopcolor = function(){
    clearInterval(int);
    int = null;
}

const bg = function(){
    document.body.style.backgroundColor = randomcolor();
}

document.querySelector('#start').addEventListener('click', startcolor);
document.querySelector('#stop').addEventListener('click', stopcolor);