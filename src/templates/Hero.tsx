import Link from 'next/link';

import ImageWithCaption from '@/components/ImageWithCaption';
import Testimony from '@/components/Testimony';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarColumns } from '../navigation/NavbarColumns';
import { Logo } from './Logo';

// Define menu items for easier management
const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre' },
  { href: '/blog', label: 'Blog' },
  { href: '/catalog', label: 'Catálogo' },
  { href: '/contact', label: 'Contato' },
];

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarColumns logo={<Logo xl />}>
        {menuItems.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </NavbarColumns>
    </Section>
    <Section yPadding="">
      <HeroOneButton
        title={
          <>
            {''}
            <span className="text-primary-500">Cinema&Educação</span>
          </>
        }
        description={`
          O Programa <strong>“Cinema e Educação: a experiência do cinema na escola de 
          educação básica”</strong> é uma iniciativa da Secretaria Municipal de Educação 
          na direção de atender a implementação da Lei 13.006/2014, que orienta 
          todas as escolas de educação básica a exibirem duas horas de cinema 
          nacional por mês como componente curricular complementar, integrado à 
          proposta pedagógica da escola. O Programa Cinema e Educação tem o objetivo 
          de dar um salto quantitativo e qualitativo na promoção de diversas ações 
          situadas na confluência entre cinema e educação e a proposta da SME Campinas 
          foi além do que era previsto pela nova lei e promover experiências de ver, 
          debater e produzir filmes, na escola e outros espaços educativos, experiência 
          capaz de deslocar o nosso olhar sobre o cotidiano, o espaço, sobre o que ocorre 
          no interior e no entorno da escola e nas relações humanas. Produzir imagens na 
          escola, discutindo coletivamente essa produção é, na concepção adotada pelo 
          Programa, uma prática educativa que pode promover novas sensibilidades, novas 
          percepções e leituras do mundo.
        `}
        button={
          <Link href="https://www.youtube.com/channel/UCgstiqeEorCKTJXdW1hxhbA">
            <Button>Canal no Youtube</Button>
          </Link>
        }
      />
    </Section>
    <Section yPadding="py-21">
      <div className="flex flex-col items-center md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <ImageWithCaption
            src="/assets/images/comucineescola_logo.jpg" // URL da imagem
            alt="Descrição da imagem" // Texto alternativo
            caption="Logo do C&E."
            className="p-4" // Adiciona um padding geral
            imgClassName="w-full max-w-lg" // Ajusta o tamanho da imagem
          />
        </div>
        <div className="mt-4 md:mt-0 md:w-1/2">
          <Testimony className="" author="Fulano de Tal">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Vocês falam demais!"
          </Testimony>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
