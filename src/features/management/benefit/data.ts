import {
  aisite,
  computer_program,
  illustration,
  programming_collage,
  programming_sitting,
} from "@/assets";

export const dataBenefit: BenefitsSuccessPayload = {
  token: "",
  message: "",
  benefits: [
    {
      id: "id1",
      user_id: "id1",
      title: "Prestation 1",
      location: "New-bell",
      category: "Coiffure",
      price: "58",
      pictures: [computer_program],
      avaibility: "",
      description:
        "Développeur web polyvalent avec 3+ ans d’expérience dans la conception et le déploiement d’applications web performantes. Expertise dans la création des solutions robustes, de l’architecture backend aux interfaces utilisateur complexes et performantes, en passant par l’optimisation des APIs et l’adoption des meilleures pratiques (clean code, design patterns).",
    },
    {
      id: "id2",
      user_id: "id1",
      title: "Prestation 2",
      location: "New-bell",
      category: "Onglerie",
      price: "32",
      pictures: [programming_sitting,computer_program,programming_collage,aisite,illustration],
      avaibility: "",
      description:
        "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
    },
    {
      id: "id3",
      user_id: "id1",
      title: "Prestation 3",
      location: "New-bell",
      category: "Coiffure",
      price: "36",
      pictures: [programming_collage],
      avaibility: "",
      description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    },
    {
      id: "id4",
      user_id: "id1",
      title: "Prestation 4",
      location: "New-bell",
      category: "Patisserie",
      price: "98",
      pictures: [aisite],
      avaibility: "",
      description:
        "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    },
    {
      id: "id5",
      user_id: "id1",
      title: "Prestation 5",
      location: "New-bell",
      category: "Manutention",
      price: "25",
      pictures: [programming_collage],
      avaibility: "",
      description: "Lorem ipsum dolor",
    },
    {
      id: "id6",
      user_id: "id1",
      title: "Prestation 6",
      location: "New-bell",
      category: "Santé",
      price: "48",
      pictures: [illustration],
      avaibility: "",
      description:
        "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
    },
  ],
};
