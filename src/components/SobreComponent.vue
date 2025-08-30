<template>
  <section class="sobre">
    <h1>Sobre</h1>
    <div class="sobre_text">
      <p>
        Vamos conhecer um pouco sobre a Sociedade Cultural Freguesia do Mirim.
        Foi fundada no dia 9 de junho de 2005, no Distrito de Mirim, Cidade de Imbituba, SC, com o nome de Sociedade
        Cultural Professor Doutor Antônio Manuel Bettencourt Machado Pires da Freguesia de Mirim, sem fins lucrativos, de
        natureza privada.
        Com os objetivos de promover e divulgar a cultura e o patrimônio material (edificação, acervo de museu,
        biblioteca) e imaterial (dança, festa que marca a vivência coletiva de religiosidade, culinária, conto, caso)
        dentro e fora da comunidade, com atenção à ética e a verdade científica.
        A sociedade foi constituída com a finalidade de manter um espaço de memória, um centro de documentos históricos,
        apoiando as manifestações culturais e artísticas, possibilitando o acesso, a divulgação e a participação da
        comunidade nas ações por ela elaborada, especialmente, suprindo as necessidades culturais das pessoas ou segmentos
        culturais diversos.
      </p>
      <span></span>
      <p>
        Voltada também em promover o intercambio entre crianças, jovens, adultos e terceira idade, difundindo-os entre
        outras culturas e ampliando o conhecimento por eles adquiridos.
        Quanto ao uso saudável e sustentável do planeta e de seus recursos, consta no estatuto da sociedade, que a mesma
        deve defender e preservar o meio ambiente, promovendo o desenvolvimento sustentável.

        A sociedade organizou a festa dos 150 anos de aniversário do Mirim, no dia 28 de abril de 2006. Também participa
        da noite da Cultura Açoriana, das festividades da Padroeira Sant’Ana e do Divino Espírito Santo, na Comunidade.
        Faz parcerias com instituições de ensino, principalmente a escola da comunidade, Escola de Ensino Básico Prof.
        Marcílio Dias S. Thiago.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Estilos globais para a seção */
.sobre {
  background-color: #cdcfc0;
  padding: 18px 0;
}

h1 {
  margin: 0;
  padding-top: 18px;
  padding-bottom: 28px;
  text-align: center;
  text-transform: uppercase;
  font-style: italic;
  font-size: 31px;
  font-family: "Barlow Condensed", sans-serif;
  text-shadow: 1px 1px 1px #00ffff, -1px -1px 1px #ff00ff, 1px 1px 1px #00ffff, -1px -1px 1px #ff0000;
}

/* Contêiner principal com Flexbox para layout lado a lado */
.sobre_text {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px; /* Espaço entre os parágrafos e a linha */
}

.sobre p {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 19px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  text-align: justify; /* Melhora a leitura dos parágrafos */
  max-width: 511px; /* Limita a largura em telas grandes, mas permite fluidez */
  height: 480px;

}

.sobre span {
  width: 3px;
  height: 300px;
  background-color: #090708;
  flex-shrink: 0; /* Impede a linha de encolher */
}

/* --- Breakpoints --- */

/* Telas muito pequenas (max-width: 480px) */
@media (max-width: 480px) {
  h1 {
    font-size: 26px;
    padding-bottom: 20px;
  }

  .sobre_text {
    flex-direction: column; /* Organiza os parágrafos em coluna */
    gap: 20px;
    padding: 0 10px; /* Adiciona um espaçamento nas laterais */
  }

  .sobre p {
    font-size: 16px;
    max-width: 100%; /* Permite que o parágrafo ocupe a largura total */
    height: auto; /* Remove altura fixa */
    text-align: center;
  }

  .sobre span {
    display: none; /* Esconde a linha divisória */
  }
}

/* Telas médias (min-width: 481px and max-width: 1024px) */
@media (min-width: 481px) and (max-width: 1024px) {
  .sobre_text {
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo */
    gap: 20px;
    padding: 0 20px;
  }

  .sobre p {
    font-size: 17px;
    max-width: 100%;
    height: auto;
    text-align: justify;
  }

  .sobre span {
    display: none;
  }
}

/* Telas grandes (min-width: 1025px) */
@media (min-width: 1025px) {
  .sobre_text {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  .sobre p {
    text-align: justify;
  }

  .sobre span {
    display: block; /* Garante que a linha apareça em telas grandes */
  }
}
</style>
