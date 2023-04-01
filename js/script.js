const listateclas = document.querySelectorAll('.tecla');
const listaaudio = document.querySelectorAll('.audio')
function play(audio){
   const elemento = document.querySelector(audio).play();
}

listateclas[0].onclick = play;

let contador = 0;

while(contador < listateclas.length){
    const tecla = listateclas[contador] 
    const instrumento = tecla.classList[1]
    const idaudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        play(idaudio);
    };
    contador = contador + 1;

    console.log(contador);

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code == 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(evento){
        if(evento.code === 'Space' || evento.code == 'Enter'){
            tecla.classList.remove('ativa');
        }
    }
};
