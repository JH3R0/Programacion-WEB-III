import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [registros, setRegistros] = useState([]);
  const [form, setForm] = useState({ nombre: '', descripcion: '' });
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3001/api/registros');
    setRegistros(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:3001/api/registros/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post('http://localhost:3001/api/registros', form);
    }
    setForm({ nombre: '', descripcion: '' });
    fetchData();
  };

  const handleEdit = (registro) => {
    setForm({ nombre: registro.nombre, descripcion: registro.descripcion });
    setEditId(registro.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/registros/${id}`);
    fetchData();
  };

  return (
    <div className="App">
      <h1>CRUD Básico</h1>
      <form onSubmit={handleSubmit}>
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
        <input name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" required />
        <button type="submit">{editId ? 'Actualizar' : 'Crear'}</button>
      </form>
      <ul>
        {registros.map((r) => (
          <li key={r.id}>
            <strong>{r.nombre}</strong>: {r.descripcion}
            <button onClick={() => handleEdit(r)}>Editar</button>
            <button onClick={() => handleDelete(r.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
