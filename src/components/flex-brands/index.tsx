type Brand = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
          <brand.icon />
        </a>
      ))}
    </div>
  );
}

export default FlexBrands;
