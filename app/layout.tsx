import MyProfilePic from './components/MyProfilePic';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: "Greg's Blog",
  description: 'Created by create Grégory Marini',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} className='dark:bg-slate-800'>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
