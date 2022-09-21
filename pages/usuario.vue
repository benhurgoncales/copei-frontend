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
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
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
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="johnsmith@example.com"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input class="input" type="password" placeholder="********" />
            </div>
          </div>

          <div class="field">
            <label class="label">Telefone</label>
            <div class="control">
              <input class="input" type="tel" placeholder="(DDD) 12345-6789" />
            </div>
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
            <select>
              <option>BRA-1</option>
              <option>BRA-2</option>
              <option>BRA-3</option>
              <option>BRA-4</option>
              <option>BRA-5</option>
              <option>BRA-6</option>
            </select>
          </div>
          <br /><br />
          <p><strong>Selecione as condições da sua figurinha</strong></p>
          <br>
          <div class="select is-primary">
            <select>
              <option>Nova</option>
              <option>Leves amassados</option>
              <option>Amassada</option>
            </select>
          </div>
          <br /><br />
          <div class="control">
            <p><strong>Aceita trocas?</strong></p>
            <br>
            <label class="radio">
                <input type="radio" name="answer">
                Sim
            </label>
            <label class="radio">
                <input type="radio" name="answer">
                Não
            </label>
          </div>
          <br /><br />
          <p><strong>Valor da figurinha em R$</strong></p>
          <br />
          <input class="input" type="text" placeholder="R$ 00,00" />
          <br /><br />
          <button class="button is-primary">Adicionar figurinha</button>
        </form>
      </div>
    </div>
    <br />
  </section>
</template>
