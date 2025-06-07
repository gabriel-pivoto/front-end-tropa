import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem;
`;

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('logged');
    navigate('/');
  }

  return (
    <Container>
      <h1>Bem-vindo à Dashboard</h1>
      <button onClick={handleLogout}>Sair</button>
    </Container>
  );
}
