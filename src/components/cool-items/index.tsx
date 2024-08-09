import { tw } from 'twind';

interface CoolItemProps {
  title: string;
  description: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function IconWrapper({ Icon }: { Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }) {
  return (
    <div className={tw(`w-5 h-5 flex-shrink-0`)}>
      <Icon width="100%" height="100%" fill="indigo" />
    </div>
  );
}

function CoolItem({ title, description, Icon }: CoolItemProps) {
  return (
    <div className={tw(`w-full border-b md:border-r p-4 md:p-6 lg:p-8`)}>
      <div className={tw(`flex items-center mb-4 md:mb-6`)}>
        <IconWrapper Icon={Icon} />
        <div className={tw(`ml-4 text-lg md:text-xl`)}>{title}</div>
      </div>
      <p className={tw(`leading-loose text-gray-500`)}>{description}</p>
    </div>
  );
}

export default CoolItem;
