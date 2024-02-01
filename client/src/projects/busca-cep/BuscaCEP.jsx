import React, { useEffect } from "react";

export default function BuscaCEP() {
  async function imports() {
    try {
      await import("./app");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    imports();
  }, []);

  return (
    <>
      <h1 class="mt-2 mb-4">Requisição AJAX</h1>
      <form action="" class="mb-4">
        <div class="card mb-4">
          <div class="card-header">
            <h2>Cadastro</h2>
          </div>
          <div class="card-body">
            <div class="row justify-content-center">
              <div class="col-4 form-group">
                <span>CEP</span>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="CEP"
                  class="form-control"
                  required
                />
              </div>

              <div class="col-4 form-group">
                <span>Rua</span>
                <input
                  type="text"
                  id="rua"
                  name="rua"
                  placeholder="Rua"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-4 form-group">
                <span>Bairro</span>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  placeholder="Bairro"
                  class="form-control"
                  required
                />
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-5 form-group">
                <span>Complemento</span>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  placeholder="Complemento"
                  class="form-control"
                />
              </div>
              <div class="col-3 form-group">
                Estado
                <select
                  id="estados"
                  class="form-control"
                  name="estados"
                  required
                >
                  <option selected hidden disabled>
                    Estado
                  </option>
                </select>
              </div>
              <div class="col-4 form-group">
                Cidade
                <select id="cidade" class="form-control" name="cidade" required>
                  <option selected hidden disabled>
                    Cidade
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              value="submit"
              id="btn-cadastrar"
              class="btn btn-primary mr-2"
            >
              Cadastrar endereço
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              id="loading-icon"
              class="bi bi-hourglass"
              viewBox="0 0 16 16"
              style="display: none"
            >
              <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
            </svg>
          </div>
        </div>
      </form>

      <div class="registros">
        <div class="card">
          <div class="card-header d-flex aling-items">
            <h2>Registros</h2>
            <button id="btn-consultar" class="btn btn-success ml-2">
              Consultar
            </button>
          </div>
          <div class="card-body">
            <div id="bq-resultado" class="blockquote"></div>
          </div>
        </div>
      </div>
    </>
  );
}
