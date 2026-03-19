import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  border-bottom: 1px solid var(--border);
`;

function Header(){
  return (
    <HeaderContainer>
      <div>
        <h2>Gestión de Remitos</h2>
      </div>
    </HeaderContainer>
  );
}

export default Header