<script>
export default {
  name: "HomeView",
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
    </header>
    <!-- Hero Section -->
    <div class="hero" id="hero">
      <div class="hero-text">
        <div id="blank-space"></div>
        <div class="back-hero-text">
          <div class="line"></div>
          <h3>La primera aplicacion en su tipo</h3>
          <div class="line"></div>
        </div>
        <h1>PLATAFORMA DE TRAMITES UNIFICADOS</h1>
        <h4>¡Realiza tus tramites sin complicaciones!</h4>
        <div class="btn-open-account">
          <button><a href="">Aprende Mas</a></button>
        </div>
      </div>
      <div class="tramites" id="tramites">
        <div class="carousel">
          <!-- add carussel carousel-items -->
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
      </div>
    </div>
    <!-- About Section -->
    <div class="about-section" id="about">
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
          <img src="" alt="" />
          <h1>100%</h1>
          <h4>Tramites Completos<br />en minutos</h4>
        </div>
        <div class="data-view-item">
          <img src="" alt="" />
          <h1>95%</h1>
          <h4>Porcentaje de retencion de clientes</h4>
        </div>
        <div class="data-view-item">
          <img src="" alt="" />
          <h1>900,000</h1>
          <h4>Usuarios</h4>
        </div>
      </div>
    </div>
    <!-- Features Section -->
    <div class="feature-section" id="feature">
      <div class="feature-img">
        <img src="../assets/img/feature-img.png" alt="" />
      </div>
      <div class="feature-text">
        <h1>Caracteristicas Principales</h1>
        <ul class="feature-list">
          <li class="feature-list-item">
            Conexión entre clientes y empresas/entidades estatales.
          </li>
          <li class="feature-list-item">
            Solicitudes de trámites personalizadas.
          </li>
          <li class="feature-list-item">
            Seguridad y transparencia en el proceso.
          </li>
          <li class="feature-list-item">Accesibilidad y conveniencia.</li>
          <li class="feature-list-item">Ahorro de tiempo y recursos.</li>
        </ul>
        <div class="btn-open-account">
          <button><a href="">Crea una cuenta</a></button>
        </div>
      </div>
    </div>
    <!-- Help Section -->
    <div class="help-section" id="help">
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
    </div>
    <!-- Product Section -->
    <div class="community-section">
      <div class="community-text">
        <h1>APRENDE MAS DE NUESTRO PRODUCTO</h1>
        <p>
          Aqui puedes ver un video donde uno de nuestros miembros de equipo
          explica como es que Tramigo funciona.
        </p>
      </div>
      <video width="1200" height="680" controls>
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      Video en Proceso
    </div>
    <div class="blank-space"></div>
    <!-- Community Section -->
    <div class="community-section">
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
    </div>
    <div class="blank-space"></div>
    <!-- Team Section -->
    <div class="community-section">
      <div class="community-text">
        <h1>ABOUT THE TEAM</h1>
        <p>
          Aprende mas sobre como nuestro increible equipo desarrollo la
          aplicacion web Tramigo.
        </p>
      </div>

      <video width="1200" height="680" controls>
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      Video en Proceso
    </div>
    <div class="blank-space"></div>
    <!-- Disclaimer section -->
    <div class="disclaimer-section">
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
    </div>
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

h1 h2 h3 h4 p {
  color: var(--black);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background-color: var(--white);
}

::-webkit-scrollbar {
  display: none;
}

/* Header Section */

header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

header .logo {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: var(--black);
}

header .logo img {
  height: 70px;
}

header .logo h1 {
  margin: auto;
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
  border-radius: 5px;
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
  padding: 10px 20px;
  border-radius: 5px;
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

/* Hero Section */

.hero {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 600px;
  width: 100%;
}

#blank-space {
  height: 115px;
}

.back-hero-text {
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
}

.line {
  height: 1px;
  width: 200px;
  margin: auto 10px;
  background-color: var(--green-2);
}

.back-hero-text h3 {
  font-size: medium;
  color: var(--green-2);
}

.hero .hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
}

