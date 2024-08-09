import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/components/Layout/MainLayout';
import Home from '../src/components/Pages/Home';
import NoPage from './components/Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
