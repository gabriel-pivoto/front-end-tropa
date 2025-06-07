    // src/components/Illustration.tsx
import illustration from '../../assets/logo.svg';

export function Illustration() {
  return (
    <div className="illustration-wrapper">
      <img src={illustration} alt="Pessoa conectada" />
    </div>
  );
}
