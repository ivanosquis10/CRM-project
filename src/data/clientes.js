export async function obtenerClientes() {
  const response = await fetch(import.meta.env.VITE_URL_API);
  const result = await response.json();
  return result;
}

export async function obtenerCliente(id) {
  const response = await fetch(`${import.meta.env.VITE_URL_API}/${id}`);
  const result = await response.json();
  return result;
}

export async function agregarCliente(datos) {
  try {
    const response = await fetch(import.meta.env.VITE_URL_API, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarCliente(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/${id}`, {
      method: 'DELETE',
    });
    await response.json();
  } catch (error) {
    console.log(error);
  }
}
