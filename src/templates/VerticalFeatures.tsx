import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Catálogo"
    description="Este catálogo inclui a curadoria de 8 anos de Cinema&Educação em suas distintas propostas."
  >
    <VerticalFeatureRow
      title="Dona Sônia pediu uma arma para seu vizinho Alcides (2011)"
      description="Um filme que explora as complexidades das relações humanas em um contexto de tensão e desespero. Com uma narrativa intensa e envolvente, o curta retrata o pedido de Sônia a seu vizinho Alcides por uma arma, desencadeando uma série de eventos inesperados."
      image="/assets/images/dona-sonia-pediu-uma-arma.webp"
      imageAlt="Cena do filme Ona Sônia pediu uma arma para seu vizinho Alcides"
    />
    <VerticalFeatureRow
      title="Cadarços (2016)"
      description="Filme selecionado para a II Mostra Kino Campinas e VI Mostra Estudantil de Cinema (2016) na categoria Kino Kino Minuto Lumière. Naquele dia Bruno aprendeu a amarrar seus cadarços..."
      image="/assets/images/cadarcos.png"
      imageAlt="Cena do filme Cadarços"
      reverse
    />
    <VerticalFeatureRow
      title="Um pedreiro (1960)"
      description="Filme antigo da cidade de Campinas, realizado por Dayz Peixoto Fonseca"
      image="/assets/images/um_pedreiro.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
