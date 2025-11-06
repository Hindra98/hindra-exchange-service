import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { alain, eba, hindra, raissa } from "@/assets";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  contribution: string;
  emoji: string;
  avatar?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Vadiny FOTSING",
      role: "Porteur de Projet & Développeur Fullstack",
      description:
        "Visionnaire et technicien, je donne vie à la plateforme grâce à mes compétences en développement web.",
      contribution:
        "Architecture technique, développement frontend/backend, coordination de l'équipe",
      avatar: hindra,
      twitter: "https://twitter.com/vadinyfotsing",
      github: "https://github.com/hindra98",
      linkedin: "https://linkedin.com/in/vadinyfotsing",
      emoji: "🚀",
    },
    {
      name: "Alain BOMBA",
      role: "Ingénieur Data Science & Développeur Mobile",
      description:
        "Je m'assure que notre plateforme soit intelligente et accessible partout, grâce à l'IA et aux applications mobiles.",
      contribution:
        "Algorithmes de recommandation, analyse de données, développement mobile",
      avatar: alain,
      twitter: "https://twitter.com/alainbomba",
      github: "https://github.com/alainbomba",
      linkedin: "https://linkedin.com/in/alainbomba",
      emoji: "📊",
    },
    {
      name: "Raissa DJOUKA",
      role: "Experte Métier & Testeuse Principale",
      description:
        "Avec mes 2 salons de beauté, je garantis que la plateforme réponde aux vrais besoins des prestataires et clients.",
      contribution:
        "Validation des fonctionnalités, tests utilisateurs, expertise sectorielle beauté/soins",
      avatar: raissa,
      linkedin: "https://linkedin.com/in/raissadjouka",
      twitter: "https://twitter.com/raissadjouka",
      instagram: "https://www.instagram.com/me/raissadjouka",
      emoji: "💄",
    },
    {
      name: "Andres EBA",
      role: "Ingénieur Statisticien & Testeur Utilisateur",
      description:
        "Je m'assure que l'expérience utilisateur soit optimale et que les données soient exploitées au mieux pour améliorer le service.",
      contribution:
        "Analyse UX, tests fonctionnels, validation des parcours utilisateurs",
      avatar: eba,
      linkedin: "https://linkedin.com/in/andreseba",
      twitter: "https://twitter.com/andreseba",
      // instagram: "https://www.instagram.com/me/andreseba",
      emoji: "📈",
    },
  ];
  // Animations spécifiques par type d'emoji
  const getEmojiAnimation = (emoji: string) => {
    const animations = {
      "🚀": {
        hover: {
          scale: 1.3,
          y: -10,
          rotate: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      },
      "📊": {
        hover: {
          scale: 1.2,
          rotate: [0, 5, -5, 0],
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
      },
      "💄": {
        hover: {
          scale: 1.25,
          y: -3,
          rotate: [0, -8, 8, 0],
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        },
      },
      "📈": {
        hover: {
          scale: 1.2,
          y: [0, -4, 0, -2, 0], // Effet de "flottement"
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            y: {
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 0.8, 1],
            },
          },
        },
      },
    };

    return (
      animations[emoji as keyof typeof animations] || {
        hover: {
          scale: 1.2,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.5 },
        },
      }
    );
  };

  return (
    <>
      <section id="team" className="py-16 lg:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Équipe Exceptionnelle
            </h2>
            <p className="text-xl text-foreground/85 max-w-3xl mx-auto">
              Une synergie de talents complémentaires au service de votre
              expérience
            </p>
          </div>

          {/* Grille des membres */}
          <div className="flex justify-center items-stretch flex-wrap gap-8 h-fit">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="bg-foreground/15 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-white/10 transition-all duration-300 overflow-hidden group min-h-full w-96"
              >
                {/* Contenu */}
                <div className="p-6 flex flex-col justify-between gap-6 h-full">
                  {/* Avatar/Emoji */}
                  <div>
                    <Avatar className="size-20 lg:size-24">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold text-foreground my-2 flex items-center gap-4">
                      <span>{member.name}</span>
                      <motion.span
                      variants={getEmojiAnimation(member.emoji)}>
                        {member.emoji}
                      </motion.span>
                    </h3>
                    <span className="inline-block bg-chart-3/25 text-chart-3 text-sm font-medium px-3 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>

                  <div>
                    <p className="text-foreground/85 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="border-t border-foreground/10 py-4">
                      <p className="text-xs text-foreground/50 font-medium uppercase tracking-wide mb-2">
                        Contribution principale
                      </p>
                      <p className="text-sm text-foreground/90">
                        {member.contribution}
                      </p>
                    </div>
                  </div>
                  {/* Medias Sociaux */}
                  <div className="flex gap-4 items-center">
                    {member?.linkedin && (
                      <Link to={member.linkedin} className="group/second">
                        <FaLinkedinIn className="size-5 text-muted-foreground group-[te]:bg-amber-100 group-hover/second:text-[#0A66C2] transition" />
                      </Link>
                    )}
                    {member?.twitter && (
                      <Link to={member.twitter} className="group/second">
                        <FaTwitter className="size-5 text-muted-foreground group-hover/second:text-[#0077B5] transition" />
                      </Link>
                    )}
                    {member?.github && (
                      <Link to={member.github} className="group/second">
                        <FaGithub className="size-5 text-muted-foreground group-hover/second:text-[#555] transition" />
                      </Link>
                    )}
                    {member?.instagram && (
                      <Link to={member.instagram} className="group/second">
                        <FaInstagram className="size-5 text-muted-foreground group-hover/second:text-[#E1306C] transition" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bannière de synergie */}
          <motion.div
            className="mt-16 bg-foreground/15 rounded-2xl shadow-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Une Complémentarité Réfléchie
              </h3>
              <p className="text-lg text-foreground/85 leading-relaxed">
                Notre force réside dans la diversité de nos compétences. Du
                développement technique à l'expertise métier, en passant par
                l'analyse des données et les tests utilisateurs, chaque membre
                apporte une perspective unique pour créer une plateforme qui
                répond parfaitement aux besoins des prestataires et des clients.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  💻 Technique
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  📱 Mobile & Data
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  💄 Expertise Métier
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  📊 Analyse & Tests
                </motion.span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};
export default Team;
