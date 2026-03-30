import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback since there's no backend
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:hello@centerstaged.io?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client…", description: "Your message details have been pre-filled." });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border" role="banner">
        <div className="container flex items-center justify-between py-5">
          <a href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground" aria-label="Homepage">
            <img src={`${import.meta.env.BASE_URL}centerstaged-logo.svg`} alt="CenterStaged logo" className="h-8 w-8" />
            <span className="font-heading text-3xl font-bold tracking-tight">centerstaged.io</span>
          </a>
          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8 font-body text-sm">
              <li><a href="/#products" className="text-muted-foreground hover:text-foreground transition-colors">Products</a></li>
              <li><a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="/contact" className="text-foreground font-medium hover:text-muted-foreground transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero banner */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6"
            >
              <img src={`${import.meta.env.BASE_URL}centerstaged-logo.svg`} alt="" aria-hidden="true" className="h-20 w-20 md:h-24 md:w-24 brightness-0 invert opacity-80" />
              <div>
                <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground">
                  We'd love to
                  <br />
                  hear from you.
                </h1>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact form section */}
        <section className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Whether you've got a question, hit a snag, or just want to share how our tools have transformed your classroom — our inbox is always open.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Teaching is busy enough. If something isn't working the way it should, or you're not sure how to get the most out of your templates, don't spend another free period troubleshooting alone. Drop us a message and we'll get back to you promptly — real help, from real people who care about making your classroom run smoother.
              </p>
              <p className="text-foreground font-heading font-semibold mb-3">We're happy to help with:</p>
              <ul className="text-muted-foreground text-base leading-relaxed space-y-2 mb-8 list-disc list-inside">
                <li>Questions about templates or how to use them</li>
                <li>Technical issues or setup support</li>
                <li>Collaboration, partnerships, or press enquiries</li>
                <li>Feedback, ideas, or just saying hello</li>
              </ul>
              <div className="border-t border-border pt-8">
                <a
                  href="mailto:hello@centerstaged.io"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold">Send Us an Email</p>
                    <p className="text-muted-foreground text-sm">hello@centerstaged.io</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <Input
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 bg-card border-border"
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 bg-card border-border"
              />
              <Textarea
                placeholder="Enter Your Message Here!"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[180px] bg-card border-border resize-y"
              />
              <Button type="submit" size="lg" className="w-full h-12 font-heading font-semibold text-base">
                Send Message
              </Button>
            </motion.form>
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

export default Contact;
