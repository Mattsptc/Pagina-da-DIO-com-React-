import { ButtonContainer } from "./style";

 function Button({ title, variant = "primary", onClick }) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}

export default Button