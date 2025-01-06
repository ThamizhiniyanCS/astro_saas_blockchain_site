import { twMerge } from "tailwind-merge";
import TextButton from "../components/TextButton";
import Card from "../components/Card";

const cardData = [
  {
    src: "/assets/images/pill.png",
    alt: "Pill 3D Image",
    title: "Revolutionary Blockchain API",
    description:
      "Effortlessly integrate and manage blockchain data with our cutting-edge API designed for seamless connectivity.",
    color: "fuchsia",
  },
  {
    src: "/assets/images/cuboid.png",
    alt: "Cuboid 3D Image",
    title: "Decentralized Data Solutions",
    description:
      "Empower your applications with decentralized data solutions, ensuring security and transparity at every step.",
    color: "lime",
  },
  {
    src: "/assets/images/cone.png",
    alt: "Cone 3D Image",
    title: "Next-Gen Smart Contracts",
    description:
      "Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.",
    color: "cyan",
  },
  {
    src: "/assets/images/icosahedron.png",
    alt: "Icosahedron 3D Image",
    title: "Seamless Blockchain Integration",
    description:
      "Integrate blockchain technologies into your projects, with minimal effort and maximum efficiency.",
    color: "violet",
  },
];

const FeaturesCardsSection = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the future of blockchain with Blockforge.
        </h2>

        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map(({ src, alt, title, description, color }) => (
              <Card key={title} className="max-w-xs md:max-w-md" color={color}>
                <div className="flex justify-center -mt-24">
                  <div className="inline-flex relative">
                    <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                    <img
                      src={src}
                      alt={alt}
                      className="size-40 group-hover:-translate-y-6 transition duration-300"
                    />
                  </div>
                </div>

                <h3 className="font-heading font-black text-3xl mt-12">
                  {title}
                </h3>

                <p className="text-lg text-zinc-400 mt-4">{description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }) => (
              <div
                key={title}
                className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCardsSection;
