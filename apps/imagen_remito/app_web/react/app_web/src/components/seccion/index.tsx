import styled from "styled-components";

interface SectionProps {
  titulo: string;
  parrafo: string;
  children: React.ReactNode;
}

// 🎨 Card principal
const Card = styled.section`
  background: var(--card-bg);
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
  }
`;

// 🎨 Título
const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Text = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
`;

function Section({ titulo, parrafo, children }: SectionProps) {
  return (
    <Card>
      <Title>{titulo}</Title>
      <Text>{parrafo}</Text>
      {children}
    </Card>
  );
}

export default Section;