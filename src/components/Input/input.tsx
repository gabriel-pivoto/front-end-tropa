// src/components/Input/input.tsx
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1e90ff;
    background-color: #fff;
  }
`;

type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ label, ...rest }: InputProps) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} />
    </InputContainer>
  );
}
