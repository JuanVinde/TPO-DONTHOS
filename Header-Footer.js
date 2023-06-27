let footerjs= `
<div class="contenedor-texto-f">

                
                
<a href="index.html"><img src="img/logo-final.png" alt="Logo" class="img-footer"> </a>

<p>copyrith@2023 Donthos</p>

</div>

<div class="contenedor-redes-footer">

<a href="https://www.facebook.com/profile.php?id=100064057568624" target="_blank" class="facebook-f">
<img src="img/facebook-blanco (1).png" alt="link a facebook" class="fb">
</a>
<a href="https://www.instagram.com/" target="_blank" class="instagram-f">
    <img src="img/instagram-blanco.png" alt="link a instagram" class="insta">
</a>
<a href="https://www.whatsapp.com/?lang=es" target="_blank" class="whatsapp-f">
    <img src="img/whatsapp-blanco.png" alt="link a whatsapp" class="wsp">
</a>
<a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkxGsLHzRrgKDPVhnRsdGvRfMcZhVTsQtBLZXDqmCjMvrGlCdslrQPcmJLLDCMTsBjVxWR" target="_blank" class="gmail-f">
    <img src="img/gmail-blanco.png" alt="link a gmail" class="mail">
</a>
</div>

<div class="contenedor-grupo">
<h5>Pagina creada por:</h5>
<ul>
    <li>Juan Cruz, Vinderola Breppe</li>
    <li>Gabriel, Lombardi</li>
    <li>Sebastian, Sparcino </li>
</ul>
</div>`

document.querySelector("footer").innerHTML=footerjs

//---------------header responsive-------------------------------//

let headerjs = `             <a href="index.html">
                <img class="img-logo" src="img/logo-final.png" alt="Logo">
                </a>
                <button id="abrir" class="abrir-menu-responsive"></button>
            
                  
                   
            <nav class="nav" id="nav">
                <button id="cerrar" class="cerrar-menu-responsive"></button>
                <ul class="nav-list">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="SobreNosotros.html">Sobre Nosotros</a></li>
                    <li><a href="cobertura.html">Nuestras Coberturas</a></li>
                    <li><a href="formulario_donthos.html">Contacto</a></li>
                </ul>
                <div class="nav-list-redes">
                    <a href="https://www.facebook.com/profile.php?id=100064057568624" class="facebook" target="_blank"></a>
                    <a href="https://www.instagram.com/" class="instagram" target="_blank"></a>
                    <a href="https://www.whatsapp.com" class="whatsapp" target="_blank"></a>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkxGsLHzRrgKDPVhnRsdGvRfMcZhVTsQtBLZXDqmCjMvrGlCdslrQPcmJLLDCMTsBjVxWR" class="gmail" target="_blank"></a>
                 </div>
                
            </nav> `

 document.querySelector("header").innerHTML=headerjs
