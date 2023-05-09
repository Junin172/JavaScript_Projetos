// const mario = document.querySelector('.mario');
// const pipe = document.querySelector('.pipe');

// const jump = () => {
//     mario.classList.add('jump');
//     setTimeout(() => {
//         mario.classList.remove('jump');
//     }, 500);
// } 

// const loop= setInterval(() => {

//     console.log('loop')

//     const pipePosition= pipe.offsetLeft;
//     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
//     // console.log(pipePosition);
//     console.log(marioPosition);

//     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
         
//         pipe.style.animation = 'none';
//         pipe.style.left = `${pipePosition}px`;

//         pipe.style.animation = 'none';
//         pipe.style.bottom = `${marioPosition}px`;    
        
//         mario.src = '../img/ezgif.com-crop.gif'; 
//         mario.style.width = '200px';
//         mario.style.marginLeft='0px'

//         clearInterval(loop);
//     }
// }, 10)


// // Adicione o evento de clique no objeto "document"
// document.addEventListener('keydown', jump);


const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '../img/bubsymortequebrado.gif';
        mario.style.width = '150px';
        mario.style.marginLeft = '50px';
        mario.style.marginBottom='0px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);