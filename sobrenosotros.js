let DatosNosotros=[
    {
        titulo: "Donthos - Cuidando tu Sonrisa",
        imagen: "/TPO-DONTHOS/img/blanquiamento.png",
        descripcion: "Donthos es una empresa de seguros odontológicos con una sólida trayectoria de 10 años de experiencia en el rubro. Estamos ubicados en la hermosa ciudad de Córdoba, donde nos hemos convertido en un referente en el cuidado bucal y la salud dental de nuestros asegurados. Nuestra misión es brindar tranquilidad y protección a nuestros clientes, garantizando el acceso a servicios odontológicos de calidad.",
    },
    
    {
        titulo: "Equipo de Trabajo de Donthos",
        imagen: "/TPO-DONTHOS/img/blanquiamento.png",
        descripcion: "En Donthos contamos con un equipo de trabajo excepcional y altamente capacitado. Nuestro equipo está compuesto por profesionales dedicados y apasionados por el cuidado dental, comprometidos en brindar un servicio de calidad y atención personalizada a nuestros asegurados. Desde nuestro Director Médico hasta nuestro equipo de asistentes dentales, cada miembro desempeña un papel fundamental en el cuidado de tu sonrisa. Trabajamos en conjunto para ofrecerte una experiencia única, donde tu comodidad, seguridad y satisfacción son nuestra máxima prioridad.",
    },
    
    {
        titulo: "Objetivos para la Comunidad",
        imagen: "/TPO-DONTHOS/img/consultaonline.png",
        descripcion: "Nuestro compromiso surge como respuesta a la necesidad de brindar servicios odontológicos modernos, de calidad y accesibles a las personas, ante la falta de respuesta por parte de las obras sociales masivas y el sector público. En Donthos, nos hemos propuesto ser la solución a estas demandas, y nuestro objetivo es claro: garantizar que la comunidad tenga acceso equitativo a servicios odontológicos de calidad. Nos esforzamos por ofrecer programas de prevención, concientización y atención odontológica integral, con el propósito de mejorar la salud bucal y contribuir al bienestar general de la comunidad.",
      },      
]

let SobreNosotros = '<div class="contenedor-main">';

// Genero el for que me traiga los elementos

for (let elemento of DatosNosotros) {
    SobreNosotros = SobreNosotros + `
    <div class="presentaciones">
        <div class="tarjeta">
            <h2>${elemento.titulo}</h2>
            <img src=${elemento.imagen} alt="imagen">
            <p>${elemento.descripcion}</p>
        </div>
    </div>`;
}

document.querySelector("main").innerHTML=SobreNosotros

