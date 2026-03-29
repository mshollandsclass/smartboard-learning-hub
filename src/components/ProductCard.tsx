import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  index: number;
}

const ProductCard = ({ title, description, href, index }: ProductCardProps) => {
  return (
    <motion.a
      href={href}
      className="group block border-t border-border py-10 md:py-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      aria-label={`Open ${title} — ${description}`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <span className="block font-body text-sm text-muted-foreground mb-2" aria-hidden="true">
            0{index + 1}
          </span>
          <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl">
            {description}
          </p>
        </div>
        <div className="mt-2 shrink-0 text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" aria-hidden="true">
          <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
        </div>
      </div>
    </motion.a>
  );
};

export default ProductCard;
