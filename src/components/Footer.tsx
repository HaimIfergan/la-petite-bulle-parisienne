import { MapPin, Phone, TrainFront, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t-[3px] border-foreground bg-secondary text-secondary-foreground py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-primary" />
        <span className="font-body">18 rue de l'École de Médecine, 75006 Paris</span>
      </div>
      <div className="flex items-center gap-2">
        <TrainFront className="w-5 h-5 text-primary" />
        <span className="font-body">Métro Odéon</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-5 h-5 text-primary" />
        <span className="font-body">01 43 25 XX XX</span>
      </div>
    </div>
    <p className="text-center mt-4 text-sm opacity-70 font-body">
      © 2026 La Petite Bulle Parisienne — Tous droits réservés
    </p>
    <p className="text-center mt-2 text-xs opacity-50 font-body">
      Site conçu par{" "}
      <a
        href="https://www.linkedin.com/in/hmifergan"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity underline"
      >
        Haïm Ifergan
        <Linkedin className="w-3.5 h-3.5 inline" />
      </a>
    </p>
  </footer>
);

export default Footer;
