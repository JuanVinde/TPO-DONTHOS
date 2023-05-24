let DatosNosotros=[
    {
        titulo: "Donthos - Cuidando tu Sonrisa",
        imagen: "/TPO-DONTHOS/img/SobreNosotros-Logo.png",
        descripcion: "Donthos es una empresa de seguros odontológicos con una sólida trayectoria de 10 años de experiencia en el rubro. Estamos ubicados en la hermosa ciudad de Córdoba, donde nos hemos convertido en un referente en el cuidado bucal y la salud dental de nuestros asegurados. Nuestra misión es brindar tranquilidad y protección a nuestros clientes, garantizando el acceso a servicios odontológicos de calidad.",
    },
    
    {
        titulo: "Equipo de Trabajo de Donthos",
        imagen: "/TPO-DONTHOS/img/SobreNostros-objetivo.png",
        descripcion: "En Donthos contamos con un equipo de trabajo excepcional y altamente capacitado. Nuestro equipo está compuesto por profesionales dedicados y apasionados por el cuidado dental, comprometidos en brindar un servicio de calidad y atención personalizada a nuestros asegurados. Desde nuestro Director Médico hasta nuestro equipo de asistentes dentales, cada miembro desempeña un papel fundamental en el cuidado de tu sonrisa. Trabajamos en conjunto para ofrecerte una experiencia única, donde tu comodidad, seguridad y satisfacción son nuestra máxima prioridad.",
    },
    
    {
        titulo: "Nuestro Proposito",
        imagen: "/TPO-DONTHOS/img/SobreNosotros-equipo.png",
        descripcion: "Nuestro compromiso surge como respuesta a la necesidad de brindar servicios odontológicos modernos, de calidad y accesibles a las personas, ante la falta de respuesta por parte de las obras sociales masivas y el sector público. En Donthos, nos hemos propuesto ser la solución a estas demandas, y nuestro objetivo es claro: garantizar que la comunidad tenga acceso equitativo a servicios odontológicos de calidad. Nos esforzamos por ofrecer programas de prevención, concientización y atención odontológica integral, con el propósito de mejorar la salud bucal y contribuir al bienestar general de la comunidad.",
      },      
]

let SobreNosotros = '<div class="contenedor-main">';

// Genero el for que me traiga los elementos

for (let elemento of DatosNosotros) {
    SobreNosotros = SobreNosotros + `
    <div class="presentaciones">
    <h2>${elemento.titulo}</h2>
        <div class="tarjeta">
            <img src=${elemento.imagen} alt="imagen">
            <p>${elemento.descripcion}</p>
        </div>
    </div>`;
}

document.querySelector("main").innerHTML=SobreNosotros


let footerjs= `
<div class="contenedor-texto-f">

                
                
<a href="index.html"><img src="/TPO-DONTHOS/img/logo-final.png" alt="" class="img-footer"> </a>

<p>copyrith@2023 Donthos</p>

</div>

<div class="contenedor-redes-footer">

<a href="https://www.facebook.com/profile.php?id=100064057568624" target="_blank" class="facebook-f">
    <img src="/TPO-DONTHOS/img/facebook-blanco (1).png" alt="facebook" class="fb">
</a>
<a href="*" target="_blank" class="instagram-f">
    <img src="/TPO-DONTHOS/img/instagram-blanco.png" alt="" class="insta">
</a>
<a href="*" target="_blank" class="whatsapp-f">
    <img src="/TPO-DONTHOS/img/whatsapp-blanco.png" alt="" class="wsp">
</a>
<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkxGsLHzRrgKDPVhnRsdGvRfMcZhVTsQtBLZXDqmCjMvrGlCdslrQPcmJLLDCMTsBjVxWR" target="_blank" class="gmail-f">
    <img src="/TPO-DONTHOS/img/gmail-blanco.png" alt="" class="mail">
</a>
</div>

<div class="contenedor-grupo">
<h5>Pagina creada por:</h5>
<ul>
    <li>Juan Cruz, Vinderola Breppe</li>
    <li>Gabriel, Lombardi</li>
    <li>sebastian</li>
</ul>
</div>`

document.querySelector("footer").innerHTML=footerjs

//---------------header responsive-------------------------------//

let headerjs = `             <a href="index.html">
                <img class="img-logo" src="/TPO-DONTHOS/img/logo-final.png" alt="Logo">
                </a>
                <button id="abrir" class="abrir-menu-responsive"></button>
            
                  
                   
            <nav class="nav" id="nav">
                <button id="cerrar" class="cerrar-menu-responsive"></button>
                <ul class="nav-list">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="SobreNosotros.html">Sobre Nosotros</a></li>
                    <li><a href="#">Nuestras Coberturas</a></li>
                    <li><a href="formulario_donthod/formulario_donthos.html">Contacto</a></li>
                </ul>
                <div class="nav-list-redes">
                    <a href="https://www.facebook.com/profile.php?id=100064057568624" class="facebook"></a>
                    <a href="https://www.instagram.com" class="instagram"></a>
                    <a href="https://www.whatsapp.com" class="whatsapp"></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkxGsLHzRrgKDPVhnRsdGvRfMcZhVTsQtBLZXDqmCjMvrGlCdslrQPcmJLLDCMTsBjVxWR" class="gmail"></a>
                 </div>
                
            </nav> `

 document.querySelector("header").innerHTML=headerjs

