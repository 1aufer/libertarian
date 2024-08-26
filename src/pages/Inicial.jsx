import React from "react";
import { Link } from "react-router-dom"; // Importe o Link para criar links internos
import "../styles/inicial.css";

export default function Inicial() {
  return (
    <div className="container">
      <h1 className="titulo">Bem-vindo ao Portal Libertário</h1>
      <div className="destaque-container">
        <div className="destaque-item">
          <img className="foto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxC1-87h5i4fU1UfDWwyHQXD1gsAb9RtbTkQ&s" alt="Símbolo do Anarcocapitalismo" />
          <h3>O que é Libertarianismo?</h3>
          <p>
            O libertarianismo é uma filosofia política que defende a eliminação do estado em favor de um sistema baseado em propriedade privada e mercado livre.
            Propõe que todas as funções do estado sejam substituídas por empresas privadas, associações voluntárias e contratos livres.
            Acredita na soberania do indivíduo e na liberdade de escolha como pilares fundamentais.
          </p>
          <Link to="/sobre/" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img className="foto" src="https://imageio.forbes.com/specials-images/imageserve/61cf16761f4d0446bb941f71/Bloomberg-Free-Markets-in-2050/960x0.png?format=png&width=960" alt="Capitalismo de Livre Mercado" />
          <h3>Princípios do Livre Mercado</h3>
          <p>
            No livre mercado, todas as transações são realizadas de forma voluntária sem coerção. Os preços são determinados pela oferta e demanda e os recursos são alocados de forma eficiente.
            Os defensores do anarcocapitalismo acreditam que o mercado livre é o melhor mecanismo para promover a inovação, a prosperidade e a cooperação social.
            Argumentam que a intervenção do estado distorce os sinais de mercado e leva a ineficiências.
          </p>
          <Link to="/principios/" className="saiba-mais-link">Saiba mais</Link>
        </div>
      </div>
    </div>
  );
}
