import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import NuevoCliente, {
  action as nuevoClienteAction,
} from './pages/NuevoCliente';
import Index, { loader as clientesLoader } from './pages/Index';
import Editar, {
  loader as clienteEditarLoader,
  action as clienteEditarAction,
} from './pages/Editar';
import { action as eliminarClienteAction } from './components/Clientes';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <Editar />,
        loader: clienteEditarLoader,
        action: clienteEditarAction,
        errorElement: <ErrorPage />,
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
