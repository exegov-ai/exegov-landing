import Head from 'next/head';
import Navigation from '@/components/navigation';

interface IProps {
  children: React.ReactNode;
}

function Page({ children }: IProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        {children}
      </div>
    </div>
  );
}

export default Page;
