import ButtonPath from "../components/buttonpaht";
import Header from "../components/encabezado";
import Section from "../components/seccion";
import styled from "styled-components";

const Container = styled.main`
  max-width: 1000px;
  margin: 60px auto;
  padding: 0 20px;
`;

function HomePage(){
  return (
  <>
  <Header />
  <Container>
    <Section titulo="Manual" parrafo="Carga y gestión manual de remitos.">
      <ButtonPath ruta="/manual" content="Ir"/>
    </Section>
    <Section titulo="Automatico" parrafo="Procesamiento automático sin intervención.">
      <ButtonPath ruta="/auto" content="Ir"/>
    </Section>
    <Section titulo="Buscar" parrafo="Consulta rápida en la base de datos.">
      <ButtonPath ruta="/buscar" content="Ir"/>
    </Section>
  </Container>
  </>
);
}

export default HomePage;