.hero-text h1 {
  font-size: 2.5rem;
  color: transparent;
  font-weight: 900;
  background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
  -webkit-background-clip: text;
  position: relative;
}

.hero-text h4 {
  font-size: 1rem;
  font-weight: regular;
}



/* Tramites Section */

.tramites {
  align-items: center;
  height: 400px;
  width: 100%;
  background-color: var(--white);
}


.carousel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
  background-color: #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: auto 10px;
  color: #fff;
}

.carousel-item .tramites-title {
  width: 90%;
  display: flex;
  align-items: center;
  margin: 5px auto;
  position: relative;
  bottom: 20px;
}

.carousel-item img {
  height: 50px;
  width: 50px;
}

.carousel-item h3 {
  font-size: 1rem;
  font-weight: medium;
}

/*Price tramite  */
.carousel-item h4 {
  width: 80%;
  margin: 0;
  font-weight: normal;
  justify-content: left;
}

.carousel-item h5 {
  width: 80%;
  margin: 2px auto;
  font-weight: lighter;
  justify-content: left;
}

/* About Section */

.about-section {
  height: 700px;
  width: 100%;
}

.about-block {
  margin: 0;
  padding: 0;
  display: flex;
}

.text-about-container {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  padding: 50px;
  width: 50%;
  margin: 0;
}

.text-about-container h1 {
  font-size: 2.5rem;
  color: transparent;
  font-weight: 800;
  background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
  -webkit-background-clip: text;
  position: relative;
}

.text-about-container p {
  font-size: 1rem;
  font-weight: regular;
}

.about-section .about-img {
  display: flex;
  align-items: center;
  width: 50%;
}

.about-section .about-img img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  left: 100px;
  height: 200px;
  width: 400px;
  transform: perspective(4cm) rotateY(352deg) rotateX(2deg);
}

.data-view {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 0;
}

.data-view-item h1 {
  margin: auto;
}

.data-view-item h4 {
  margin: 0;
}

/* Feature Section */

.feature-section {
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.feature-img {
  display: flex;
  -ms-flex-align: center;
  width: 50%;
  height: 100%;
}

.feature-img img {
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 70%;
  /* transform: perspective(4cm) rotateY(10deg) rotateX(2deg); */
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
  position: relative;
}

.feature-list-item {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  margin: 30px 0;
}

.feature-text button {
  font-size: medium;
}

/* help section */

.help-section {
  width: 100%;
  display: flex;
  padding-top: 50px;
  flex-direction: row;
}

.help-section .help-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: auto 50px;
  width: 50%;
}

.help-section .help-text h1 {
  font-size: 2.5rem;
  color: transparent;
  font-weight: 800;
  background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
  -webkit-background-clip: text;
  position: relative;
  padding: 10px;
}

.help-section .help-text p {
  font-size: 1rem;
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
  height: 70%;
  padding: 10px;
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
  width: 50%;
}

.help-section .help-img img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 40vw;
  transform: rotate(-10deg);
}

.btn-open-account button {
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 140px;
}

/* Community */

.community-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.community-section h1 {
  font-size: 2.5rem;
  color: transparent;
  font-weight: 800;
  background: linear-gradient(90deg, var(--green-2) 0%, var(--green-1) 100%);
  -webkit-background-clip: text;
  position: relative;
  padding: 10px;
  padding-left: 130px;
  margin: auto;
}

.community-section p {
  font-size: 1rem;
  font-weight: medium;
  width: 80%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

.community-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}

.community-card {
  display: flex;
  margin: auto 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
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
  height: 50px;
}

.disclaimer-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 0;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--green-2);
  color: rgb(0, 0, 0);
}

.disclaimer-section h1 {
  font-size: small;
}

.disclaimer-section p {
  text-align: justify;
  margin: auto 50px;
  font-size: small;
}

/* Footer */

footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.footer-text {
  width: 30%;
  margin: auto;
}

.footer-text p {
  font-size: large;
  font-weight: bold;
  padding-left: 100px;
}

.footer-social {
  width: 70%;
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
</style>
