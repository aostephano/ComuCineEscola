// src/components/ImageWithCaption.tsx
import React from 'react';

type ImageWithCaptionProps = {
  src: string; // URL da imagem
  alt: string; // Texto alternativo para a imagem
  caption: string; // Legenda para a imagem
  className?: string; // Classe adicional para estilização
  imgClassName?: string; // Classe adicional para a imagem
};

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  src,
  alt,
  caption,
  className = '',
  imgClassName = '',
}) => (
  <figure className={`text-center ${className}`}>
    <img src={src} alt={alt} className={`mx-auto ${imgClassName}`} />
    <figcaption className="mt-2 text-sm text-gray-600">{caption}</figcaption>
  </figure>
);

export default ImageWithCaption;
