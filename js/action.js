var button = document.querySelector('#id-button-menu');
// Dica para clicar no botão menu
function alertBox(){
   return alert("Carregou");
}


// Ação para ativar o Animation do botão de menu

button.addEventListener("click", function(){
    var menu = document.querySelector(".container-menu");

     if(menu.className.indexOf('abrir-menu') == -1){
        
        menu.classList.add('abrir-menu');
        menu.classList.remove('fechar-menu');

     } else{
        
        menu.classList.add('fechar-menu');
        menu.classList.remove('abrir-menu');

     }
});