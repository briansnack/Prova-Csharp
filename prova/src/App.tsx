import React from 'react';
  import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
  import './App.css';
  import TarefaListar from './components/pages/tarefa-listar';
  import TarefaCadastrar from './components/pages/tarefa-cadastrar';
import TarefaAlterar from './components/pages/tarefa-alterar';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <div className="App">
              <nav>
                  <ul>
                      <li>
                        <Link to="./components/pages/tarefa-listar">Lista de tarefas</Link>
                      </li>
                      <li>
                        <Link to="./components/pages/tarefa-cadastrar">Cadastrar Tarefas</Link>
                      </li>
                      <li>
                        <Link to="./components/pages/tarefa-alterar">Alterar Tarefas</Link>
                      </li>
                  </ul>
              </nav>
              <Routes>
                  <Route path="/components/pages/tarefa-listar" element={<TarefaListar />} />
              </Routes>
              <Routes>
                  <Route path="/components/pages/tarefa-cadastrar" element={<TarefaCadastrar />} />
              </Routes>
              <Routes>
                  <Route path="/components/pages/tarefa-alterar" element={<TarefaAlterar />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;