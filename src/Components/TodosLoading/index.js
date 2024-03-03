import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <div className="loader">
        <span className="loader-text">Cargando</span>
        <span className="load"></span>
      </div>
    </div>
  );
}

export { TodosLoading };
