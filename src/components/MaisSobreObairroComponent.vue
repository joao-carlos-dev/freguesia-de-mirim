<template>
  <section class="sobre-bairro">
    <h1>Mais sobre <span>o bairro</span></h1>

    <div class="materias-carousel-container">
      <carousel :items-to-show="2" :wrap-around="true" :autoplay="3000" :breakpoints="breakpoints">
        <slide v-for="(materia, index) in materias" :key="index">
          <div class="card">
            <img :src="materia.imagem" :alt="materia.titulo" class="card-image" />
            <div class="card-content">
              <h3>{{ materia.titulo }}</h3>
              <p>{{ materia.resumo }}</p>
              <router-link :to="materia.link" class="saiba-mais-button">Saiba Mais</router-link>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import fotoMateria01 from '../assets/img/foto_materia_01.png';
import fotoMateria02 from '../assets/img/foto_materia_02.JPG';
import fotoMateria03 from '../assets/img/foto_materia_03.jpg';
import fotoMateria04 from '../assets/img/foto_materia_04.jpg';

export default {
  name: 'MateriasCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      materias: [
        {
          titulo: 'Festa do Divino',
          resumo: 'Tradicional festa regiliosa do bairro. com mais de 100 anos de história',
          imagem: fotoMateria01,
          link: '/materias/Materia-01'
        },
        {
          titulo: 'Educação',
          resumo: 'Contando um pouco sobre a história da educação do bairro.',
          imagem: fotoMateria02,
          link: '/mais-sobre-o-bairro/materia-2'
        },
        {
          titulo: 'Fundação do bairro',
          resumo: 'Contando um pouco sobre a fundação do bairro e sua colonização.',
          imagem: fotoMateria03,
          link: '/mais-sobre-o-bairro/materia-3'
        },
        {
          titulo: 'Lagoa do Mirim',
          resumo: 'Breve história da importância da lagoa para o desenvolvimento do bairro.',
          imagem: fotoMateria04,
          link: '/mais-sobre-o-bairro/materia-4'
        },
      ],

      breakpoints: {
        // Dispositivos móveis (0px a 480px)
        0: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        // Tablets (481px a 1024px)
        481: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        // Desktops (a partir de 1025px)
        1025: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
      },
    };
  },
};
</script>

<style scoped>
.sobre-bairro {
  background-color: #cdcfc0;
}

.sobre-bairro h1 {
  margin: 0;
  padding-top: 18px;
  padding-bottom: 28px;
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  font-size: 31px;
  font-family: "Barlow Condensed", sans-serif;
  text-shadow: 1px 1px 1px #00ffff, -1px -1px 1px #ff00ff, 1px 1px 1px #00ffff, -1px -1px 1px #ff0000;
  line-height: 0.8;
}

.sobre-bairro span {
  display: block;
}

.materias-carousel-container {
  padding: 20px;
}

.carousel__slide {
  flex-basis: 30%;
  margin: 0 2px;
  padding: 0;
}

.card {
  border: 2px solid #63ac86;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #63ac86;
  transition: transform 0.3s ease;
  width: 355px;
  margin: auto;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 350px;
  height: 300px;
  display: block;
  border-radius: 12px;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin-top: 0;
  font-size: 20px;
  text-transform: uppercase;
  text-shadow: 1px 1px 1px #00ffff, -1px -1px 1px #ff00ff, 1px 1px 1px #00ffff, -1px -1px 1px #ff0000;
}

.card-content p {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 18px;
  color: #090708;
  line-height: 1.5;
  margin-bottom: 15px;
}

.saiba-mais-button {
  display: inline-block;
  padding: 10px 15px;
  background-color: #cdcfc0;
  color: #090708;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.saiba-mais-button:hover {
  background-color: #bbbea8;
}

/* Media Queries */
@media (max-width: 425px) {
  .sobre-bairro h1 {
    font-size: 24px;
  }

  .card-content h3 {
    font-size: 16px;
  }

  .card-content p {
    font-size: 14px;
  }

  .carousel__slide {
    flex-basis: 100%;
    margin: 0 5px;
  }

  .card {
    width: 355px;
  }

  .card-image {
    width: 350px;
    height: 300px;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  .sobre-bairro h1 {
    font-size: 40px;
  }

  .card {
    width: 355px;
  }

  .carousel__slide {
    flex-basis: 50%;
  }

  .card-image {
    width: 350px;
    height: 300px;
  }

  .card-content h3 {
    font-size: 20px;
  }

  .card-content p {
    font-size: 18px;
  }
}

@media (min-width: 1025px) {
  .sobre-bairro h1 {
    font-size: 50px;
  }

  .card {
    width: 355px;
  }

  .card-image {
    width: 350px;
    height: 300px;
  }


  .card-content h3 {
    font-size: 22px;
  }

  .card-content p {
    font-size: 18px;
  }
}
</style>
