import { MapPin, Phone, TrainFront } from "lucide-react";

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
        <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#0A66C2"/>
          <path d="M7.5 9.5H5V19H7.5V9.5ZM6.25 8.5C5.56 8.5 5 7.94 5 7.25S5.56 6 6.25 6 7.5 6.56 7.5 7.25 6.94 8.5 6.25 8.5ZM19 19H16.5V14.2C16.5 12.8 15.5 12.5 15.1 12.5C14.7 12.5 13.5 12.7 13.5 14.2V19H11V9.5H13.5V10.7C13.8 10.1 14.8 9.3 16.3 9.3C17.8 9.3 19 10.5 19 13V19Z" fill="white"/>
        </svg>
      </a>
    </p>
  </footer>
);

export default Footer;
