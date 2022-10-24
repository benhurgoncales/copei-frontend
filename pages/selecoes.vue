<template>
  <section class="section">
    <h1 class="title">{{selecao.pais}}</h1>
    <div class="columns ">
      <!-- COLUNA 1-->

      <div class="column">
        <!-- SEPARACAO EM 2 -->
        <div class="columns">
          <!--COLUNA BANDEIRA -->
          <div class="column">
            <figure class="image is-150x150">
              <img :src="selecao.fotoBandeira" />
            </figure>
          </div>

          <!-- COLUNA TIME-->

          <div class="column">
            <figure class="image is-150x150">
              <img :src="selecao.fotoTime" />
            </figure>
          </div>
        </div>

        <!-- SEPARACAO EM 4 -->
        <div class="columns mt-5">
          <!-- PRIMEIRA COLUNA -->
          <div class="column">
            <!-- Atleta 1 -->
            <div class="atleta mb-6">
              <figure class="image is-150x150">
                <img src="../assets/atleta.png" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded> Casemiro </b-button>
              </div>
            </div>

            <!-- Atleta 2 -->
            <div class="atleta mb-6">
              <figure class="image is-150x150">
                <img src="../assets/atleta.png" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded> Casemiro </b-button>
              </div>
            </div>
          </div>

          <!-- SEGUNDA COLUNA -->
          <div class="column">
            <!-- Atleta 1 -->
            <div class="atleta mb-6">
              <figure class="image is-150x150">
                <img src="../assets/atleta.png" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded> Casemiro </b-button>
              </div>
            </div>

            <!-- Atleta 2 -->
            <div class="atleta mb-6">
              <figure class="image is-150x150">
                <img src="../assets/atleta.png" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded> Casemiro </b-button>
              </div>
            </div>
          </div>

          <!-- TERCEIRA COLUNA -->
          <div class="column">
            <!-- Atleta 1 -->
            <div class="atleta mb-6">
              <figure class="image is-150x150">
                <img src="../assets/atleta.png" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded> Casemiro </b-button>
              </div>
            </div>

            <!-- Atleta 2 -->
            <div class="atleta mb-6">
              <figure class="image is-150x150">
                <img src="../assets/atleta.png" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded> Casemiro </b-button>
              </div>
            </div>
          </div>
          <!-- QUARTA COLUNA -->
          <div class="column">
            <!-- Atleta 1 -->
            <div class="atleta mb-6">
              <figure class="image is-150x150">
                <img src="../assets/atleta.png" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded> Casemiro </b-button>
              </div>
            </div>

            <!-- Atleta 2 -->
            <div class="atleta mb-5">
              <figure class="image is-150x150">
                <img src="../assets/atleta.png" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded> Alisson </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- COLUNAS 2 -->
      <div class="column ">
        <div class="columns is-multiline">
      
            <!-- ATLETAS B -->
            <div class="atleta mb-5 column is-3" v-for="jogador in jogadoresDireita" :key="jogador.nomejogador"  >
              <figure class="image is-150x150">
                <img :src="jogador.fotojogador" />
              </figure>
              <div class="buttons">
                <b-button type="is-primary" expanded>
                  {{jogador.nomejogador}}
                </b-button>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, query }) {
    const selecao = await $axios.$get('/api/selecoes/' + query.id + '/')
    return { selecao }
  },
  data() {
    return {
      time: {
        nometime: "Brasil",
        bandeira: "https://static.todamateria.com.br/upload/ba/nd/bandeiradobrasil-2-cke.jpg",
        fototime: "../assets/time.png",
      },


      jogadoresDireita: [
        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        },

        {
          nomejogador: "Qatar",
          fotojogador: "/_nuxt/assets/atleta.png"
        }
      ]
    }
  },
  methods: {
  }
}
</script>