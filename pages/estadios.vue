<template>
  <section>
    <!-- TITULO -->
    <h1 class="title is-1 mb-5 mt-5">Estadios</h1>
    

    <!-- COLUNAS -->
    <div class="columns is-multiline">
      <!-- COLUNAS 1-->
      <div v-for = 'figurinha in figurinhas' :key="figurinha.id" class="column is-3">
        <!-- ESTADIO 1 -->
        <div class="estadio mb-5" >
          <router-link :to="{ path: '/fig', query: { id: figurinha.id } }" type="is-primary" expanded>
          <figure class="image is-150x150">
            <img :src="figurinha.fotoFig" />
          </figure>
        </router-link>
        </div>
      </div>

     

    </div>

  </section>
</template>

<script>
export default {
  
  async asyncData({ $axios }) {
    const figurinhas = await $axios.$get('/figurinhas-estadio/')
    return { figurinhas }
  },
 
}


</script>


