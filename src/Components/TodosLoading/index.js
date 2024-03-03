import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <div class="loader">
        <span class="loader-text">Cargando</span>
        <span class="load"></span>
      </div>
    </div>
  );
}

export { TodosLoading };
