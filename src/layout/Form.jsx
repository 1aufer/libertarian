import { useState } from 'react';

function Form() {
  const [nome, escolheNome] = useState('');
  const [idade, escolheIdade] = useState('');
  const [email, escolheEmail] = useState('');
  const [filosofia, escolheFilosofia] = useState('Não sei');


  const lidarResultado= (e) => {
    e.preventDefault();
    console.log({ nome, idade, email, filosofia });
  };


  return (
    <form onSubmit={lidarResultado} className="formulario">
      <div className="form-group">
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => escolheNome(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Idade:
          <input
            type="number"
            value={idade}
            onChange={(e) => escolheIdade(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Email:
          <input
            type="email"s
            value={email}
            onChange={(e) => escolheEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Filosofia Libertária:
          <select
            value={filosofia}
            onChange={(e) => escolheFilosofia(e.target.value)}
          >
            <option value="Brutalista">Brutalista</option>
            <option value="Gradualista">Gradualista</option>
            <option value="Agorista">Agorista</option>
            <option value="Não sei">Não sei</option>
          </select>
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
