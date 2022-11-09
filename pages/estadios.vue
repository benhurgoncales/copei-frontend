<template>
  <section>
    <!-- TITULO -->
    <h1 class="title is-1 mb-5 mt-5">Estadios</h1>
    

    <!-- COLUNAS -->
    <div class="columns">
      <!-- COLUNAS 1-->
      <div class="column is-3">
        <!-- ESTADIO 1 -->
        <div class="estadio mb-5" >
          <figure class="image is-150x150">
            <img src="../assets/AL BAYT .png" />
          </figure>
          <div class="buttons">
            <b-button type="is-primary" expanded> Al bayt Satadium </b-button>
          </div>
        </div>

        <!-- ESTADIO 2 -->
        <div class="estadio mb-5">
          <figure class="image is-150x150">
            <img src="../assets/QATAR FOUNDATION .png" />
          </figure>
          <div class="buttons">
            <b-button type="is-primary" expanded>Qatar</b-button>
          </div>
        </div>
      </div>

      <!-- COLUNAS 2-->
      <div class="column is-3">
        <div class="estadio mb-5">
          <figure class="image is-150x150">
            <img src="../assets/KHALIFA .png" />
          </figure>
          <div class="buttons">
            <b-button type="is-primary" expanded
              >Khalifa International</b-button
            >
          </div>
        </div>

        <div class="estadio mb-5">
          <figure class="image is-150x150">
            <img src="../assets/AL WAKRAH .png" />
          </figure>
          <div class="buttons">
            <b-button type="is-primary" expanded>Stadium 974</b-button>
          </div>
        </div>
      </div>

      <!-- COLUNAS 3-->

      <div class="column is-3">
        <figure class="image is-150x150">
          <img src="../assets/AL THUMAMA .png" />
        </figure>
        <div class="buttons">
          <b-button type="is-primary" expanded>Qatar</b-button>
        </div>

        <figure class="image is-150x150">
          <img src="https://www.cimentoitambe.com.br/wp-content/uploads/2021/11/Al-Janoub.jpg" />
        </figure>
        <div class="buttons">
          <b-button type="is-primary" expanded>Qatar</b-button>
        </div>
      </div>

      <!-- COLUNAS 4-->

      <div class="column is-3">
        <div class="estadio mb-5">
          <figure class="image is-150x150">
            <img src="../assets/RAS ABU  ABOUD.png" />
          </figure>
          <div class="buttons">
            <b-button type="is-primary" expanded>Al Thumama</b-button>
          </div>
        </div>

        <div class="estadio mb-5">
          <figure class="image is-150x150">
            <img src="../assets/AL RAYYAN .png" />
          </figure>
          <div class="buttons">
            <b-button type="is-primary" expanded>Al Janoub</b-button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  
  async asyncData({ $axios }) {
    const grupos = await $axios.$get('/estadios/')
    return { estadios }
  },
 
}


</script>


