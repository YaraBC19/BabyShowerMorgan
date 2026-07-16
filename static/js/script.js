window.onload = function () {

    const tarro = document.getElementById("tarro");
    const tapa = document.getElementById("tapa");
    const mensaje = document.getElementById("mensaje");
    const pooh = document.getElementById("pooh");
    const bienvenida = document.getElementById("bienvenida");
    const invitacion = document.getElementById("invitacion");
    const poohGlobos = document.getElementById("poohGlobos");

    const musica = document.getElementById("musica");
    const audioPooh = document.getElementById("audioPooh");

    const click = document.querySelector(".click");

    const abejas = document.querySelectorAll(".abeja");

    tarro.addEventListener("click", iniciar);

    function iniciar(){

        tarro.style.pointerEvents="none";

        musica.play();

        // Abrir tapa
        tapa.style.transform =
        "translateX(-50%) rotate(-35deg) translate(-35px,-45px)";

        // Ocultar texto
        click.style.display="none";

        // Mostrar mensaje
        mensaje.classList.add("mostrar");

        // Tarro rebota
        setTimeout(function(){

            tarro.classList.add("salida");

        },2000);

        // Aparece Pooh
        setTimeout(function(){

            mensaje.classList.remove("mostrar");

            pooh.style.left="60px";
            pooh.style.opacity="1";

            pooh.classList.add("saludar");

            bienvenida.style.opacity="1";

            audioPooh.play();

        },3500);

        // Cuando Pooh termina de hablar
        audioPooh.onended = function(){

            document.body.classList.add("fondoInvitacion");

            bienvenida.style.opacity="0";

            setTimeout(function(){

                invitacion.classList.add("mostrar");

                poohGlobos.style.right="40px";
                poohGlobos.style.opacity="1";
                poohGlobos.style.animation = "balanceoGlobos 3s ease-in-out infinite";

                mostrarAbejas();

            },600);

        };

    }

    function mostrarAbejas(){

    abejas.forEach(function(abeja,i){

        setTimeout(function(){

            abeja.style.opacity="1";

            abeja.classList.add("volar");

        },i*180);

    });

}

};