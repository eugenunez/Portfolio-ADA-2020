const tarjetas = document.querySelectorAll(".tarjeta-proyectos");
const botonesFiltro = document.querySelectorAll(".link-pro");
const hamburguesa=document.getElementById("hamburguesa");
const menu=document.querySelector(".menu-responsive");

hamburguesa.onclick=()=>{
    menu.classList.toggle("mostrar-menu")
}

for (let boton of botonesFiltro) {
    boton.onclick = () => {
        for (let tarjeta of tarjetas) {
            if (boton.dataset.tecnologia === tarjeta.dataset.tecnologia) {
                tarjeta.classList.remove("hidden")
            }
            else if (boton.dataset.tecnologia==="todos") {
                tarjeta.classList.remove("hidden")
            }
            else {
                tarjeta.classList.add("hidden")
            }

        }
    }
}
