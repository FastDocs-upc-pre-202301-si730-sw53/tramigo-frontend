<script>
export default {
  name: "HomeView",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showMenu(show) {
      this.visible = show;
    }
  }
}
</script>

<template>
<body>
<!-- Navbar section -->
<header>
    <div class="logo">
      <img src="../assets/img/logo-tramigo.png" alt="logo">
      <h1>Tramigo</h1>
    </div>
    <div class="navbar">
      <ul class="menu">
        <li class="menu-item"><a href="#hero">Inicio</a></li>
          <li class="menu-item"><a href="#tramites">Sobre Nosotros</a></li>
          <li class="menu-item"><a href="#feature">Beneficios</a></li>
          <li class="menu-item"><a href="#help">Ayuda</a></li>
          <li class="menu-item"><a href="#footer">Contacto</a></li>
      </ul>
    </div>
    <div class="btn-open-account">
      <button><a href="/login">Registrate Gratuitamente</a></button>
    </div>

    <Button v-if="!visible" @click="showMenu(true)" class="bt_menu" icon="pi pi-align-justify" severity="secondary" rounded aria-label="Bookmark" />
    <Button v-else @click="showMenu(false)" class="bt_close" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />

</header>


<div v-if="visible" class="menu_items" @click="showMenu(false)">
      <Button text class="mat-button"><a href="#hero">Inicio</a></Button>
      <Button text class="mat-button"><a href="#tramites">Sobre Nosotros</a></Button>
      <Button text class="mat-button"><a href="#feature">Beneficios</a></Button>
      <Button text class="mat-button"><a href="#help">Ayuda</a></Button> 
      <Button text class="bt mat-button"><a href="#footer">Contacto</a></Button>
      <button text class="bt_login"><a href="/login">Registrate Gratuitamente</a></button>
</div>



<main>
  <!-- Hero Section -->
<section class="hero" id="hero">

    <div class="hero-text">
      <div class="back-hero-text">
        <div class="line"></div>
        <h3>La primera aplicacion en su tipo</h3>
        <div class="line"></div>
      </div>
      <h1>PLATAFORMA DE TRAMITES UNIFICADOS</h1>
      <h4>¡Realiza tus tramites sin complicaciones!</h4>
      <button><a href="#">Aprende Mas</a></button>
    </div>

    <div class="tramites" id="tramites">
            <div class="carousel-item">
              <div class="tramites-title">
                <img src="../assets/img/ether.png" alt="crytocurrency" />
                <h3>Tramite 1</h3>
              </div>
              <h4>Descripcion Tramite</h4>
              <h5>Precio (%)</h5>
            </div>
            <div class="carousel-item">
              <div class="tramites-title">
                <img src="../assets/img/ether.png" alt="" />
                <h3>Tramite 2</h3>
              </div>
              <h4>Descripcion Tramite</h4>
              <h5>Precio (%)</h5>
            </div>
            <div class="carousel-item">
              <div class="tramites-title">
                <img src="../assets/img/ether.png" alt="" />
                <h3>Tramite 3</h3>
              </div>
              <h4>Descripcion Tramite</h4>
              <h5>Precio (%)</h5>
            </div>
            <div class="carousel-item">
              <div class="tramites-title">
                <img src="../assets/img/ether.png" alt="" />
                <h3>Tramite 4</h3>
              </div>
              <h4>Descripcion Tramite</h4>
              <h5>Precio (%)</h5>
            </div>
    </div>
</section>


  <!-- About Section -->
