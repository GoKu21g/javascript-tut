const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let setInter;

const startChangingColor = function(){

    if(!setInter){
        setInter = setInterval(chnageBgColor, 1000);
    }

    function chnageBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){

    clearInterval(setInter);

    setInter = null;
    
    // document.body.style.backgroundColor = '#ffff';

}

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor);