import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Parceiros"
    description="Nossos parceiros que são essencias para manter o C&E vivo."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://unicamp.br" // Link para a Unicamp
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/unicamp_logo.png" // Imagem da Unicamp
                alt="Unicamp"
                width={150}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://faculdadeeducacao.com.br" // Link para a Faculdade de Educação
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/fe_unicamp.png" // Imagem da Faculdade de Educação
                alt="Faculdade de Educação"
                width={200}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://www.campinas.sp.gov.br" // Link para a Faculdade de Educação
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/sme.png" // Imagem da Prefeitura de Campinas
                alt="Prefeitura de Campinas"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