<section class="about-section" id="about">

    <div class="about-block">
      <div class="text-about-container">
        <h1>PORQUE SOMOS TU MEJOR OPCION</h1>
        <p>
              Tramigo es una aplicación diseñada tanto para personas naturales
              como para empresas y entidades estatales que necesitan realizar
              trámites de cualquier índole.<br />Nuestro objetivo es conectar a
              los clientes con las empresas o entidades que puedan satisfacer sus
              necesidades de manera rápida y eficiente, brindándoles así una
              experiencia sencilla y sin contratiempos.<br /><br />En Tramigo nos
              enorgullecemos de nuestra plataforma descentralizada, que permite a
              nuestros usuarios hacer negocios con cualquier entidad estatal o
              empresa sin limitaciones.<br />Ya sea que necesite realizar un
              trámite legal, de inmigración, de impuestos o de cualquier otro
              tipo, en Tramigo lo hacemos fácil y rápido.<br /><br />Además,
              nuestra aplicación cuenta con medidas de seguridad avanzadas para
              garantizar que su información personal esté protegida en todo
              momento. ¡Únete a la plataforma Tramigo hoy mismo y comienza a hacer
              tus trámites con la mayor rapidez y eficiencia posible!
            </p>
      </div>
      <div class="about-img">
        <img src="../assets/img/img-about.png" alt="system dex" />
      </div>
    </div>

    <div class="data-view">
      <div class="data-view-item">
        <img src="" alt="">
        <h1>100%</h1>
        <h4>Tramites Completos<br />en minutos</h4>
      </div>
      <div class="data-view-item">
        <img src="" alt="">
        <h1>95%</h1>
        <h4>Porcentaje de retencion de clientes</h4>
      </div>
      <div class="data-view-item">
        <img src="" alt="">
        <h1>900,000</h1>
        <h4>Usuarios</h4>
      </div>
    </div>
</section>


  <!-- Features Section -->
<section class="feature-section" id="feature">
    <div class="feature-img">
      <img src="../assets/img/feature-img.png" alt="" />
    </div>
    <div class="feature-text">
      <h1>Caracteristicas Principales</h1>
      <ul class="feature-list">
        <li class="feature-list-item">Conexión entre clientes y empresas/entidades estatales.</li>
        <li class="feature-list-item">Solicitudes de trámites personalizadas</li>
        <li class="feature-list-item">Seguridad y transparencia en el proceso.</li>
        <li class="feature-list-item">Accesibilidad y conveniencia.</li>
        <li class="feature-list-item">Ahorro de tiempo y recursos.</li>
      </ul>
      <div class="btn-open-account"><button><a href="">Crea una cuenta</a></button></div>
    </div>
</section>


<!-- Help Section -->
<section class="help-section" id="help">

    <div class="help-text">
      <h1>Realiza tramites con nosotros</h1>
      <p>
            Nos enfocamos en brindar una buena experiencia de usuario, por lo que
            realizar trámites en Tramigo es muy fácil. A diferencia de otras
            plataformas, no se sentirá abrumado por gráficos o tecnicismos, y
            todos los cálculos son manejados por nosotros. Además, contamos con
            tutoriales y guías sobre todos nuestros servicios. Abre una cuenta y
            comienza a aprender
          </p>
      <div class="help-boxes">
        <div class="help-box">
          <h3>1</h3>
          <h4>Crea una cuenta</h4>
        </div>
        <div class="help-box">
          <h3>2</h3>
          <h4>Descarga la aplicacion</h4>
        </div>
        <div class="help-box">
          <h3>3</h3>
          <h4>Selecciona el tramite</h4>
        </div>
        <div class="help-box">
          <h3>4</h3>
          <h4>Termina en minutos</h4>
        </div>
      </div>
    </div>

    <div class="help-img">
      <img src="../assets/img/img-help.png" alt="cryptocurrencies" />
    </div>
</section>


<!-- Product Section -->
<section class="community-section">

  <div class="community-text">
    <h1>APRENDE MAS DE NUESTRO PRODUCTO</h1>
          <p>
            Aqui puedes ver un video donde uno de nuestros miembros de equipo
            explica como es que Tramigo funciona.
          </p>
  </div>

  <video width="75%" height="500px" controls>
    <source src="" type="video/mp4">
  Your browser does not support the video tag.
  </video>
</section>


