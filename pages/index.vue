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
              <h2 class="title is-2 has-text-centered">{{grupo.nomeGrupo}}</h2>


              <a div v-for="selecao in grupo.selecoes" :key="selecao.nome"  class="buttons" href="/selecoes" >
                <b-button type="is-primary" expanded>
                  <img style="height: 30px;"
                    :src="selecao.fotoBandeira"
                    alt="">
                  {{selecao.pais}}
                </b-button>
              </a>
            </div>
        </div>
      </div>     
    </section>
  </div>
</template>

<script>
export default {
  
  async asyncData({ $axios }) {
    const grupos = await $axios.$get('/api/grupos/')
    return { grupos }
  },
  data() {
    return {
      gruposx: [
        {
          nome: "Grupo A",
          selecoes: [
            {
              nome: "Qatar",
              bandeira: "https://cdn.iconscout.com/icon/free/png-256/qatar-flag-country-nation-union-empire-33060.png"
            },
            {
              nome: "Equador",
              bandeira: "https://cdn.iconscout.com/icon/free/png-256/ecuador-flag-country-nation-union-empire-32962.png"
            },

            {
              nome: "Senegal",
              bandeira: "https://flagdownload.com/wp-content/uploads/Flag_of_Senegal_Flat_Square-256x256.png"
            },

            {
              nome: "Holanda",
              bandeira: "https://hth.guide/wp-content/uploads/country_icons/netherlands_flag-png-square-icon-256.png"
            }
          ]
        },

        {
          nome: "Grupo B",
          selecoes: [
            {
              nome: "Inglaterra",
              bandeira: "https://cdn.iconscout.com/icon/free/png-256/england-3596694-2998737.png"
            },

            {
              nome: "Iran",
              bandeira: "https://cdn-icons-png.flaticon.com/128/6211/6211460.png"
            },

            {
              nome: "Estados Unidos",
              bandeira: "https://igrejacristovive.com.br/wp-content/uploads/2022/06/flag-us.svg"
            },

            {
              nome: "Pais de Gales",
              bandeira: "https://livinlavidarick.files.wordpress.com/2016/02/flag_of_wales_2-svg.png"
            }

          ]
        },

        {
          nome: "Grupo C",
          selecoes: [
            {
              nome: "Argentina",
              bandeira: "https://static3.depositphotos.com/1000572/119/i/450/depositphotos_1196003-stock-photo-flag-of-argentine.jpg"
            },

            {
              nome: "Arabia Saudita",
              bandeira: "https://portallubes.com.br/wp-content/uploads/2020/04/Flag_of_Saudi_Arabia.svg_.png"
            },

            {
              nome: "Mexico",
              bandeira: "https://www.infomigrantes.com/wp-content/uploads/2020/12/ilustracion-bandera-mexico_53876-18169.jpg"
            },

            {
              nome: "Polonia",
              bandeira: "https://i.pinimg.com/736x/ec/de/01/ecde018381198779faf1ea9c60119d7f.jpg"
            }

          ]
        },

        {
          nome: "Grupo D",
          selecoes: [
            {
              nome: "Franca",
              bandeira: "https://static.todamateria.com.br/upload/fr/an/frana_a.jpg"
            },

            {
              nome: "Australia",
              bandeira: "https://a-static.mlcdn.com.br/800x560/bandeira-australia-estampada-uma-face-090x128m-patria-bordados/patriabandeiras/1013p/d39fe2ccdaf0da6d78d40f243f21f58e.jpg"
            },

            {
              nome: "Dinamarca",
              bandeira: "https://comprarbandeira.com.br/wp-content/uploads/2021/02/Dinamarca.jpg"
            },

            {
              nome: "Tunisia",
              bandeira: "http://geo5.net/imagens/bandeira-do-imperio-otomano-2000px.png"
            }

          ]
        },

        {
          nome: "Grupo E",
          selecoes: [
            {
              nome: "Espanha",
              bandeira: "https://i.pinimg.com/originals/5e/5a/0d/5e5a0d9f894e9a426a6a573cf5e31027.jpg"
            },

            {
              nome: "Costa Rica",
              bandeira: "https://impariamo.com.br/wp-content/uploads/2019/04/Bandeira-Costa-Rica-900x540.png"
            },

            {
              nome: "Alemanha",
              bandeira: "https://s3.amazonaws.com/images.wpr.com/flag-pages/png250/de.png"
            },

            {
              nome: "Japao",
              bandeira: "https://st.depositphotos.com/1022597/3292/i/600/depositphotos_32924593-stock-photo-flag-of-japan-vignetted.jpg"
            }

          ]
        },

        {
          nome: "Grupo F",
          selecoes: [
            {
              nome: "Belgica",
              bandeira: "https://i.pinimg.com/736x/ab/38/61/ab386157861d48ee217ddbf9f7af9188.jpg"
            },

            {
              nome: "Canada",
              bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Canada_%283-2%29.svg/640px-Flag_of_Canada_%283-2%29.svg.png"
            },

            {
              nome: "Marrocos",
              bandeira: "https://i.pinimg.com/736x/df/03/0e/df030e22bc648c1a30406ebbef2fbbd7--national-flag-north-africa.jpg"
            },

            {
              nome: "Croacia",
              bandeira: "https://www.estudopratico.com.br/wp-content/uploads/2016/06/bandeira-croacia.jpg"
            }

          ]
        },

        {
          nome: "Grupo G",
          selecoes: [
            {
              nome: "Brasil",
              bandeira: "https://static.todamateria.com.br/upload/ba/nd/bandeiradobrasil-2-cke.jpg"
            },

            {
              nome: "Servia",
              bandeira: "https://www.lifeder.com/wp-content/uploads/2019/11/Serbia7.png"
            },

            {
              nome: "Suica",
              bandeira: "https://s4.static.brasilescola.uol.com.br/be/2022/04/bandeira-da-suica.jpg"
            },

            {
              nome: "Camaroes",
              bandeira: "https://cidadeolimpica.com.br/wp-content/uploads/2021/08/bandeira-camaroes.png"
            }

          ]
        },

        {
          nome: "Grupo H",
          selecoes: [
            {
              nome: "Portugal",
              bandeira: "https://www.leme.pt/magazine/efemerides/0630/0100.jpg"
            },

            {
              nome: "Gana",
              bandeira: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png"
            },

            {
              nome: "Uruguai",
              bandeira: "https://a-static.mlcdn.com.br/1500x1500/bandeira-oficial-do-uruguai-jc-bandeiras/inoxstore/banduru/b4eabd7ab8315fae0b9c69d5cd3b7d65.jpg"
            },

            {
              nome: "Coreia do Sul",
              bandeira: "https://maestrovirtuale.com/wp-content/uploads/2019/10/640px-Flag_of_South_Korea_1945%E2%80%931948.svg_-1.png"
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>

