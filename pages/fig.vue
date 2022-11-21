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

    <!-- USUARIOS E FIGURINHAS DISPONÍVEIS-->

    <div class="container">
      <div class="notification is-primary">
        <div class="columns">
          <div class="column is-3">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>    
          </div>
          <div class="column is-3">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>    
          </div>
          <div class="column is-3">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>    
          </div>
          <div class="column is-3">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
                 <div class="buttons">
                   <b-button type="is-primary" expanded>Entrar em contato</b-button>
                 </div>
                </div>
              </div>
            </div>
            <br>
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Ben-Hur</p>
                    <p class="subtitle is-6">@benhurzinho</p>
                  </div>
                </div>

                <div class="content">
                 <p>Quantidade de figurinhas: XX</p>
                 <p>Estado da figurinha: nova/amassada</p>
                 <p>Preço: R$ XX,XX</p>
                 <p>Aceita trocas: Sim/Não</p>
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
    return { figurinha }
  },
    data() {
      return {
        vendedor: {
          nomevendedor: "Ben-Hur",
          fotovendedor: "https://bulma.io/images/placeholders/96x96.png",
          descricao: "../assets/time.png",
          qtdfigurinha: "Quantidade de figurinhas: XX",
          precofigurinha: "Preço: R$ XX,XX",
          trocas: "Aceita trocas: Sim/Não"
        },
      }
    },
    methods: {
    }
  }
  </script>