<!-- Community Section -->
<section class="community-section">
    <div class="community-text">
      <h1>QUE DICEN NUESTROS USUARIOS</h1>
          <p>
            Nuestra aplicación unifica todos los trámites en un solo lugar, lo que
            hace que el proceso sea más fácil y eficiente para todos nuestros
            usuarios.<br />
            Ademas, los usuarios pueden conectarse directamente con empresas y
            entidades estatales para solicitar los trámites que necesiten, sin
            tener que preocuparse por los detalles técnicos y administrativos.
          </p>
    </div>
    <div class="community-cards">
      <div class="community-card">
        <!-- <img src="" alt="commentary">  -->
        
        <p>
              Tramigo es una plataforma revolucionaria que ha simplificado el
              proceso de realizar trámites y solicitudes para personas naturales y
              jurídicas. Con solo unos pocos clics, puedes conectarte con empresas
              o entidades estatales y hacer que se ocupen de todo el proceso de tu
              trámite, ahorrándote tiempo y estrés.
            </p>
        <div class="profile-community">
          <!-- <img src="" alt="profile">  -->
          
          <h4>Jhon Smith</h4>
          <h5>Trader</h5>
        </div>
      </div>
      <div class="community-card">
        <!-- <img src="" alt="commentary">  -->
        <p>
              Con Tramigo, olvídate de tener que navegar por páginas y páginas de
              trámites y solicitudes en diferentes sitios web. En su lugar,
              disfruta de una experiencia unificada y sin complicaciones, donde
              puedes encontrar y gestionar todos tus trámites en un solo lugar.
            </p>
        <div class="profile-community">
          <!-- <img src="" alt="profile">  -->
          <h4>Bessie Cooper</h4>
          <h5>Crypto Analyst</h5>
        </div>
      </div>
      <div class="community-card">
        <!-- <img src="" alt="commentary">  -->
        <p>
              Si estás buscando una forma más rápida y eficiente de realizar
              trámites y solicitudes, no busques más allá de Tramigo. Con su
              enfoque innovador y fácil de usar, esta plataforma te permite
              conectarte directamente con las empresas o entidades estatales que
              necesitas para hacer que tu trámite se resuelva rápidamente y sin
              problemas.
            </p>
        <div class="profile-community">
          <!-- <img src="" alt="profile">  -->
          <h4>Alberto Flores</h4>
          <h5>Trader</h5>
        </div>
      </div>
    </div>
</section>


<!-- Team Section -->
<section class="community-section">
    <div class="community-text">
      <h1>ABOUT THE TEAM</h1>
      <p>
            Aprende mas sobre como nuestro increible equipo desarrollo la
            aplicacion web Tramigo.
          </p>
    </div>

    <video width="75%" height="500" controls>
      <source src="" type="video/mp4">
    Your browser does not support the video tag.
    </video>
</section>


  <!-- Disclaimer section -->
<section class="disclaimer-section">
    <h1>DISCLAIMER</h1>
    <p>
          Tramigo no se hace responsable de ninguna pérdida o daño causado por el
          uso o la dependencia de la información proporcionada en este sitio web.
          Los usuarios asumen la responsabilidad total por cualquier transacción
          financiera o de inversión que realicen, y se recomienda buscar
          asesoramiento financiero, legal o fiscal de un profesional calificado
          antes de tomar cualquier decisión financiera o de inversión.
          <br />
          Tramigo se reserva el derecho de modificar, actualizar o eliminar
          cualquier información proporcionada en este sitio web sin previo aviso.
          El uso de este sitio web implica la aceptación de estos términos y
          condiciones.
        </p>
</section>
</main>


<!-- Footer section -->
<footer id="footer">
  
      <div class="footer-text">
        <p>Contactanos:</p>
      </div>

      <div class="footer-social">
        <ul class="footer-social-list">
          <li class="footer-social-list-item">
            <a href=""><img src="../assets/img/facebook.png" alt="facebook" /></a>
          </li>
          <li class="footer-social-list-item">
            <a href=""><img src="../assets/img/twitter.png" alt="twitter" /></a>
          </li>
          <li class="footer-social-list-item">
            <a href=""><img src="../assets/img/instagram.png" alt="instagram" /></a>
          </li>
          <li class="footer-social-list-item">
            <a href=""><img src="../assets/img/linkedin.png" alt="linkedin" /></a>
          </li>
        </ul>
      </div>
</footer>
</body>
</template>






<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700;800;900&display=swap');

:root {
  --green-1: #2ECC40;
  --green-2: #A3D9A5;
  --green-3: #004B2B;
  --white: #fdfdfd;
  --grey: #2f2f2f;
  --black: rgba(0, 0, 0, 0.8);
}

