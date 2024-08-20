import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type Brand = {
  icon: StaticImport;
  url: string;
  label: string;
};

type FlexBrandsProps = {
  brands: {
    fill: string;
    items: Brand[];
  };
};

function FlexBrands({ brands }: FlexBrandsProps) {
  return (
    <div className="flex items-center" style={{ fill: brands.fill }}>
      {brands.items.map((brand, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <a key={index} href={brand.url} className="ml-4" aria-label={brand.label}>
          <Image src={brand.icon} alt="Brand logo" />
        </a>
      ))}
    </div>
  );
}

export default FlexBrands;
