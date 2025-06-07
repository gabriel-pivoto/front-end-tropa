// src/components/PasswordInput.tsx
import { useState } from 'react';

type PasswordInputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordInput({ label, placeholder, value, onChange }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <div className="password-field">
        <input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button type="button" onClick={() => setVisible(!visible)}>
          👁️
        </button>
      </div>
    </div>
  );
}
