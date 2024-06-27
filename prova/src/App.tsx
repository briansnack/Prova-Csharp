import React from 'react';
  import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
  import './App.css';
import TarefaListar from './components/pages/tarefa-listar';

// const App: React.FC = () => {
//   return (
//       <BrowserRouter>
//           <div className="App">
//               <nav>
//                   <ul>
//                       <li>
//                         <Link to="./components/pages/tarefa-listar">Lista de tarefas</Link>
//                       </li>
//                   </ul>
//               </nav>
//               <Routes>
//                   <Route path="/components/pages/produto/produto-listar" element={<TarefaListar />} />
//               </Routes>
//           </div>
//       </BrowserRouter>
//   );
// };
function App() {
  return (
    <div>
      <TarefaListar></TarefaListar>
    </div>
  );
}

export default App;