import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-chicks.jpg";
import { Link } from "react-router-dom";

const Index = () => (
  <Layout>
    <section className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center text-center gap-8">
      <div className="comic-panel max-w-3xl w-full">
        <img
          src={heroImage}
          alt="Des poussins parisiens sirotant des cocktails en terrasse"
          className="w-full h-auto"
          width={1280}
          height={720}
        />
      </div>

      <h1 className="font-heading text-4xl md:text-6xl text-foreground leading-tight max-w-2xl">
        La BD dans tous ses états, au cœur du 6<sup>ème</sup>.
      </h1>

      <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl">
        Votre librairie spécialisée en bandes dessinées neuves, anciennes et de collection au quartier latin.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/pepites" className="comic-button">
          Découvrir nos pépites
        </Link>
        <Link to="/libraire" className="comic-button bg-secondary text-secondary-foreground">
          Rencontrer le libraire
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