* {
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

body {
  margin: 0;
  background-color: var(--white);
}





/* Header Section */

header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

header .logo {
    width: 300px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: var(--black);
}

header .logo img {
    height: 60px;
    width: 60px;
}

header .logo h1 {
    margin: 15px;
    color: var(--black);
}

.navbar {
    justify-content: center;
}

.menu {
    text-decoration: none;
    display: flex;
    margin: 0;
    height: 100%;
}

.menu-item {
    text-decoration: none;
    justify-content: center;
    font-size: 16px;
    list-style: none;
    color: var(--white);
    font-weight: 500;
    margin: auto 10px;
    padding: 10px 10px;
    border-radius:  5px;
}

header .menu .menu-item a {
    text-decoration: none;
    color: var(--black);
}

header .menu .menu-item:hover {
    color: var(--white);
    background-color: var(--green-2);
}

header .menu .menu-item a:hover {
    color: var(--white);
}

.btn-open-account {
    color: var(--black);
    justify-content: center;
    font-weight: bold;
    /* padding: 10px 20px; */
    border-radius: 5px;
    margin: auto 0;
    border: none;
    cursor: pointer;
}

.btn-open-account a {
  text-decoration: none;
  color: var(--white);
}

.btn-open-account button {
    background-color: var(--green-3);
    height: 100%;
    width: 100%;
    margin: auto;
    padding: 5px;
    border: 0;
    border-radius: 5px;
}

.btn-open-account button:hover {
    background-color: var(--green-2);
    color: #fff;
    text-decoration: none;
}


/* ------------- Main Section ------------------ */

section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 25px 0;
}



/* Hero Section */

.hero {
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
}

.hero-text {
    width: 70%;
}

.back-hero-text {
    display: flex;
    flex-direction: row;
    margin-top: 115px;
}

.line {
    height: 1px;
    width: 200px;
    margin: auto 10px;
    background-color: var(--green-2);
}

.back-hero-text h3 {
    font-size: small;
    color: var(--green-2);
}

.hero .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero-text h1 {
    font-size: 2.5rem;
    color: transparent;
    font-weight: 900;
    background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
    -webkit-background-clip: text;
}

.hero-text h4 {
    font-size: 1rem;
    font-weight: regular;
}

.hero-text button {
    background-color: #000;
    color: #fff;
    font-weight: normal;
    padding: 10px 20px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    margin: 10px 0;
}



/* Cryto Section */

.tramites {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    width: 100%;
    background-color: var(--white);
}

.carousel-item {
    height: 175px;
    background-color: #000;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin: 50px;
    padding: 20px;
    color: #fff;
}

.carousel-item .tramites-title {
    display: flex;
    align-items: center;
}

.carousel-item img {
    height: 50px;
    width: 50px;
}



/* About Section */

.about-block {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
    margin: 50px;
}

.text-about-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    width: 525px;
}

.text-about-container h1 {
    font-size: 2.5rem;
    color: transparent;
    font-weight: 800;
    background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
    -webkit-background-clip: text;
}

.text-about-container p {
    font-size: 1rem;
    font-weight: regular;
}

.about-section .about-img {
    width: 475px;
    text-align: center;
}

.about-section .about-img img {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    height: 250px;
    width: 450px;
    transform: perspective(4cm) rotateY(352deg) rotateX(2deg);
}

.data-view {
    width: 1500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 50px;
}

.data-view-item {
    text-align: center;
    width: 350px;
}



/* Feature Section */

.feature-img {
    width: 425px;
    margin: 20px;
}

.feature-img img {
    margin: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    width: 100%;
}

.feature-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 100%;
}

.feature-text h1 {
    font-size: 2.5rem;
    color: transparent;
    font-weight: 800;
    background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
    -webkit-background-clip: text;
}

.feature-list-item {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
}

.feature-text button {
  font-size: medium;
}

.btn-open-account {
    height: 35px;
}



/* help section */

.help-section {
    display: flex;
    padding-top: 100px;
    flex-direction: row;
}

.help-section .help-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: 40px;
}

.help-section .help-text h1 {
    font-size: 2.5rem;
    color: transparent;
    font-weight: 800;
    background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
    -webkit-background-clip: text;
    padding: 10px;
    width: 100%;
}

.help-section .help-text p {
    font-weight: regular;
    width: 80%;
}

.help-boxes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.help-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin: 20px;
}

.help-box h3 {
    font-size: 2.5rem;
    color: transparent;
    font-weight: 800;
    background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
    -webkit-background-clip: text;
}

.help-section .help-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    margin-bottom: 150px;
    margin: 40px;
}

.help-section .help-img img {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    width: 400px;
    transform: rotate(-10deg);
}

.btn-open-account button {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 140px;
    margin-bottom: 150px;
}

.btn-open-account {
    margin-right: 125px;
}



