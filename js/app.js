
let olho = document.getElementById("eyeR");
document.onmousemove = (e) =>{
    
    let x = e.clientX * 100 / window.innerWidth + "%";
    let y = e.clientY * 100 / window.innerHeight + "%";
    for(let i=0; i<2;i++){
        olho.style.left = x;
        olho.style.top = y;
        olho.style.transform = "translate(-"+x+",-"+y+")";
    };
};