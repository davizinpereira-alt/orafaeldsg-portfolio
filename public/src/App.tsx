import { useState, useEffect } from 'react';
import { Moon, Sun, ArrowRight, Palette, Smartphone, Layers, Globe, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

const Header = ({ theme, setTheme }: { theme: 'light' | 'dark'; setTheme: (t: 'light' | 'dark') => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="font-bold text-xl text-blue-600 dark:text-blue-400">
          ORafaelDSG
        </a>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Alternar tema"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="pt-32 pb-20 px-4">
    <div className="container mx-auto max-w-4xl text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Transformo ideias em marcas inesquecíveis ✨
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Designer gráfico especializado em identidade visual e criação de conteúdo para redes sociais.
      </p>
      <a
        href="https://wa.me/5519981098636"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
      >
        Vamos conversar? <ArrowRight size={20} />
      </a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl">
              <div className="bg-gray-300 dark:bg-gray-600 w-full h-full animate-pulse" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-500/20 blur-xl"></div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">Sobre mim</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Sou Rafael, designer apaixonado por transformar conceitos em experiências visuais únicas.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Acredito que o design vai além da estética: é emoção, identidade e conexão.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Cada projeto é uma nova oportunidade de criar algo que permanece na memória.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-20 px-4 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-center mb-16">Portfólio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Pelos Patas', cover: '/images/portfolio/pelos-patas/cover.jpg' },
          { title: 'Lili Bordados', cover: '/images/portfolio/lili-bordados/cover.jpg' },
          { title: 'ALN Produções', cover: '/images/portfolio/aln-producoes/cover.jpg' },
          { title: 'AR Agropeças', cover: '/images/portfolio/ar-agropecas/cover.jpg' },
        ].map((proj, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
            <img 
              src={proj.cover} 
              alt={proj.title} 
              className="h-48 w-full object-cover"
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Imagem+Indisponível')}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-12 text-gray-500 dark:text-gray-400 italic">
        Mais projetos em breve...
      </p>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 px-4">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold text-center mb-16">Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Palette className="w-8 h-8" />, title: 'Criação de Logo', desc: 'Logotipos únicos que capturam a essência da sua marca.' },
          { icon: <Smartphone className="w-8 h-8" />, title: 'Social Media', desc: 'Templates e estratégias visuais para redes sociais.' },
          { icon: <Layers className="w-8 h-8" />, title: 'Identidade Visual', desc: 'Pacote completo com manual de uso.' },
          { icon: <Globe className="w-8 h-8" />, title: 'Criação de Site', desc: 'Sites modernos e responsivos.' },
        ].map((s, i) => (
          <div key={i} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
              {s.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactCTA = () => (
  <section id="contact" className="py-20 px-4">
    <div className="container mx-auto max-w-4xl text-center">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 shadow-2xl">
        <MessageCircle className="w-16 h-16 mx-auto mb-6 text-white" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Vamos criar algo incrível juntos?
        </h2>
        <a
          href="https://wa.me/5519981098636"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          Enviar mensagem
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-10 px-4 border-t border-gray-200 dark:border-gray-800">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <p className="font-bold text-blue-600 dark:text-blue-400">ORafaelDSG - Design & Marketing</p>
      </div>
      <div className="flex space-x-6">
        <a href="https://www.instagram.com/orafaeldsg/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400">
          <Instagram size={24} />
        </a>
        <a href="https://wa.me/5519981098636" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400">
          <MessageCircle size={24} />
        </a>
        <a href="https://www.behance.net/orafaeldsg" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
          <ExternalLink size={24} />
        </a>
      </div>
      <div className="mt-6 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ORafaelDSG. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
