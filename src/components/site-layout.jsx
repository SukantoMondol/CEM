import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function SiteLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
        <Header />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
    </div>
  )
}
