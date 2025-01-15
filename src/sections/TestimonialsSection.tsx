import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team.",
    name: "Noel Baldwin",
    title: "Lead Developer - BitBridge",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The integration process was seamless, and the performance improvements are beyond our expectations.",
    name: "Harry Bender",
    title: "Product Manager - BlockLink",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map(({ text, name, title, avatarImage }, index) => (
            <motion.blockquote
              key={index}
              className={twMerge(index === 2 && "md:hidden lg:block")}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
            >
              <p className="font-heading font-black text-3xl lg:text-4xl">
                &ldquo;{text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <div
                      style={{ backgroundImage: `url(${avatarImage})` }}
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                    ></div>
                  </div>
                  <div className="">
                    <div className="text-lg not-italic font-black">{name}</div>
                    <div className="text-zinc-400 not-italic">{title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
