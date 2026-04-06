import Layout from "@/components/Layout";
import marcImage from "@/assets/marc-lepage.png";
import { BookOpen, Search, Star } from "lucide-react";

const Libraire = () => (
  <Layout>
    <section className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="font-heading text-4xl md:text-5xl text-foreground text-center mb-12">
        Le Libraire
      </h1>

      <div className="flex flex-col md:flex-row gap-10 items-center max-w-4xl mx-auto">
        <div className="comic-panel w-64 h-80 flex-shrink-0">
          <img
            src={marcImage}
            alt="Marc Lepage, libraire passionné"
            className="w-full h-full object-cover"
            loading="lazy"
            width={640}
            height={800}
          />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="font-heading text-3xl text-foreground">Marc Lepage</h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Passionné de bandes dessinées depuis toujours, Marc tient La Petite Bulle Parisienne
            depuis <strong>1985</strong>. Véritable encyclopédie vivante du 9ème art, il déniche
            pour vous les trésors les plus rares et saura vous conseiller avec la même passion
            qu'au premier jour.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Son flair légendaire et son réseau de collectionneurs en font l'un des experts
            les plus respectés de la rive gauche.
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-8">
          Expertise & Rachat de collections
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Search,
              title: "Estimation gratuite",
              desc: "Apportez vos albums, Marc évalue votre collection avec soin et transparence.",
            },
            {
              icon: Star,
              title: "Pièces rares",
              desc: "Éditions originales, dédicaces, planches : nous trouvons la perle rare pour vous.",
            },
            {
              icon: BookOpen,
              title: "Rachat au juste prix",
              desc: "Vous souhaitez vendre ? Nous rachetons vos collections au meilleur prix.",
            },
          ].map((item) => (
            <div key={item.title} className="comic-panel p-6 text-center space-y-3">
              <item.icon className="w-10 h-10 mx-auto text-primary" />
              <h3 className="font-heading text-xl text-foreground">{item.title}</h3>
              <p className="font-body text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Libraire;
