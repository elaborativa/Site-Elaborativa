import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import DesignDeAprendizagem from '../components/DesignDeAprendizagem/DesignDeAprendizagem';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/design-de-aprendizagem"
          element={<DesignDeAprendizagem />}
        />
      </Routes>
    </BrowserRouter>
  );
}
