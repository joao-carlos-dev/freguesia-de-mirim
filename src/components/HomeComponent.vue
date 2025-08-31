<template>
  <section class="home">
    <div class="logo-titulo">
      <img src="../assets/logo_freguesia.png" alt="logo freguesia de mirim">
      <h1>Freguesia <span>de Mirim</span></h1>
    </div>

    <div class="links">
      <router-link to="/noticias">Notícias</router-link>
      <router-link to="/sobre">Sobre</router-link>
      <a href="">Museu</a>
      <router-link to="/mais-sobre-o-bairro">Mais sobre o barirro</router-link>
      <router-link to="/visite">Visite</router-link>

      <div class="redes">
        <a href="https://m.facebook.com/museudafreguesiademirim/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/facebook_logo.png" alt="logo facebook">
        </a>
        <a href="https://www.instagram.com/museudafreguesiademirim?igsh=MTg2ZDE1bzkxN3JmOA==" target="_blank" rel="noopener noreferrer">
          <img src="../assets/instagram_logo.png" alt="logo instagram">
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  background-color: #cdcfc0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

}

.logo-titulo {
  padding-right: 255px;
}

.logo-titulo img {
  height: 270px;
  width: 263px;
  padding-top: 115px;
}

.logo-titulo h1 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 31px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #00ffff, -1px -1px 1px #ff00ff, 1px 1px 1px #00ffff, -1px -1px 1px #ff0000;
  text-align: center;
  color: #191919;
  margin: 0;
  padding-bottom: 118px;
  line-height: 0.9;

}

.logo-titulo span {
  display: block;
}

.links {
  height: 396px;
  width: 346px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.links a {
  text-align: center;
  text-decoration: none;
  font-family: "Cormorant Garamond", serif;
  font-size: 15px;
  font-weight: bold;
  color: #423f32;
  border: solid 1px #423f32;
  border-radius: 10px;
  width: 80%;
  padding: 8px;
  margin-bottom: 28px;
  transition: ease 0.5s;
}

.links a:hover {
  background-color: #cdcfc0;
}

.redes a {
  border: none;
  transition: none;
}

.redes a:hover {
  background: none;
}

.redes img {
  width: 29px;
}

/*
  Responsivo para:
  (max-width: 480px)
*/
@media (max-width: 480px) {
  .home {
    flex-direction: column;
    padding: 20px 0;
  }

  .logo-titulo {
    padding-right: 0;
    text-align: center;
    margin-bottom: 20px;
  }

  .logo-titulo img {
    height: 150px;
    width: 145px;
    padding-top: 0;
  }

  .logo-titulo h1 {
    font-size: 24px;
    padding-bottom: 20px;
  }

  .links {
    height: auto;
    width: 90%;
    padding: 20px;
  }

  .links a {
    margin-bottom: 15px;
  }

  .redes img {
    width: 25px;
  }
}

/*
  Responsivo para:
  (min-width: 481px) and (max-width: 1024px)
*/
@media (min-width: 481px) and (max-width: 1024px) {
  .home {
    flex-direction: column;
    padding: 30px 0;
  }

  .logo-titulo {
    padding-right: 0;
    text-align: center;
    margin-bottom: 30px;
  }

  .logo-titulo img {
    height: 200px;
    width: 195px;
    padding-top: 0;
  }

  .logo-titulo h1 {
    font-size: 28px;
    padding-bottom: 30px;
  }

  .links {
    height: auto;
    width: 80%;
    padding: 30px;
  }

  .links a {
    margin-bottom: 20px;
  }

  .redes img {
    width: 27px;
  }
}

/*
  Responsivo para:
  (min-width: 1025px)
*/
@media (min-width: 1025px) {
  .home {
    flex-direction: row;
    justify-content: center;
    padding: 50px 0;
  }

  .logo-titulo {
    padding-right: 255px;
  }

  .logo-titulo img {
    height: 270px;
    width: 263px;
    padding-top: 115px;
  }

  .logo-titulo h1 {
    font-size: 31px;
    padding-bottom: 118px;
  }

  .links {
    height: 396px;
    width: 346px;
    padding: 0;
  }

  .links a {
    margin-bottom: 28px;
  }

  .redes img {
    width: 29px;
  }
}
</style>
