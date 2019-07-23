import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-olympikus-flashback/06/D22-1910-006/D22-1910-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-olympikus-flashback/06/D22-1910-006/D22-1910-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-olympikus-flashback/06/D22-1910-006/D22-1910-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-olympikus-flashback/06/D22-1910-006/D22-1910-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-olympikus-flashback/06/D22-1910-006/D22-1910-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-couro-olympikus-flashback/06/D22-1910-006/D22-1910-006_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tenis Muito Legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
