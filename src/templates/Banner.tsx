import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="A metodologia dos dispositivos do cinema é uma abordagem de pesquisa e criação que usa o cinema como ferramenta para explorar e intervir em realidades sociais. Ela envolve a construção de situações ou 'dispositivos' que colocam os participantes em contextos que revelam novas perspectivas e relações, estimulando a reflexão crítica e a transformação social através da experiência cinematográfica."
      subtitle="Conheça a metodologia dos dispostivos."
      button={
        <Link href="https://educacaoaudiovisual.com.br/a-pedagogia-do-dispositivo-um-metodo-para-a-educacao-audiovisual/">
          <Button>Metodologia</Button>
        </Link>
      }
    ></CTABanner>
  </Section>
);

export { Banner };
