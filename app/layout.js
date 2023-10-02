import { Layout } from './_components';
import PropertyProvider from './_contexts/PropertyProvider';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <PropertyProvider>
            {children}
          </PropertyProvider>
        </Layout>
      </body>
    </html>
  )
}
