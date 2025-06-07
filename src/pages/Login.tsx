// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo/Logo"; 
import { Input } from "../components/Input/input";
import { PasswordInput } from "../components/PasswordInput/password";
import { Button } from "../components/Button/button";
import { Illustration } from "../components/Illustration/ilustration";
import {
  Container,
  Card,
  LeftSection,
  RightSection,
  Title, 
  SubTitle
} from '../styles/Login.styles';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular autenticação
    if (email && senha) {
      navigate('/dashboard');
    }
  };

 return (
  <Container>
    <Card>
      <LeftSection>
        <Logo />
        <Title>Bem-vindo de volta!</Title>
        <SubTitle>Entre com sua conta para acessar o painel.</SubTitle>

        <form onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            type="email"
            placeholder="seunome@seuservidor.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <PasswordInput
            label="Senha"
            placeholder="Digite aqui"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

          <Button type="submit">Enviar</Button>
        </form>
      </LeftSection>

      <RightSection>
        <Illustration />
      </RightSection>
    </Card>
  </Container>
);
}
