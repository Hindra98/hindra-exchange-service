import { logo_blue } from "@/assets";
import { appName } from "@/core/constants/common-constants";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../inputs/input";
import { Mail, Phone } from "lucide-react";
import { Button } from "../buttons/button";

export const Footer3 = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`flex flex-col overflow-hidden justify-center items-center gap-2 py-2 px-8 w-full text-center max-md:px-5 max-md:max-w-full`}
    >
      <hr className="border border-gray-500 opacity-50 sm:mx-auto text-center w-full" />

      <div className="flex flex-col gap-0">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo_blue} alt={appName} width={40} />
          <span className="font-bold">{appName}</span>
        </Link>

        <p className="text-sm font-light text-background/40 pb-2">
          &copy; {currentYear} {appName} | Tous droits réservés
        </p>
        <div className="flex items-center justify-center gap-2">
          <Link
            to={"https://x.com/" + appName}
            className="group border rounded-full p-2 hover:border-[#0077B5]"
          >
            <FaTwitter className="size-4 text-muted-foreground group-hover:text-[#0077B5] transition" />
          </Link>
          <Link
            to={"https://facebook.com/" + appName}
            className="group border rounded-full p-2 hover:border-[#0007BF]"
          >
            <FaFacebookF className="size-4 text-muted-foreground group-hover:text-[#0007BF] transition" />
          </Link>
          <Link
            to={"https://linkedin.com/in/" + appName}
            className="group border rounded-full p-2 hover:border-[#0077B5]"
          >
            <FaLinkedinIn className="size-4 text-muted-foreground group-hover:text-[#0077B5] transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

// components/ImpressiveFooter.tsx

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [abonnement, setAbonnement] = useState("");

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/80 text-background relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section principale du footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="flex flex-col md:flex-row justify-between gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Colonne 1: Brand et description */}
            <motion.div className="" variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={logo_blue}
                  alt={appName}
                  width={40}
                  className="size-10 rounded-lg"
                />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-background to-background/30 bg-clip-text text-transparent">
                  {appName}
                </h2>
              </div>

              <p className="text-background/to-background/30 text-lg leading-relaxed max-w-md mb-6">
                La plateforme qui révolutionne l'échange de services entre
                particuliers. Rejoignez une communauté de talents et trouvez les
                services dont vous avez besoin.
              </p>

              {/* Statistiques impressionnantes */}
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-background">100+</div>
                  <div className="text-background/40 text-sm">Prestataires</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-background">500+</div>
                  <div className="text-background/40 text-sm">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-background">98%</div>
                  <div className="text-background/40 text-sm">Satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Colonne 2: Section contact et newsletter */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Contact */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-background">
                  Contactez-nous
                </h3>
                <div className="space-y-3 text-background/to-background/30">
                  <Link
                    to={`mailto:contact@${appName
                      .toLowerCase()
                      .split(" ")
                      .join()}.com`}
                    className="flex items-center space-x-3"
                  ><span><Mail /></span>
                    <span>contact@{appName.toLowerCase()}.com</span>
                  </Link>
                  <Link
                    to={`tel:+237655394765`}
                    className="flex items-center space-x-3"
                  ><span><Phone /></span>
                    <span>+237 655 39 47 65</span>
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-background">
                  Restez informé
                </h3>
                <div className="flex items-center space-x-2">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    icon={<Mail />}
                    placeholder={`Votre email`}
                    className="w-full !border-primary-foreground"
                    value={abonnement}
                    eye={false}
                    onChange={(e) => {
                      setAbonnement(e.target.value);
                    }}
                  />
                  <div className="w-fit">
                    <Button type="button" className={"w-full"}>
                      S'abonner
                    </Button>
                  </div>
                </div>
                <p className="text-background/40 text-sm mt-2">
                  Recevez les dernières actualités et offres spéciales.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Section bas du footer */}
        <motion.div
          className="border-t border-background/75"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-background/40 text-sm">
                &copy; {currentYear} {appName}. Tous droits réservés.
              </div>

              {/* Liens légaux */}
              <div className="flex space-x-6 text-sm">
                {[
                  "Mentions légales",
                  "Politique de confidentialité",
                  "CGU",
                  "Cookies",
                ].map((item, index) => (
                  <Link
                    key={index}
                    className="text-background/40 hover:text-background transition-colors cursor-pointer"
                    to={item.toLowerCase().split(" ").join()}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className="flex space-x-4">
                <Link
                  to={"https://x.com/" + appName}
                  className="group border hover:scale-110 active:scale-90 transition rounded-full p-2 hover:border-[#0077B5]"
                >
                  <FaTwitter className="size-4 text-muted-foreground group-hover:text-[#0077B5] transition" />
                </Link>
                <Link
                  to={"https://facebook.com/" + appName}
                  className="group border hover:scale-110 active:scale-90 transition rounded-full p-2 hover:border-[#0007BF]"
                >
                  <FaFacebookF className="size-4 text-muted-foreground group-hover:text-[#0007BF] transition" />
                </Link>
                <Link
                  to={"https://linkedin.com/in/" + appName}
                  className="group border hover:scale-110 active:scale-90 transition rounded-full p-2 hover:border-[#0077B5]"
                >
                  <FaLinkedinIn className="size-4 text-muted-foreground group-hover:text-[#0077B5] transition" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
