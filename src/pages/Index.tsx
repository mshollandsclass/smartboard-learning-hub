import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import logo from "/logo.svg";

const products = [
  {
    title: "StoryDrop",
    description: "Interactive storytelling game designed for collaborative classroom engagement on smartboards.",
    href: "/storydrop",
    tag: "Game",
  },
  {
    title: "Jeopardy",
    description: "Customizable quiz-show format that turns review sessions into competitive, memorable experiences.",
    href: "/jeopardy/",
    tag: "Game",
  },
  {
    title: "Vocab",
    description: "Visual vocabulary builder with spaced repetition, optimized for whole-class smartboard use.",
    href: "/vocab/",
    tag: "Study Tool",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip navigation link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background font-body text-sm"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="border-b border-border" role="banner">
        <div className="container flex items-center justify-between py-5">
          <a href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground" aria-label="Homepage">
            <img src={`${import.meta.env.BASE_URL}centerstaged-logo.svg`} alt="CenterStaged logo" className="h-8 w-8" />
            <span className="font-heading text-3xl font-bold tracking-tight">centerstaged.io</span>
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8 font-body text-sm">
              <li><a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="text-foreground font-medium hover:text-muted-foreground transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main id="main-content">
        <section className="container py-24 md:py-40 relative overflow-hidden" aria-labelledby="hero-heading">
          {/* Watermark logo */}
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[37.5%] max-w-sm opacity-[0.15] pointer-events-none select-none"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <h1
              id="hero-heading"
              className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] max-w-4xl"
            >
              Software built
              <br />
              for the
              <br />
              <span className="text-accent">smartboard.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg font-body leading-relaxed">
              Interactive classroom tools designed to make every lesson engaging, accessible, and unforgettable.
            </p>
          </motion.div>
        </section>

        {/* Products */}
        <section id="products" className="container pb-24 md:pb-40" aria-labelledby="products-heading">
          <h2 id="products-heading" className="sr-only">Our Products</h2>
          <div className="grid gap-5 sm:gap-6">
            {products.map((product, i) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                href={product.href}
                index={i}
                tag={product.tag}
              />
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-primary text-primary-foreground" aria-labelledby="about-heading">
          <div className="container py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 id="about-heading" className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-8">
                Built by educators,
                <br />
                for educators.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed opacity-70">
                We believe every classroom deserves tools that work as hard as the teachers using them. Our smartboard software is crafted for real-world classrooms — intuitive, accessible, and built to spark curiosity.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border" role="contentinfo">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} CenterStaged. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            WCAG 2.1 AA Compliant
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
