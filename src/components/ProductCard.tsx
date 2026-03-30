import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
  tag?: string;
}

const ProductCard = ({ title, description, href, index, tag = "Game" }: ProductCardProps) => {
  return (
    <motion.a
      href={href}
      className="group relative block rounded-[5px] border border-border bg-card p-8 md:p-10 transition-all duration-300 hover:bg-foreground hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      aria-label={`Open ${title} — ${description}`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-4">
          <span className="inline-block rounded-full border border-border px-3 py-0.5 text-xs font-medium tracking-widest text-muted-foreground uppercase font-body group-hover:border-background/40 group-hover:text-background/70 transition-colors">
            {tag}
          </span>
          <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground group-hover:text-foreground transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-1 text-base md:text-lg text-muted-foreground max-w-xl font-body leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-6 shrink-0 rounded-full border border-border p-3 text-muted-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300" aria-hidden="true">
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
        </div>
      </div>
    </motion.a>
  );
};

export default ProductCard;
