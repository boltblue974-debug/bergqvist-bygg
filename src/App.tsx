import { Toaster } from 'sonner'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      <Toaster
        position="bottom-right"
        toastOptions={{
          unstyled: false,
          classNames: {
            toast: '!bg-anthracite !border !border-anthracite-2 !rounded-sm !shadow-lg',
            title: '!text-paper !font-medium !font-body',
            description: '!text-paper/70',
            icon: '!text-copper',
          },
        }}
      />
    </div>
  )
}

export default App
