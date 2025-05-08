import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockAlumnos = [
  { nombre: "Ana López", tramite: "Pago", estado: "Completo" },
  { nombre: "Luis Martínez", tramite: "Carga de documentos", estado: "Pendiente" },
  { nombre: "Carlos Ruiz", tramite: "Revisión final", estado: "Completo" },
  { nombre: "María Gómez", tramite: "Pago", estado: "Pendiente" },
];

const PanelAdministrativo = () => {
  const [filtro, setFiltro] = useState("Todos");

  const alumnosFiltrados = filtro === "Todos"
    ? mockAlumnos
    : mockAlumnos.filter((alumno) => alumno.estado === filtro);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center">Panel Administrativo</h1>

      <div className="flex justify-center gap-4 mb-4">
        {["Todos", "Completo", "Pendiente"].map((estado) => (
          <Button
            key={estado}
            onClick={() => setFiltro(estado)}
            variant={filtro === estado ? "default" : "outline"}
          >
            {estado}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {alumnosFiltrados.map((alumno, index) => (
          <Card key={index} className="p-4 shadow-sm">
            <CardContent>
              <p className="font-semibold">Nombre: {alumno.nombre}</p>
              <p>Trámite: {alumno.tramite}</p>
              <p className={`text-sm mt-1 ${alumno.estado === "Completo" ? "text-green-600" : "text-red-600"}`}>
                Estado: {alumno.estado}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PanelAdministrativo;
