import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

import styles from './styles.module.css';

type Brand = {
  icon: StaticImport;
  url: string;
  label: string;
};

type FlexBrandsProps = {
  brands: {
    items: Brand[];
  };
};

function FlexBrands({ brands }: FlexBrandsProps) {
  return (
    <div className="flex items-center">
      {brands.items.map((brand, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <a key={index} href={brand.url} className="ml-4" aria-label={brand.label}>
          <Image src={brand.icon} alt="Brand logo" className={styles.icon} />
        </a>
      ))}
    </div>
  );
}

export default FlexBrands;
