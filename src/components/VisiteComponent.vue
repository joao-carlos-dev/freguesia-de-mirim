<template>
  <section class="visite">
    <h1>Visite</h1>
    <div class="visite-conteudo">
      <div class="bloco-localizacao">
        <h2>Localização</h2>
        <div class="localizacao">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1693876180566!6m8!1m7!1s4tZ5D6Vh933HIw7G6Q7SDg!2m2!1d-28.23161378666567!2d-48.70400637285918!3f327.2253587928946!4f-5.234867568470108!5f0.7820865974627469"
            width="500" height="350" style="border: 0" allowfullscreen="false" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <span></span>

      <div class="bloco-contatos">
        <h2>Contatos</h2>
        <div class="visite-contato">
          <a href="https://web.whatsapp.com/send?phone=5548996259998" target="_blank">
            <img src="../assets/whatsapp_logo.png" alt="logo whatsapp">
          </a>
          <a href="tel:+554832557006">
            <img src="../assets/phone_logo.png" alt="logo do telefone">
          </a>
          <a href="mailto:freguesiademirim@gmail.com" target="_blank">
            <img src="../assets/email_logo.png" alt="imagem de um envelope">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos globais para a seção */
.visite {
  background-color: #63ac86;
  padding: 18px 0;
  flex-grow: 1;
  /* Permite que a seção se expanda para preencher o espaço */
}

h1,
h2 {
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  font-family: "Barlow Condensed", sans-serif;
  text-shadow: 1px 1px 1px #00ffff, -1px -1px 1px #ff00ff, 1px 1px 1px #00ffff, -1px -1px 1px #ff0000;
  margin: 0 0 20px 0;
}

h1 {
  font-size: 31px;
}

h2 {
  font-size: 23px;
}

.bloco-contatos {
  padding-bottom: 262px;
}

.visite-contato {
  padding-top: 100px;
}

/* Contêiner principal Flexbox */
.visite-conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
  /* ALINHAMENTO VERTICAL AUTOMÁTICO */
  flex-wrap: wrap;
  gap: 40px;
}

/* Define os blocos de conteúdo como contêineres flex para alinhamento interno */
.bloco-localizacao,
.bloco-contatos {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Linha divisória */
.visite span {
  width: 3px;
  height: 300px;
  background-color: #090708;
}

/* Estilos para o iframe */
.localizacao iframe {
  border: 0;
  padding-bottom: 117px;
}

/* Contêiner de ícones */
.visite-contato {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visite-contato img {
  width: 49px;
  padding: 28px;
}

/* Remove a margem desnecessária */
.bloco-contatos {
  margin-bottom: 0;
}

/* Telas pequenas (até 480px) */
@media (max-width: 480px) {
  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 20px;
  }

  .visite-conteudo {
    flex-direction: column;
    align-items: center;
  }

  .visite span {
    display: none;
  }

  .localizacao iframe {
    width: 100%;
    height: 250px;
    padding-bottom: 0;
  }

  .visite-contato {
    flex-direction: column;
    padding: 0;
  }

  .visite-contato img {
    padding: 10px;
  }

  .bloco-contatos {
    padding-bottom: 0;
  }

  .visite-contato {
    padding-top: 0;
  }
}

/* Telas médias (481px a 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .visite-conteudo {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .visite span {
    display: none;
  }

  .localizacao iframe {
    width: 400px;
    height: 300px;
    padding-bottom: 0;
  }

  .visite-contato img {
    width: 45px;
  }

    .bloco-contatos {
    padding-bottom: 0;
  }

  .visite-contato {
    padding-top: 0;
  }
}

/* Telas grandes (a partir de 1025px) */
@media (min-width: 1025px) {
  .visite-conteudo {
    flex-direction: row;
    align-items: center;
    /* ALINHA O CONTEÚDO VERTICALMENTE */
    justify-content: center;
    gap: 80px;
  }

  .visite span {
    margin-top: 0;
    /* REMOVIDA MARGEM FIXA */
    height: 280px;
    display: block;
  }

  .bloco-contatos {
    margin-top: 0;
    /* REMOVIDA MARGEM FIXA */
  }
}
</style>
