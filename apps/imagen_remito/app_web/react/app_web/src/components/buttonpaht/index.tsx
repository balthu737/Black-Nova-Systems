import styled from "styled-components"; 
import { Link } from "react-router-dom";

interface ButtonPathProps{
    ruta: string
    content: string
}

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 18px;
  background-color: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.2s;
  margin-top: 10px;
  &:hover {
    background-color: var(--accent-hover);
  }
`;

function ButtonPath(props: ButtonPathProps){
    const {ruta, content} = props;
    return <StyledLink to={ruta}>{content}</StyledLink>;
}
export default ButtonPath