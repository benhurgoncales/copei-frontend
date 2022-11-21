<template>
  <section class="section">

    <!-- HEADER DA FIGURINHA -->

   <div class="columns">
      <div class="column is-3">
        <figure class="image is-150x150">
          <img :src="figurinha.fotoFig" />
        </figure>
       
      </div>
      <div class="column is-9">
        <h2 class="title is-2 has-text-centered"> {{figurinha.nomeFig}} |  {{figurinha.numero}}</h2>
        <p><strong>Descrição da figurinha:</strong></p>
        <br>
        <p> {{figurinha.numero}} | {{figurinha.nomeFig}}</p>
        <br>
        <p> <strong>Número de figurinhas disponíveis/cadastradas no site:</strong> </p>
        <br>
        <p>XXX</p>
        <br>
        <p> <strong>Preço médio das figurinhas cadastradas no site:</strong> </p>
        <br>
        <p> R$ XXX,XX </p>
      </div>
    </div>
    <h3 class="title is-3">Vendedores: </h3>
    <!-- USUARIOS E FIGURINHAS DISPONÍVEIS-->

    <div class="container">
      <div class="notification is-primary">
        <div class="columns">
          <div class="column is-3" v-for="cadfigurinha in cadfigurinhas" :key="cadfigurinha.id" >
            <div class="card">
              <div class="card-content">
                <div class="media">
            
                  <div class="media-content">
                    <p class="title is-4">{{cadfigurinha.vendedores.user}}</p>
                    <p class="subtitle is-6">{{cadfigurinha.vendedores.email}}</p>
                  </div>
                </div>
                <div class="content">
                 <p>Estado da figurinha: {{cadfigurinha.condicao}}</p>
                 <p>Preço: R${{cadfigurinha.preco}}</p>
                 <p>Aceita trocas: 
                  <span v-if="cadfigurinha.aceitaTroca">Sim</span>
                  <span v-else> Nao </span>
                </p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
   

  </section>
</template>

<script>
  export default {
     async asyncData({ $axios , query }) {
    const figurinha = await $axios.$get('/figurinhas/'+ query.id + "/") 
    const cadfigurinhas = await $axios.$get('/cadastro-fig-filter/?figurinha='+ query.id + "")
    return { figurinha, cadfigurinhas }
  },
    methods: {
    }
  }
  </script>
