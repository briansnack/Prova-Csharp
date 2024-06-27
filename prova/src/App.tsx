import React from 'react';
  import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
  import './App.css';
  import TarefaListar from './components/pages/tarefa-listar';
  import TarefaCadastrar from './components/pages/tarefa-cadastrar';

// const App: React.FC = () => {
//   return (
//       <BrowserRouter>
//           <div className="App">
//               <nav>
//                   <ul>
//                       <li>
//                         <Link to="./components/pages/tarefa-listar">Lista de tarefas</Link>
//                       </li>
//                       <li>
//                         <Link to="./components/pages/tarefa-cadastrar">Cadastrar Tarefas</Link>
//                       </li>
//                   </ul>
//               </nav>
//               <Routes>
//                   <Route path="/components/pages/tarefa-listar" element={<TarefaListar />} />
//               </Routes>
//               <Routes>
//                   <Route path="/components/pages/tarefa-cadastar" element={<TarefaCadastrar />} />
//               </Routes>
//           </div>
//       </BrowserRouter>
//   );
// };
function App() {
  return (
    <div>
//       <TarefaCadastrar></TarefaCadastrar>
{/* //       <TarefaListar></TarefaListar> */}
//     </div>
  );
}

export default App;