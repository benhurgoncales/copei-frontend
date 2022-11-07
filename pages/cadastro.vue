<template>
    <section class="section">
        <div class="columns is-centered">
            <div class="column is-4">
                <form class="box">
                    <div class="field">
                        <label class="label">Nome Completo</label>
                        <div class="control">
                            <input v-model ='usuario.user' class="input" placeholder="Nome Completo">
                        </div>
                    </div>


                    <b-field label="Estado">
                        <b-select v-model = 'usuario.estado' placeholder="Estado" icon="earth">

                            <option value="Parana">Parana</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Sao Paulo">Sao Paulo</option>
                            <option value="flint">Manaus</option>
                            <option value="flint">Brasilia</option>
                            <option value="flint">Salvador</option>


                        </b-select>
                      
                                        
                        <b-select v-model='usuario.cidade' placeholder="Cidade" icon="earth">

                            <option value="flint">Curitiba</option>
                            <option value="flint">Cascavel</option>
                            <option value="Pato Branco">Pato Branco</option>
                            <option value="Marechal">Marechal</option>

                        </b-select>

                    </b-field>

          
                   <div class="field">
                        <label class="label">Telefone</label>
                        <div class="control">
                            <input v-model='usuario.telefone' class="input"  >
                        </div>
                    </div>


                    <div class="field">
                        <label class="label">email</label>
                        <div class="control">
                            <input v-model='usuario.email' class="input" type="email" placeholder="e.g. alex@example.com">
                        </div>
                    </div>


                


                    <button class="button is-primary" @click='cadastrar()'> Entrar</button>
                </form>
            </div>
        </div>

    </section>


</template>

<script>
  
export default {
    data(){
        return {
            usuario: {
              user: '',
              email: '',
              telefone: '',
              cidade: '',
              estado: ''
            },
            currentUser: null,
            cidades: []
        }
    },  
    created() {
      var self = this;
    
      
      //Busca o usuario logado para já preencher o e-mail na tela de cadastro
      this.$axios.get('currentuser/').then((response) => {
        console.log(response);
        self.currentUser = response.data;
        if(response.data) {
          self.usuario.email = response.data.username;
        }
      })        
    },
    methods: {
      cadastrar() {
          var self = this;
          if(this.currentUser == null) {
            self.$buefy.dialog.alert('Você ainda não está logado no site. Favor fazer o login com o seu gmail no menu Entrar/Cadastrar!');
          }else{
         
            //Chama a api para criar o usuário
            this.$axios.post('usuarios-create/', this.usuario).then((response) => {
              console.log(response);
              //Mostra a mensagem de sucesso
              self.$buefy.dialog.alert('Cadastro realizado com sucesso!')
              //Navega para a home após o cadastro, pode ser alterado para qualquer rota
              self.$router.replace({ path: '/', force:true });
            })
          }
      }
    }  
}
</script>