// Importaciones de React y otros módulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importaciones de estilos adicionales
import '../app-assets/css/bootstrap.min.css';
import '../app-assets/css/colors.min.css';
import '../app-assets/css/components.min.css';
import '../app-assets/css/plugins/extensions/ext-component-context-menu.min.css';
// (Continúa importando todos los demás archivos CSS que sean necesarios)


import Layout from "./Layout.tsx"; // Importa Layout
import TreePUC from "./Arbol/Components/NuevoTREE.tsx";
import TreePUC2 from "./Arbol/Components/TreePUC.tsx";
import DepartmentCRUD from "./Department/Components/Department.tsx";

const router = createBrowserRouter([
  {
    path: "/", // Ruta base
    element: <Layout />, // Renderiza el componente Layout
    children: [
      {
        path: "/arbol", // Ruta secundaria
        element: <TreePUC />, // Renderiza TreePUC en la ruta /arbol
      },
      {
        path: "/arbol2", // Ruta secundaria
        element: <TreePUC2 />, // Renderiza TreePUC2 en la ruta /arbol2
      },
      {
        path: "/department", // Ruta secundaria
        element: <DepartmentCRUD />, // Renderiza DepartmentCRUD en la ruta /department
      },
      {
        path: "/tree", // Ruta secundaria
        element: <TreePUC />, // Renderiza TreePUC en la ruta /tree
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
