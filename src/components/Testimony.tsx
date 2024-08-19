// src/components/Testimony.tsx
import React from 'react';

type TestimonyProps = {
  children: React.ReactNode;
  author: string; // Adiciona a propriedade author
  className?: string; // Permite adicionar classes adicionais se necessário
};

const Testimony: React.FC<TestimonyProps> = ({
  children,
  author,
  className = '',
}) => (
  <section
    className={`flex h-96 flex-col items-center justify-center ${className}`}
  >
    <blockquote className="mx-auto max-w-4xl text-center text-6xl font-bold text-black">
      {children}
    </blockquote>
    <footer className="mt-4 text-lg font-semibold text-gray-600">
      - {author}
    </footer>
  </section>
);

export default Testimony;
