import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  const handlePayment = async () => {
    if (!paymentMethod || !amount) {
      setStatus("Selecciona un método de pago y monto válido");
      return;
    }

    setLoading(true);
    setStatus("Procesando pago...");

    setTimeout(() => {
      setLoading(false);
      setStatus("Pago realizado con éxito");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Pago en Línea</h2>

          <Button onClick={() => setShowTutorial(true)} className="mb-4 w-full" variant="outline">
            Ver tutorial
          </Button>

          <input
            type="number"
            placeholder="Monto a pagar"
            className="w-full border p-2 rounded mb-4"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            className="w-full border p-2 rounded mb-4"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Selecciona método de pago</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="transferencia">Transferencia Bancaria</option>
          </select>

          <Button onClick={handlePayment} className="w-full" disabled={loading}>
            {loading ? "Procesando..." : "Pagar"}
          </Button>

          {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
        </CardContent>
      </Card>

      {/* Modal de tutorial */}
      {showTutorial && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded shadow-lg max-w-lg">
            <h3 className="text-lg font-semibold mb-4">Tutorial de pagos</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              <li>Ingresa el monto exacto a pagar.</li>
              <li>Selecciona el método de pago disponible.</li>
              <li>Presiona "Pagar" y espera la confirmación.</li>
              <li>Verifica tu correo para la confirmación de pago.</li>
            </ul>
            <Button onClick={() => setShowTutorial(false)} className="w-full">Cerrar</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
