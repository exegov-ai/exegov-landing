import { tw } from 'twind';

interface CoolItemProps {
  title: string;
  description: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function CoolItem({ title, description, Icon }: CoolItemProps) {
  return (
    <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
      <div className={tw(`flex items-center mb-6`)}>
        <Icon width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
        <div className={tw(`ml-4 text-xl`)}>{title}</div>
      </div>
      <p className={tw(`leading-loose text-gray-500`)}>{description}</p>
    </div>
  );
}

export default CoolItem;
