import Navbar from '@components/Navbar';
import '@styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Unicom',
  description: 'Find funding you didn’t know existed.',
};

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='app wrap_content min-h-screen w-screen'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
