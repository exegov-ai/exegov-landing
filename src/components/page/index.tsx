import Navigation from '@/components/navigation';
import { Metadata } from 'next';

type TPageProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  icons: {
    icon: `/logo.svg`,
  },
};

function Page({ children }: TPageProps) {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        {children}
      </div>
    </div>
  );
}

export default Page;
