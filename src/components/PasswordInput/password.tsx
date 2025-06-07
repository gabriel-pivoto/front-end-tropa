// src/components/PasswordInput/password.tsx
import { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 6px;
  color: #333;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
  width: 100%;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: #1e90ff;
    background-color: #fff;
  }
`;

const Toggle = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888;
`;

type PasswordInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordInput({ label, ...rest }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputWrapper>
        <Input
          type={showPassword ? 'text' : 'password'}
          {...rest}
        />
        <Toggle onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? '🙈' : '👁️'}
        </Toggle>
      </InputWrapper>
    </InputContainer>
  );
}
