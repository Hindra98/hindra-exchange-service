import {
  coiffure,
  couture,
  jardinnage,
  maconnerie,
  manucure,
  poterie,
  repetitions,
} from "@/assets";
import Carousel from "@/components/ui/carousel/carousel";

const Banner = () => {
  const slides:CarouselSlide[] = [
    {
      picture: coiffure,
      title: "Votre Style, Ma Passion | Cheveux en Béton",
      description:
        `Besoin d'un coup de fraîcheur ou d'un changement radical ? Je ne coupe pas juste les cheveux, je sculpte votre confiance en vous. Première coupe offerte si vous n'êtes pas satisfait(e) !" (Offre de lancement très puissante)`,
      btn_url: "/coiffure",
      btn_title: "Contact-us",
    },
    {
      picture: poterie,
      title: "Donnez Vie à Vos Idées | Créations en Argile Uniques",
      description:
        `Offrez-vous un moment de détente créative ! Je vous guide pour transformer un simple bloc d'argile en un vase, une tasse ou une sculpture qui vous ressemble. Idéal pour un cadeau personnalisé ou une activité originale. Réservez votre atelier découverte.`,
      btn_url: "/poterie",
      btn_title: "Voir",
    },
    {
      picture: repetitions,
      title: "De la Confusion à la Maîtrise | Votre Réussite, Mon Objectif",
      description:
        `Les mauvaises notes s'accumulent ? Je ne fais pas que répéter la leçon, j'enseigne à votre enfant la bonne méthode de travail pour qu'il retrouve motivation et autonomie. Contactez-moi pour une première évaluation gratuite.`,
      btn_url: "/repetitions",
      btn_title: "About-us",
    },
    {
      picture: couture,
      title: "Rendez Vos Vêtements Uniques | Réparations & Créations Sur-Mesure",
      description:
        `Un jean préféré déchiré ? Une robe qui ne va plus ? Ne jetez plus ! Je redonne une seconde vie à vos vêtements. Je crée aussi des pièces uniques sur mesure. Premier ourlet simple offert pour toute première commande !`,
      btn_url: "/couture",
      btn_title: "Contact-us",
    },
    {
      picture: jardinnage,
      title: " Je Transforme Votre Jardin en Havre de Paix",
      description:
        `Manque de temps ou compétences pour votre jardin ? Je m'occupe de tout : désherbage, taille, plantations. Retrouvez le plaisir d'un extérieur verdoyant sans les corvées. Demandez votre devis personnalisé gratuit.`,
      btn_url: "/jardinnage",
      btn_title: "Contact-us",
    },
    {
      picture: manucure,
      title: "Un Moment de Détente, un Résultat Impeccable",
      description:
        `Vous méritez une pause beauté. Je viens à domicile pour une manucure soignée et hygiénique, dans le confort de votre maison. Des ongles parfaits sans se déplacer. Réservez votre créneau de bien-être.`,
      btn_url: "/manucure",
      btn_title: "Contact-us",
    },
    {
      picture: maconnerie,
      title: "Petits Travaux de Maçonnerie : Solides, Propres et Dans les Délais",
      description:
        `Un mur à réparer, une cloison à monter, un carrelage à poser ? Je réalise vos petits travaux de maçonnerie avec précision et propreté. Des solutions durables pour votre maison. N'hésitez plus, demandez un diagnostic gratuit.`,
      btn_url: "/maconnerie",
      btn_title: "Contact-us",
    },
  ];
  return (
    <div className="w-full bg-transparent mx-auto">
      <Carousel carouselSlides={slides} />
    </div>
  );
};

export default Banner;
