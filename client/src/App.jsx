import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/MainLayout';
import Home from '../src/components/Pages/Home';
import Logs from './components/Pages/Logs';
import Board from './components/Pages/Board';
import NoPage from './components/Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="logs" element={<Logs />} />
          <Route path="board" element={<Board />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
