import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44px' : '32px'; // Define the size based on the xl prop
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/comucineescola_logo_cuted.png" // Path to the PNG image
        alt={AppConfig.site_name}
        width={size}
        height={size}
        className="mr-1" // Add margin to the right
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
