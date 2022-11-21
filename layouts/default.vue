<template>
    <div class="container" style="padding:0px;">
  
      <b-navbar style="border-bottom:0.5px solid #555;">
          <template #brand>
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img style="max-height:70px"
                      src="https://github.com/benhurgoncales/copei-frontend/blob/master/assets/copeilogo.png?raw=true"
                      alt="Logo">
              </b-navbar-item>
          </template>
          <template #start>
              <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  Home
              </b-navbar-item>
              <b-navbar-item tag="router-link" :to="{ path: '/estadios' }">
                  Estadio
              </b-navbar-item>
              <b-navbar-item tag="router-link" :to="{ path: '/pagina1' }">
                  Primeira Pagina
              </b-navbar-item>
              <b-navbar-item tag="router-link" :to="{ path: '/campeoes' }">
                  Museu dos Campeoes
              </b-navbar-item>
              <b-navbar-item tag="router-link" :to="{ path: '/lendarias' }">
                  Lendarias
              </b-navbar-item>
  
             
          </b-field>
          </template>
  
           <template #end>
              <template v-if="currentUser">
                <b-navbar-item tag="div">
                <div class="buttons">
                  <b-navbar-item tag="div">
                      {{currentUser.user}}
                  </b-navbar-item>  
                        <b-navbar-item tag="router-link" :to="{ path: '/usuario' }">
                            Adicionar Figurinha
                        </b-navbar-item>                       
                          <a class="button" @click="sair()">
                              <strong>Sair</strong>
                          </a>
                      </div>
                  </b-navbar-item>                                        
              </template>
              <template v-else>            
                  <b-navbar-item tag="div">
                      <div class="buttons">
                          <a class="button is-primary" @click="entrarCadastrar()">
                              <strong>Entrar/Cadastrar</strong>
                          </a>
                      </div>
                  </b-navbar-item>
              </template>    
          </template>
      </b-navbar>
  
      <Nuxt/>
  
      <footer class="footer" style="background-color:  #862633;">
        <div class="content has-text-centered" >
          <p style="color: white">
            <strong>@Copei</strong> by Ben-Hur de Oliveira, Jose Elias, Victor Callegim. 
            <a target="_blank" href="https://fae.edu">FAE Centro Universitário</a>
          </p>
        </div>
      </footer>      
      
    </div>
  </template>
  
  <script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  export default {
      computed: {
        currentUser () {
          return this.$store.getters.getCurrentUser
        }
      },
      methods: {
        posLogin(response) {
          var self = this;
          console.log('resposta do login');
          console.log('logado', response);
          var data = response.data;
          if(data && data.id) {
            self.$store.dispatch('setCurrentUser', data);
            self.$axios.get('currentusuario/').then((responseUsuario) => {
              console.log('usuario logado');
              console.log(responseUsuario.data);
              //Coloque aqui a rota para quem já está cadastrado
              self.$router.push({ path: '/', force:true, reload:true });
            }).catch(function (error) {
              console.log('nao existe usuario cadastrado', error)
              //Coloque aqui a sua rota de cadastro
              self.$router.push({ path: 'cadastro', force:true, reload:true });
            })
          }
        },
        entrarCadastrar() {
          var provider = new GoogleAuthProvider();
          var self = this;
          const auth = getAuth();
          signInWithPopup(auth, provider).then((result) => {
              console.log(result.user);
              var pass = result.user.uid;
              var email = result.user.email;
              console.log(email, pass);
              const formData = new FormData();
              formData.append('username', email);
              formData.append('password', pass);
              
              self.$axios.post('login/', formData).then((response) => {
                self.posLogin(response);
              }).catch(function (error) {
                console.log('error', error);
                if (error.response && error.response.data) {
                  var user = {
                    username: email,
                    password: pass
                  };
                  self.$axios.post('user-registration/', user).then((responseUr) => {
                    console.log(responseUr);
                    self.$axios.post('login/', formData).then((responseLogin) => {
                      self.posLogin(responseLogin);
                    });
                  });
                }
                
              });
          }).catch((error) => {
              console.log(error);
          });
        },
        sair() {      
          var self = this;
          this.$axios.get('logout/').then((responseLogout) => {
            console.log('logout', responseLogout);
            self.$store.dispatch('setCurrentUser', null);
            self.$router.push({ path: '/', force:true, reload:true });
          });
        }
      }    
  }
  </script>
  
