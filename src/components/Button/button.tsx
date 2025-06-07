// src/components/Button.tsx
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({ children, onClick, type = "button" }: ButtonProps) {
  return (
    <button className="primary-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
