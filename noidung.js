const nhanvat = document.getElementById('nhanvat');
const ngoaivat =document.getElementById('ngoaivat');
const diem =document.getElementById('score');

function jump(){
    nhanvat.classList.add('jump-animation');
    SetTimeout( () => {
        nhanvat.classList.remove('jump-animation');
    }, 500);
}
document.addEventListener('keypress',()=>{
    if(!nhanvat.classList.contain('jump-animation')) {
        jump();
    }
})

setInterval(() =>{
    diem.innerText++
    const nhanvatTop = parseInt(window.getComputedStyle(nhanvat)
        .getPropertyValue('top'));
    const ngaoivatLeft =parseInt(window.getComputedStyle(ngoaivat)
        .getPropertyValue('left'));

    if (ngaoivatLeft < 0){
        ngoaivat.style.display='none';
    }else {
        ngoaivat.style.display='';
    }
    if (ngaoivatLeft<50 && ngaoivatLeft>0 && nhanvatTop>150){
        alert(' Bạn được '+diem.innerText+
        " play again ? ");
        location.reload();
    }





}),50;
