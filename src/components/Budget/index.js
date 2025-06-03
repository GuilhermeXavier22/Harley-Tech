import "./index.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import budgetsServices from "../../api/budgetsServices";
import { getDate, getTotalValue } from "../../helpers";

export const Budget = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [budget, setBudget] = useState({});

  const getBudget = async () => {
    const snapshot = await budgetsServices.getBudget(id);
    setBudget(snapshot);
  };

  const approveBudget = async () => {
    let data = budget;
    data.status = "Aprovado";
    await budgetsServices.updateBudget(data, id);
    navigate("/");
  };

  const declineBudget = async () => {
    let data = budget;
    data.status = "Recusado";
    await budgetsServices.updateBudget(data, id);
    navigate("/");
  };

  useEffect(() => {
    getBudget();
  }, []);

  return (
    <div className="orcamento-card">
      <h2>Aprovação de Orçamento</h2>

      <div className="orcamento-info">
        <p>
          <strong>Nº do Orçamento:</strong> #ORC-5287
        </p>
        <p>
          <strong>Data de Emissão:</strong>
          {getDate(budget.data_solicitacao)}
        </p>
        <p>
          <strong>Solicitado por:</strong> {budget.cliente?.nome}
        </p>
      </div>

      <table className="tabela-pecas">
        <thead>
          <tr>
            <th>Código</th>
            <th>Peça</th>
            <th>Qtde</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {budget?.pecas?.map((peca) => (
            <tr>
              <td>{peca.codigo || "HD-48"}</td>
              <td>{peca.nome}</td>
              <td>{peca.quantidade || 1}</td>
              <td>R$ {peca.valor || 100}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="orcamento-total">
        <strong>Total: R$ {getTotalValue(budget.pecas)}</strong>
      </div>

      <div className="orcamento-extra">
        <p>
          <strong>Prazo de Entrega Estimado:</strong> 3 a 5 dias úteis
        </p>
        <p>
          <strong>Forma de Pagamento:</strong> Pix, Boleto ou Cartão
        </p>
        <p>
          <strong>Estoque Atualizado:</strong>{" "}
          <span className="disponivel">✔ Disponível</span>
        </p>
      </div>

      <div className="orcamento-botoes">
        <button className="btn-aprovar" onClick={approveBudget}>
          APROVAR ORÇAMENTO
        </button>
        <button className="btn-rejeitar" onClick={declineBudget}>
          REJEITAR / SOLICITAR ALTERAÇÃO
        </button>
      </div>
    </div>
  );
};
