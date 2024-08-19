import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string; // Mantém o tipo como string para aceitar HTML
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-4xl font-bold leading-hero text-black">
      {props.title}
    </h1>
    <div
      className="mb-8 mt-2 text-justify text-xl text-black"
      dangerouslySetInnerHTML={{ __html: props.description }} // Renderiza HTML diretamente
    />
    {props.button}
  </header>
);

export { HeroOneButton };
