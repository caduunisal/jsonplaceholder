import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/usuarios')
      .then(res => setUsuarios(res.data))
      .catch(err => console.error('Erro na API:', err));
  }, []);

  return (
    <div>
      <h1>Usuários (JSONPlaceholder)</h1>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
