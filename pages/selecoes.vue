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
        <div class="columns  is-multiline">

          <div class="column is-3" v-for="figurinha in selecao.figurinhas" :key="figurinha.id" v-if = "figurinha.escudo" >
              <figure class="image is-150x150">
                <img :src="figurinha.fotoFig" />
              </figure>
              <div class="buttons">
                <router-link  :to="{ path: '/fig', query: {id: figurinha.id} }" type="is-primary" expanded> 
                  {{figurinha.nomeFig}}
                 </router-link>
              </div>
            </div>    
          <!-- PRIMEIRA COLUNA -->
          <div class="column is-3" v-for="figurinha in selecao.figurinhas" :key="figurinha.id" v-if = "figurinha.jogador && figurinha.num <10" >
            <!-- Atleta 1 -->
          
          
            <div class="atleta " >
              <figure class="image is-150x150">
                <img :src="figurinha.fotoFig" />
              </figure>
              <div class="buttons">    
                 
                <router-link  :to="{ path: '/fig', query: {id: figurinha.id} }" type="is-primary" expanded> {{figurinha.nomeFig}} </router-link>    
                 
              </div>
            </div>  
          </div>
        </div>
      </div>


      <!-- COLUNAS 2 -->
      <div class="column ">
        <div class="columns is-multiline">
      
            <!-- ATLETAS B -->
               
          
            <div class="column is-3" v-for="figurinha in selecao.figurinhas" :key="figurinha.id" v-if = "figurinha.jogador && figurinha.num >= 10">
              <figure class="image is-150x150">
                <img :src="figurinha.fotoFig" />
              </figure>
              <div class="buttons">
                <router-link  :to="{ path: '/fig', query: {id: figurinha.id} }" type="is-primary" expanded> 
                  {{figurinha.nomeFig}}
                </router-link>
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