/* Community */

.community-section {
    flex-wrap: nowrap;
    flex-direction: column;
    min-height: 750px;
}

.community-text {
    width: 75%;
}

video {
    margin: auto;
}

.community-section h1 {
    font-size: 2.5rem;
    color: transparent;
    font-weight: 800;
    background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
    -webkit-background-clip: text;
    padding: 10px;
    padding-left: 40px;
    margin: auto;
}

.community-section p {
    font-size: 1rem;
    font-weight: regular;
    width: 80%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
}

.community-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.community-card {
    display: flex;
    margin: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 450px;
    padding: 10px;
    background-color: #000;
    border-radius: 1rem;
    color: white;
}

.profile-community {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.blank-space {
    height: 100px;
}

.disclaimer-section {
    display: flex;
    max-height: 20vh;
    justify-content: center;
    padding: 30px 0;
    align-items: center;
    background-color: var(--green-2);
    color: rgb(0, 0, 0);
}

.disclaimer-section h1 {
    font-size: small;
}

.disclaimer-section p {
    margin: 0 175px; 
    font-size: small;
}



/* Footer */

footer {
    display: flex;
    flex-direction: row;
    justify-content:center;
    background-color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.footer-text {
    width: 30%;
    margin: 0 150px;
}

.footer-text p {
    font-size: large;
    font-weight: bold;
    margin-top: 25px;
    padding-left: 100px;
}

.footer-social {
    width: 70%;
    margin: 0 150px;
}

.footer-social-list {
    display: flex;
    flex-direction: row;
}

.footer-social ul li {
    list-style: none;
    text-decoration: none;
    margin: auto;
}

.bt_close {
    background-color: brown;
    margin: auto 0;
    margin-left: 20px;
}

.bt_menu {
    display: flex;
    background-color: blueviolet;
    margin: auto 0;
    margin-left: 20px;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: var(--green-1);
}

.bt_login {
    background-color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
}



/*  STYLE RESPONSIVE__________________________________________  */

@media only screen and (max-width: 400px) {
  header {
    justify-content: left;
  }

  h1 {
    text-align: center;
  }

  video {
    width: 100%;
  }

  .disclaimer-section {
    max-height: 100vh !important;
  }
}

/* Estilos para dispositivos pequeños (hasta 650px) */
@media only screen and (max-width: 650px) {

    .carousel-item {
      height: 250px;
      margin: 10px;
      padding: 35px;
    }

    .data-view {
        width: 75%;
    }

    .disclaimer-section {
        max-height: 80vh;
    }
    
    .disclaimer-section p {
        margin: 0 25px;
        text-align: center;
    }

    .about-img img {
        transform: none !important;
        width: 75% !important;
    }

    .feature-img {
        text-align: center;

    }
    
    .feature-img img {
        width: 75%;
    }
    .feature-text {
        width: 75%;
    }

    .help-box {
        width: 75px;
    }

    .help-img img {
        width: 75% !important;
    }

    .help-text {
        width: 75% !important;
    }

    .text-about-container {
        width: 100%;
    }

    .tramites {
        width: 75%;
    }

    .community-section {
        min-height: 350px;
    }

    .community-card {
      height: 500px;
    }

    p {
      text-align: center;
    }

    section div {
      width: 100%;
    }

    .bt_menu, .bt_close {
      margin-right: 30px;
    }
}
  
/* Estilos para dispositivos medianos (de 651px a 1104px) */
@media only screen and (max-width: 1104px)  {

    .disclaimer-section {
        max-height: 50vh;
    }

    .footer-text {
        display: none;
    }

    .footer-social {
        margin: auto;

    }
    .footer-social .footer-social-list {
        padding: 0;
    }

    .menu_items {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background-color: white;
        transition: all 2s;
        z-index: 10;
    }
    
    .menu_items button {
        margin-top: 10px;
    }

    .menu_items .bt {
        margin-bottom: 10px;
        padding: 20px 30px;
    }
    .menu_items a {
        padding-bottom: 50px;
        font-size: large;
    }
    .navbar {
        display: none;
    }

    .btn-open-account {
        display: none;
    }

    p {
      text-align: center;
    }
}
  
/* Estilos para dispositivos grandes (más de 1105px) */
@media only screen and (min-width: 1105px){
    .bt_menu {
        display: none;
    }
}
</style>
