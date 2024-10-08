import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove o token do localStorage e redireciona para a página de login
    localStorage.removeItem('token');
    navigate('/login');
  };

  const goToSensores = () => {
    // Navega para a página de Sensores
    navigate('/sensores');
  };

  return (
    <div>
      <h1>Bem-vindo à Home Page</h1>
      <p>Você está logado!</p>

      {/* Botão para a página de Sensores */}
      <button onClick={goToSensores}>Visualizar Dados dos Sensores</button>

      {/* Botão de Logout */}
      <button onClick={handleLogout} style={{ marginLeft: '10px' }}>Logout</button>
    </div>
  );
};

export default HomePage;
