interface CoolItemProps {
  title: string;
  description: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function IconWrapper({ Icon }: { Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> }) {
  return (
    <div className="w-5 h-5 flex-shrink-0">
      <Icon width="100%" height="100%" fill="indigo" />
    </div>
  );
}

function CoolItem({ title, description, Icon }: CoolItemProps) {
  return (
    <div className="w-full border-b md:border-r p-4 md:p-6 lg:p-8">
      <div className="flex items-center mb-4 md:mb-6">
        <IconWrapper Icon={Icon} />
        <div className="ml-4 text-lg md:text-xl">{title}</div>
      </div>
      <p className="leading-loose text-gray-500">{description}</p>
    </div>
  );
}

export default CoolItem;
