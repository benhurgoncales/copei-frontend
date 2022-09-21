<template>
  <div class="container is-fluid">

    <b-navbar shadow="true">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img style="max-height:70px"
                    src="https://github.com/benhurgoncales/copei-frontend/blob/master/assets/copeilogo.png?raw=true"
                    alt="Logo"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/estadios' }">
                Estadio
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/selecoes' }">
                Selecoes
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/fig' }">
                Figurinha
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/lendarias' }">
                Lendarias
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" href="/cadastro">
                        <strong>Cadastre-se</strong>
                    </a>
                    <a class="button is-light" href="/login">
                        Login
                    </a>
                    <a class="button is-light" href="/usuario">
                        Meu Login
                    </a>

                    
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

    <Nuxt/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Nuxt exemplo</strong> by Robson Luz. 
          <a target="_blank" href="https://fae.edu">FAE Centro Universitário</a>
        </p>
      </div>
    </footer>      
    
  </div>
</template>

