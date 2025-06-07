// src/components/Button.tsx
import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

// Estilização com styled-components
const StyledButton = styled.button`
  padding: 12px 20px;
  background-color: #1e90ff;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #1674d4;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export function Button({ children, onClick, type = 'button' }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
