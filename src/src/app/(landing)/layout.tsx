import { Header } from "@/components/navigation/header";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='en'>
      <Header />
      {children}
    </div>
  );
}
