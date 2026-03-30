import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PenLine, Heart } from "lucide-react";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const StoryDrop = () => {
  return (
    <>
      <Helmet>
        <title>StoryDrop — Vocabulary Through Storytelling | CenterStaged</title>
        <meta
          name="description"
          content="StoryDrop is a smartboard vocabulary game that uses creative storytelling to help students learn, retain, and own new words. Research-backed and classroom-tested."
        />
        <meta name="keywords" content="vocabulary game, smartboard, classroom storytelling, vocabulary instruction, creative writing, education technology" />
        <link rel="canonical" href="https://centerstaged.io/storydrop" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "StoryDrop",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web",
            description:
              "Interactive storytelling game that teaches vocabulary through creative writing on classroom smartboards.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Skip nav */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background font-body text-sm"
        >
          Skip to main content
        </a>

        {/* Header */}
        <header className="border-b border-border" role="banner">
          <div className="container flex items-center justify-between py-5">
            <a
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              aria-label="Back to CenterStaged homepage"
            >
              <img
                src={`${import.meta.env.BASE_URL}centerstaged-logo.svg`}
                alt="CenterStaged logo"
                className="h-8 w-8"
              />
              <span className="font-heading text-3xl font-bold tracking-tight">centerstaged.io</span>
            </a>
            <nav aria-label="Main navigation">
              <ul className="flex items-center gap-8 font-body text-sm">
                <li>
                  <a href="/#products" className="text-muted-foreground hover:text-foreground transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-foreground font-medium hover:text-muted-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="main-content">
          {/* ───────── HERO ───────── */}
          <section className="container py-28 md:py-44" aria-labelledby="hero-heading">
            <motion.div
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.p
                variants={fadeUp}
                custom={0}
                className="font-body text-sm uppercase tracking-[0.25em] text-accent mb-6"
              >
                CenterStaged Product
              </motion.p>
              <motion.h1
                id="hero-heading"
                variants={fadeUp}
                custom={1}
                className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95]"
              >
                Words come alive
                <br />
                when they live
                <br />
                inside a <span className="text-accent">story.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl font-body leading-relaxed"
              >
                StoryDrop isn't a vocabulary drill. It's a creative invitation — a spark of narrative
                that puts new words exactly where they belong: inside a story your student creates.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-12 flex flex-wrap gap-4">
                <a
                  href="/storydrop/game"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-base px-8 py-4 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
                >
                  Play StoryDrop
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#why"
                  className="inline-flex items-center gap-2 border border-border text-foreground font-heading font-semibold text-base px-8 py-4 hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
                >
                  Learn more
                </a>
              </motion.div>
            </motion.div>
          </section>

          {/* ───────── DIVIDER ───────── */}
          <div className="container" aria-hidden="true">
            <div className="border-t border-border" />
          </div>

          {/* ───────── WHY SECTION ───────── */}
          <section id="why" className="container py-24 md:py-40" aria-labelledby="why-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl"
            >
              <motion.h2
                id="why-heading"
                variants={fadeUp}
                custom={0}
                className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12"
              >
                Why storytelling unlocks vocabulary in a way worksheets never will
              </motion.h2>

              <motion.div variants={fadeUp} custom={1} className="space-y-8 font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  There's a reason some words stick with us for life while others evaporate the moment
                  the test is over. The difference isn't how many times a student looked up a definition
                  — it's whether they ever made the word <em>theirs</em>.
                </p>
                <p>
                  Research consistently shows that using vocabulary words in stories and real-life
                  scenarios helps students make meaningful connections to context, leading to a deeper
                  understanding of both the definition and how words are actually used. When a student
                  writes a sentence like <span className="text-foreground font-medium">"The detective crept through the labyrinth of alleyways,"</span> they
                  don't just know what <em>labyrinth</em> means — they've used it, shaped it, owned it.
                </p>
                <p>
                  Purposefully crafted stories that place target words in rich narrative contexts have
                  been shown to be a powerful method for teaching the meanings of academic vocabulary —
                  far more effective than memorizing definitions in isolation. StoryDrop is built on
                  exactly this principle: every prompt is designed to make target vocabulary feel
                  essential to the story, not bolted on.
                </p>
              </motion.div>
            </motion.div>
          </section>

          {/* ───────── CREATIVE WRITING SECTION ───────── */}
          <section className="bg-primary text-primary-foreground" aria-labelledby="writing-heading">
            <div className="container py-24 md:py-40">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
              >
                <motion.h2
                  id="writing-heading"
                  variants={fadeUp}
                  custom={0}
                  className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12"
                >
                  The creative writing process is a vocabulary accelerator
                </motion.h2>

                <motion.div variants={fadeUp} custom={1} className="space-y-8 font-body text-lg md:text-xl leading-relaxed opacity-80">
                  <p>
                    When students write, they don't just recall words — they deploy them. Mixed methods
                    that combine contextual learning with deeper processing of words have been found to
                    be among the most effective approaches to vocabulary instruction, and creative
                    writing is one of the richest contexts of all.
                  </p>
                  <p>
                    A student searching for the right word to describe their character's fear, or the
                    texture of an alien landscape, is doing something far more cognitively demanding —
                    and rewarding — than circling answers on a page.
                  </p>
                  <p>
                    Studies embedding vocabulary instruction within story retelling and personal story
                    generation have shown consistent improvement in word knowledge for students who
                    received narrative-based interventions, with retention observed even weeks after the
                    activity ended.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* ───────── MOTIVATION SECTION ───────── */}
          <section className="container py-24 md:py-40" aria-labelledby="motivation-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl"
            >
              <motion.h2
                id="motivation-heading"
                variants={fadeUp}
                custom={0}
                className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-12"
              >
                Motivation is the missing ingredient — and stories provide it
              </motion.h2>

              <motion.div variants={fadeUp} custom={1} className="space-y-8 font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  Vocabulary acquisition and writing motivation are deeply linked. Research shows that
                  students actively dislike low-challenge writing tasks like vocabulary worksheets,
                  describing them as <span className="text-foreground font-medium">"boring, meaningless, and minimally challenging"</span> — while
                  students given open-ended, creative challenges reported feeling creative, experiencing
                  positive emotions, and working harder as a result.
                </p>
                <p>
                  StoryDrop is designed around this insight. Greater creative freedom is associated with
                  increased agency and ownership of writing, and greater emotional engagement — and when
                  students feel genuine ownership over what they're creating, vocabulary isn't something
                  they <em>have</em> to learn. It's something they <em>want</em> to use.
                </p>
              </motion.div>
            </motion.div>
          </section>

          {/* ───────── SCIENCE CALLOUT ───────── */}
          <section className="bg-accent text-accent-foreground" aria-labelledby="science-heading">
            <div className="container py-24 md:py-40">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-3xl"
              >
                <motion.p
                  variants={fadeUp}
                  custom={0}
                  className="font-body text-sm uppercase tracking-[0.25em] mb-6 opacity-70"
                >
                  The Science Behind It
                </motion.p>
                <motion.h2
                  id="science-heading"
                  variants={fadeUp}
                  custom={0.5}
                  className="font-heading text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-16"
                >
                  Why StoryDrop works — in plain terms
                </motion.h2>

                <div className="space-y-16">
                  {[
                    {
                      icon: Sparkles,
                      title: "Context beats definitions.",
                      body: "Words learned inside a story are retained longer than words learned from a list. When students encounter vocabulary within a narrative context, they successfully recall and apply those words far more readily.",
                    },
                    {
                      icon: PenLine,
                      title: "Writing deepens the learning.",
                      body: "Integrating vocabulary strategies within writing instruction positively influences students' written expression and word retention — students who write with new words don't just know them, they internalize them.",
                    },
                    {
                      icon: Heart,
                      title: "Ownership drives engagement.",
                      body: "When students have some ownership of what they're writing, they're much more likely to enjoy the experience — and enjoyment is one of the strongest predictors of long-term learning.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      custom={i + 1}
                      className="flex gap-6 items-start"
                    >
                      <div className="shrink-0 mt-1">
                        <item.icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="font-body text-lg leading-relaxed opacity-80">{item.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* ───────── CTA ───────── */}
          <section className="container py-28 md:py-44 text-center" aria-labelledby="cta-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                id="cta-heading"
                variants={fadeUp}
                custom={0}
                className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-8"
              >
                Ready to see it in action?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="text-lg text-muted-foreground font-body max-w-xl mx-auto mb-12"
              >
                Launch StoryDrop on your smartboard and watch vocabulary come alive.
              </motion.p>
              <motion.div variants={fadeUp} custom={2}>
                <a
                  href="/storydrop/game"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-lg px-10 py-5 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4"
                >
                  Play StoryDrop
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border" role="contentinfo">
          <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-muted-foreground">
              © {new Date().getFullYear()} CenterStaged. All rights reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground">WCAG 2.1 AA Compliant</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default StoryDrop;
