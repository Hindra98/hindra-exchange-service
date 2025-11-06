const About = () => {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Bien plus qu'une plateforme de services
          </h2>
          <p className="text-xl text-foreground/75 max-w-3xl mx-auto">
            Nous créons des connexions qui transforment votre quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne de gauche - Contenu */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Notre Mission
              </h3>
              <p className="text-lg text-foreground/85 leading-relaxed">
                Chez{" "}
                <span className="font-semibold text-chart-3">
                  Hindra-Exchange
                </span>
                , nous croyons que chacun mérite d'accéder à des services de
                qualité près de chez soi. Nous facilitons la rencontre entre des
                talents passionnés et des clients en quête de solutions
                pratiques et personnalisées.
              </p>
            </div>

            {/* Pourquoi nous existons */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Pourquoi nous existons ?
              </h3>
              <p className="text-lg text-foreground/85 leading-relaxed">
                Nous avons créé cette plateforme pour valoriser les compétences
                locales et redonner du sens à l'économie de proximité. Chaque
                prestation réalisée est une opportunité de créer du lien social
                et de soutenir l'entrepreneuriat local.
              </p>
            </div>

            {/* Chiffres clés */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-chart-3 mb-2">100+</div>
                <div className="text-foreground/75">Prestataires qualifiés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chart-3 mb-2">500+</div>
                <div className="text-foreground/75">Services réalisés</div>
              </div>
            </div>
          </div>

          {/* Colonne de droite - Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-chart-3/20 to-chart-2/35 rounded-2xl p-8 lg:p-12">
              {/* Vous pouvez remplacer cette div par une image */}
              <div className="aspect-square bg-background rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-chart-3/55 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-chart-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Une communauté grandissante
                  </h4>
                  <p className="text-foreground/75">
                    Rejoignez des centaines de particuliers qui transforment
                    leurs passions en services utiles pour tous
                  </p>
                </div>
              </div>
            </div>

            {/* Élément décoratif */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-chart-4 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-chart-3/55 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔒",
              title: "Confiance & Sécurité",
              description:
                "Tous nos prestataires sont vérifiés et notés par la communauté pour une expérience sereine.",
            },
            {
              icon: "💫",
              title: "Service Personnalisé",
              description:
                "Des prestations sur mesure adaptées à vos besoins spécifiques et à votre budget.",
            },
            {
              icon: "🤝",
              title: "Solidarité Locale",
              description:
                "Nous favorisons les échanges de proximité et le développement économique local.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-foreground/10 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-foreground/75">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
