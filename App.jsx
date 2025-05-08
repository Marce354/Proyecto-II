import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaymentPage from "./pages/PaymentPage";
import PanelAdministrativo from "./pages/PanelAdministrativo";

function App() {
  return (
    <Router>
      <div className="p-4 bg-blue-100 flex justify-center gap-6">
        <Link to="/" className="font-semibold hover:underline">Pago en Línea</Link>
        <Link to="/admin" className="font-semibold hover:underline">Panel Administrativo</Link>
      </div>

      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/admin" element={<PanelAdministrativo />} />
      </Routes>
    </Router>
  );
}

export default App;
