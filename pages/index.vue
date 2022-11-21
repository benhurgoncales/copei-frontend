<template>


  <div> 
   

    <!-- carousel com imagens -->

    <section>
      <b-carousel>
        <b-carousel-item>
          <b-image class="image"   :src="require('@/assets/capa1.png')"></b-image>
        </b-carousel-item>
        <b-carousel-item>
          <b-image class="image" :src="require('@/assets/capa2.png')"></b-image>
        </b-carousel-item>
        <b-carousel-item>
          <b-image class="image" :src="require('@/assets/capa3.png')"></b-image>
        </b-carousel-item>
      </b-carousel>
    </section>

    <section class="section mt-4">
      <div class="columns is-multiline">
        <div v-for ="grupo in grupos" :key="grupo.nome"   class="column is-3">
          <div>
              <h2 class="title is-2 has-text-centered">Grupo {{grupo.nomeGrupo}}</h2>     
                <router-link class="buttons" style=" padding: 10px; background-color: #862633; border-radius: 10px" v-for="selecao in grupo.selecoes" :key="selecao.id" :to="{ path: '/selecoes', query: {id: selecao.id}}"  >
                  <img class="bandeira mr-3" style="height: 30px;"
                    :src="selecao.fotoBandeira"
                    alt="">
                    {{selecao.pais}}
                </router-link>  
            </div>
        </div>
      </div>     
    </section>
  </div>
</template>

<script>
export default {
  
  async asyncData({ $axios }) {
    const grupos = await $axios.$get('/grupos/')
    return { grupos }
  },
 
}


</script>

