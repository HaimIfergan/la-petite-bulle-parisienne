import Layout from "@/components/Layout";
import classiquesImg from "@/assets/classiques-franco-belges.jpg";
import aventuresImg from "@/assets/aventures-histoire.jpg";
import westernImg from "@/assets/western-humour.jpg";

const pepites = [
  {
    title: "Classiques Franco-Belges",
    subtitle: "Boule & Bill",
    description:
      "Les indémodables de la BD franco-belge : humour, tendresse et aventures pour toute la famille.",
    image: classiquesImg,
  },
  {
    title: "Aventures & Histoire",
    subtitle: "Astérix",
    description:
      "Des épopées historiques palpitantes qui mêlent action, humour et culture avec brio.",
    image: aventuresImg,
  },
  {
    title: "Western & Humour",
    subtitle: "Lucky Luke",
    description:
      "Le Far West comme vous ne l'avez jamais vu : duels au soleil et éclats de rire garantis.",
    image: westernImg,
  },
];

const Pepites = () => (
  <Layout>
    <section className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="font-heading text-4xl md:text-5xl text-foreground text-center mb-4">
        Nos Pépites
      </h1>
      <p className="font-body text-lg text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        Une sélection de nos rayons préférés, à découvrir en boutique.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pepites.map((item) => (
          <div key={item.title} className="comic-panel flex flex-col">
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-square object-cover"
              loading="lazy"
              width={640}
              height={640}
            />
            <div className="p-5 flex flex-col flex-1 gap-2">
              <h2 className="font-heading text-2xl text-foreground">{item.title}</h2>
              <span className="font-body text-sm font-semibold text-primary bg-secondary inline-block px-2 py-0.5 rounded w-fit">
                {item.subtitle}
              </span>
              <p className="font-body text-muted-foreground flex-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Pepites;
