<template>
  <section>
    <div class="columns">
      <div class="column is-6">
        <br />
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <form class="box">
          <div class="title">Meu Cadastro</div>
          <div class="info mb-2">
            <div><strong>Email</strong></div>
            <div>usuario@gmail.com</div>
          </div>

          <div class="info mb-2">
            <div><strong>Telefone</strong></div>
            <div>(41) 1234-5432</div>
          </div>

          <div class="field">
            <label class="label">Estado</label>
            <div class="control">
              <div class="select is-primary">
                <select>
                  <option>Acre - AC</option>
                  <option>Alagoas - AL</option>
                  <option>Amapá - AM</option>
                  <option>Amazonas - AM</option>
                  <option>Bahia - BA</option>
                  <option>Ceara - CE</option>
                  <option>Distrito Federal - DF</option>
                  <option>Espírito Santo - ES</option>
                  <option>Goiás - GO</option>
                  <option>Maranhão - MA</option>
                  <option>Mato Grosso - MT</option>
                  <option>Mato Grosso do Sul - MS</option>
                  <option>Minas Gerais - MG</option>
                  <option>Pará - PA</option>
                  <option>Paraná - PR</option>
                  <option>Pernambuco - PE</option>
                  <option>Piauí - PI</option>
                  <option>Rio de Janeiro - RJ</option>
                  <option>Rio Grande do Norte - RN</option>
                  <option>Rio Grande do Sul - RS</option>
                  <option>Rondônia - RO</option>
                  <option>Roraima - RR</option>
                  <option>Santa Catarina - SC</option>
                  <option>São Paulo - SP</option>
                  <option>Sergipe - SE</option>
                  <option>Tocantins - TO</option>

                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Cidade</label>
            <div class="control">
              <div class="select is-primary">
                <select>
                  <option>Curitiba</option>
                  <option>Londrina</option>
                  <option>Maringa</option>
                  <option>Castro</option>
                  <option>Quatro Barras</option>
                  <option>Paranaguá</option>
                </select>
              </div>
            </div>
          </div>

          <button class="button is-primary">Editar</button>
        </form>

        <form class="box">
          <div class="title">Figurinhas Cadastradas</div>
          <div class="card mb-2" v-for="cad in cadFigurinhas" :key="cad.id">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="cad.figurinha.fotoFig" alt="Placeholder image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4"> {{cad.figurinha.numero}} | {{cad.figurinha.nomeFig}} | R$ {{cad.preco}} <button class="button is-primary ml-6">Excluir</button></p>
              </div>
            </div>
          </div>
          </div>

          
         
        </form>

      </div>
      <div class="column is-6">
        <br />
        <form class="box">
          <div class="title">CADASTRAR FIGURINHA</div>
          <p><strong>Selecione a seleção</strong></p>
          <br>
          <div class="select is-primary">
            <select>
              <option>Brasil</option>
              <option>Argentina</option>
              <option>Alemanha</option>
              <option>Túnisia</option>
              <option>Croácia</option>
            </select>
          </div>
          <br /><br />
          <p><strong>Selecione o número da figurinha</strong></p>
          <br>
          <div class="select is-primary">
            <select v-model='cadastroFig.figurinha'>
              <option v-for="figurinha in figurinhas" :key="figurinha.id" :value="figurinha.id">{{ figurinha.numero }}
              </option>

            </select>
          </div>
          <br /><br />
          <p><strong>Selecione as condições da sua figurinha</strong></p>
          <br>
          <div class="select is-primary">
            <select v-model='cadastroFig.condicao'>
              <option value="Nova">Nova</option>
              <option value="Leves Amassados">Leves amassados</option>
              <option value="Amassada">Amassada</option>
            </select>
          </div>
          <br /><br />
          <div class="control">
            <p><strong>Aceita trocas?</strong></p>
            <br>
            <label class="radio">
              <input v-model='cadastroFig.aceitaTroca' :value="true" type="radio" name="answer">
              Sim
            </label>
            <label class="radio">
              <input v-model='cadastroFig.aceitaTroca' :value="false" type="radio" name="answer">
              Não
            </label>
          </div>
          <br />
          <strong>Valor da figurinha em R$</strong>
          <br>
          <input v-model='cadastroFig.preco' class="input" type="text" placeholder="R$ 00,00" />
          <br /><br />
          <button @click="cadastrar()" class="button is-primary">Adicionar figurinha</button>
        </form>
      </div>
    </div>
    <br />
  </section>
</template>

<script>
export default {
  data() {
    return {
      cadastroFig: {
        condicao: '',
        aceitaTroca: false,
        preco: null,
        figurinha: null,
      },
      currentUser: null,

    }
  },
  async asyncData({ $axios }) {
    const figurinhas = await $axios.$get('/figurinhas/')
    const cadFigurinhas = await $axios.$get('/cadastro-fig/')
    return { figurinhas, cadFigurinhas}
  },
  created() {
    var self = this;


    //Busca o usuario logado para já preencher o e-mail na tela de cadastro
    this.$axios.get('currentuser/').then((response) => {
      console.log(response);
      self.currentUser = response.data;

    })
  },
  methods: {
    cadastrar() {
      var self = this;
      if (this.currentUser == null) {
        self.$buefy.dialog.alert('Você ainda não está logado no site. Favor fazer o login com o seu gmail no menu Entrar/Cadastrar!');
      } else {

        //Chama a api para criar o usuário
        this.$axios.post('cadastro-fig-create/', this.cadastroFig).then((response) => {
          console.log(response);
          //Mostra a mensagem de sucesso
          self.$buefy.dialog.alert('Cadastro realizado com sucesso!')
          //Navega para a home após o cadastro, pode ser alterado para qualquer rota
          self.$router.replace({ path: '/usuario', force: true });
        })
      }
    }
  }
}
</script>