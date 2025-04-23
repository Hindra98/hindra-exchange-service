import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  alain,
  ducart,
  eba,
  hindra,
  kidjou,
  marlone,
  motcheyo,
  raissa,
  rivaldo,
} from "@/assets";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const people: TeamItem[] = [
  {
    id: "person-1",
    name: "Vadiny Fotsing",
    role: "Créateur",
    description:
      "Développeur web polyvalent avec 3+ ans d’expérience dans la conception et le déploiement d’applications web performantes. Expertise dans la création des solutions robustes, de l’architecture backend aux interfaces utilisateur complexes et performantes, en passant par l’optimisation des APIs et l’adoption des meilleures pratiques (clean code, design patterns).",
    avatar: hindra,
    twitter: "https://twitter.com/vadinyfotsing",
    github: "https://github.com/hindra98",
    linkedin: "https://linkedin.com/in/vadinyfotsing",
  },
  {
    id: "person-2",
    name: "Alain Bomba",
    role: "Adjoint",
    description: "Elig doloremque mollitia fugiat omnis!",
    avatar: alain,
    twitter: "https://twitter.com/vadinyfotsing",
    github: "https://github.com/hindra98",
    linkedin: "https://linkedin.com/in/vadinyfotsing",
  },
  {
    id: "person-3",
    name: "Ducart Gnafa",
    role: "Adjoint",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: ducart,
    twitter: "https://twitter.com/vadinyfotsing",
    linkedin: "https://linkedin.com/in/vadinyfotsing",
  },
  {
    id: "person-4",
    name: "Fabrice Kidjou Montserrat ExtraBold taille 8 VA-25",
    role: "Superviseur",
    description: "Elig doloremque mollitia fugiat omnis!",
    avatar: kidjou,
    linkedin: "https://linkedin.com/in/vadinyfotsing",
  },
  {
    id: "person-5",
    name: "Raissa Djouka",
    role: "Comptable",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: raissa,
    linkedin: "https://linkedin.com/in/vadinyfotsing",
  },
  {
    id: "person-6",
    name: "Rivaldo Tandah",
    role: "Censeur",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: rivaldo,
    twitter: "https://twitter.com/vadinyfotsing",
    linkedin: "https://linkedin.com/in/vadinyfotsing",
  },
  {
    id: "person-7",
    name: "Andre Eba",
    role: "Censeur",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: eba,
    linkedin: "https://linkedin.com/in/vadinyfotsing",
  },
  {
    id: "person-8",
    name: "Nick Motcheyo",
    role: "Sécrétaire",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: motcheyo,
    twitter: "https://twitter.com/vadinyfotsing",
  },
  {
    id: "person-9",
    name: "Karl Marlone",
    role: "Sécrétaire",
    description:
      "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    avatar: marlone,
    twitter: "https://twitter.com/vadinyfotsing",
    github: "https://github.com/hindra98",
  },
];

const Team = () => {
  return (
    <section className="py-12 px-8 w-full">
      <div className="container flex flex-col items-start text-left">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          The team you'll be working with
        </h2>
        <p className="mb-4 max-w-3xl text-muted-foreground lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="container mt-4 grid mx-auto gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
        {people.map((person) => (
          <Card key={person.id} className="justify-between">
            <CardHeader>
              <CardTitle>
                <Avatar className="mb-4 size-20 md:mb-5 lg:size-24">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback>{person.name}</AvatarFallback>
                </Avatar>
              </CardTitle>
              <CardDescription>
                <p className="font-medium">{person.name}</p>
                <p className="text-muted-foreground line-clamp-2">{person.role}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>{person.description}</CardContent>
            <CardFooter className="gap-4">
              {person?.linkedin && (
                <Link to={person.linkedin} className="group">
                  <FaLinkedinIn className="size-5 text-muted-foreground group-hover:text-[#0A66C2] transition" />
                </Link>
              )}
              {person?.twitter && (
                <Link to={person.twitter} className="group">
                  <FaTwitter className="size-5 text-muted-foreground group-hover:text-[#0077B5] transition" />
                </Link>
              )}
              {person?.github && (
                <Link to={person.github} className="group">
                  <FaGithub className="size-5 text-muted-foreground group-hover:text-[#555] transition" />
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Team;
