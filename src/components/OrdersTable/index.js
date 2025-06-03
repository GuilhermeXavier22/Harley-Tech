import React from "react";
import "./index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import budgetsServices from "../../api/budgetsServices";
import { getDate, getTotalValue } from "../../helpers";

export const OrdersTable = () => {
  const [budgets, setBudgets] = useState([]);

  const fetchBudgets = async () => {
    const snapshot = await budgetsServices.getBudgets();
    setBudgets(snapshot);
  };

  const getClassVariant = (status) => {
    const classes = {
      Aprovado: "status-aceito",
      Pendente: "status-pendente",
      Recusado: "status-recusado",
    };
    return classes[status] || "status-pendente";
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  setInterval(() => {
    fetchBudgets();
  }, 1000 * 60 * 3);
  return (
    <div className="table-container">
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Telefone</th>
            <th>Data</th>
            <th>Valor do Orçamento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((order) => (
            <tr key={order.id}>
              <td className="link">
                <Link to={`/budget/${order.id}`}>{order.codigo}</Link>
              </td>
              <td>{order.cliente?.nome}</td>
              <td>{order.cliente?.telefone}</td>
              <td>{getDate(order.data_solicitacao)}</td>
              <td>R$ {getTotalValue(order.pecas)}</td>
              <td className={getClassVariant(order.status)}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
