<template>
  <section class="museu">
    <h1>Museu</h1>

    <div class="descricao">
      <p>
        A Secretaria de Educação, Cultura e Esporte (SEDUCE), por meio da Diretoria Municipal de Cultura, inaugurou no
        sábado, 14 de novembro de 2020, o Museu da Freguesia de Sant’Ana, no bairro Mirim. O evento, que marcou a
        abertura oficial do espaço, aconteceu a partir das 15h.

        Totalmente reformado, o museu tem como propósito principal valorizar a história do município, servindo como
        palco para exposições artísticas e culturais. A inauguração foi o ponto de partida de uma grande Ação Cultural
        que se estendeu por todo o fim de semana na comunidade.

        Alessandra Santos, então Diretora de Cultura, destacou a importância do novo espaço: "A reabertura deste espaço
        de memória reaviva a história do nosso município. O próprio local que sedia essas exposições já é considerado um
        patrimônio histórico, pois abrigou a primeira escola municipal, quando a cidade ainda pertencia a Laguna. Manter
        essas memórias vivas é uma forma de incentivar a população a valorizar nossa identidade cultural".
      </p>
    </div>

    <section class="galeria-fotos">
      <h2>Um pouco da história através de fotos</h2>
      <div class="galeria-grid">
        <div v-for="(foto, index) in fotos" :key="index" class="galeria-item" @click="openModal(foto)">
          <img :src="foto.src" :alt="foto.alt" class="galeria-imagem" />
        </div>
      </div>

      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <span class="close-button" @click="closeModal">&times;</span>
          <button class="nav-button nav-prev" @click="prevImage">&#10094;</button>

          <img :src="currentImage.src" :alt="currentImage.alt" class="modal-image" />

          <button class="nav-button nav-next" @click="nextImage">&#10095;</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
// Importe suas imagens aqui, como fizemos no carrossel
import foto1 from '../assets/img/img-01.jpg';
import foto2 from '../assets/img/img-02.jpg';
import foto3 from '../assets/img/img-03.jpg';
import foto4 from '../assets/img/img-04.jpg';
import foto5 from '../assets/img/img-05.jpg';
import foto6 from '../assets/img/img-06.jpg';
import foto7 from '../assets/img/img-07.jpg';

export default {
  name: 'GaleriaFotos',
  data() {
    return {
      fotos: [
        { src: foto1, alt: 'Descrição da Foto 1' },
        { src: foto2, alt: 'Descrição da Foto 2' },
        { src: foto3, alt: 'Descrição da Foto 3' },
        { src: foto4, alt: 'Descrição da Foto 4' },
        { src: foto5, alt: 'Descrição da Foto 4' },
        { src: foto6, alt: 'Descrição da Foto 4' },
        { src: foto7, alt: 'Descrição da Foto 4' },
      ],
      showModal: false,
      currentImage: null,
      currentIndex: 0,
    };
  },
  methods: {
    openModal(foto) {
      this.currentImage = foto;
      this.showModal = true;
      this.currentIndex = this.fotos.indexOf(foto);
    },
    closeModal() {
      this.showModal = false;
      this.currentImage = null;
      this.currentIndex = 0;
    },

    nextImage() {
      // Verifica se não é a última imagem
      if (this.currentIndex < this.fotos.length - 1) {
        this.currentIndex++;
      } else {
        // Se for a última, volta para a primeira imagem (loop)
        this.currentIndex = 0;
      }
      this.currentImage = this.fotos[this.currentIndex];
    },

    prevImage() {
      // Verifica se não é a primeira imagem
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        // Se for a primeira, vai para a última imagem (loop)
        this.currentIndex = this.fotos.length - 1;
      }
      this.currentImage = this.fotos[this.currentIndex];
    },
  },
};
</script>

<style scoped>
.museu {
  background-color: #63ac86;
}

h1, h2 {
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  font-family: "Barlow Condensed", sans-serif;
  text-shadow: 1px 1px 1px #00ffff, -1px -1px 1px #ff00ff, 1px 1px 1px #00ffff, -1px -1px 1px #ff0000;
  margin: 0 0 20px 0;
  padding-top: 12px;
}

.descricao p {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 19px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  text-align: justify;
  padding: 8px;
}

.galeria-fotos {
  padding: 40px 20px;
}

.galeria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.galeria-item {
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.galeria-item:hover {
  transform: scale(1.05);
}

.galeria-imagem {
  width: 100%;
  height: 200px;
  /* Ajuste para o tamanho desejado */
  object-fit: cover;
  display: block;
}

.galeria-item p {
  padding: 10px;
  font-size: 14px;
  color: #555;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px #63ac86;
  max-width: 90%;
  max-height: 90%;
  text-align: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 30px;
  font-weight: bold;
  color: #63ac86;
  cursor: pointer;
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  /* 80% da altura da viewport para a imagem */
  display: block;
  margin-bottom: 10px;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #63ac86;
  color: white;
  border: none;
  font-size: 2.5em;
  padding: 10px;
  cursor: pointer;
  z-index: 1001; /* Garante que o botão fique acima da imagem */
  border-radius: 5px;
  user-select: none; /* Impede a seleção do texto do botão */
}

.nav-button.nav-prev {
  left: 10px;
}

.nav-button.nav-next {
  right: 10px;
}

.nav-button:hover {
  background-color: #38ad6f;
}

/* Media Query para telas menores */
@media (max-width: 600px) {
  .galeria-grid {
    grid-template-columns: 1fr;
  }
}
</style>
