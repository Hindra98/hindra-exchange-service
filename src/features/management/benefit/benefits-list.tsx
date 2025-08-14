import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  PrestationCard
} from "@/components/ui/prestation/prestation-card";
import { aisite, computer_program, illustration, programming_collage, programming_sitting } from "@/assets";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/core/hooks/core-hooks";

export const BenefitList = () => {
  // const [prestations, setPrestations] = useState<Prestation[]>([
  //   {
  //     id: "id1",
  //     title: "Prestation 1",
  //     location: "New-bell",
  //     category: "Coiffure",
  //     price: "58",
  //     picture: computer_program,
  //     description: "Développeur web polyvalent avec 3+ ans d’expérience dans la conception et le déploiement d’applications web performantes. Expertise dans la création des solutions robustes, de l’architecture backend aux interfaces utilisateur complexes et performantes, en passant par l’optimisation des APIs et l’adoption des meilleures pratiques (clean code, design patterns).",
  //   },
  //   {
  //     id: "id2",
  //     title: "Prestation 2",
  //     location: "New-bell",
  //     category: "Onglerie",
  //     price: "32",
  //     picture: programming_sitting,
  //     description: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
  //   },
  //   {
  //     id: "id3",
  //     title: "Prestation 3",
  //     location: "New-bell",
  //     category: "Coiffure",
  //     price: "36",
  //     // picture: programming_collage,
  //     description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
  //   },
  //   {
  //     id: "id4",
  //     title: "Prestation 4",
  //     location: "New-bell",
  //     category: "Patisserie",
  //     price: "98",
  //     picture: aisite,
  //     description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  //   },
  //   {
  //     id: "id5",
  //     title: "Prestation 5",
  //     location: "New-bell",
  //     category: "Manutention",
  //     price: "25",
  //     picture: programming_collage,
  //     description: "Lorem ipsum dolor",
  //   },
  //   {
  //     id: "id6",
  //     title: "Prestation 6",
  //     location: "New-bell",
  //     category: "Santé",
  //     price: "48",
  //     picture: illustration,
  //     description: "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
  //   },
  // ]);
  
  const prestations = [
    {
      id: "id1",
      title: "Prestation 1",
      location: "New-bell",
      category: "Coiffure",
      price: "58",
      picture: computer_program,
      description: "Développeur web polyvalent avec 3+ ans d’expérience dans la conception et le déploiement d’applications web performantes. Expertise dans la création des solutions robustes, de l’architecture backend aux interfaces utilisateur complexes et performantes, en passant par l’optimisation des APIs et l’adoption des meilleures pratiques (clean code, design patterns).",
    },
    {
      id: "id2",
      title: "Prestation 2",
      location: "New-bell",
      category: "Onglerie",
      price: "32",
      picture: programming_sitting,
      description: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
    },
    {
      id: "id3",
      title: "Prestation 3",
      location: "New-bell",
      category: "Coiffure",
      price: "36",
      // picture: programming_collage,
      description: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
    },
    {
      id: "id4",
      title: "Prestation 4",
      location: "New-bell",
      category: "Patisserie",
      price: "98",
      picture: aisite,
      description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    },
    {
      id: "id5",
      title: "Prestation 5",
      location: "New-bell",
      category: "Manutention",
      price: "25",
      picture: programming_collage,
      description: "Lorem ipsum dolor",
    },
    {
      id: "id6",
      title: "Prestation 6",
      location: "New-bell",
      category: "Santé",
      price: "48",
      picture: illustration,
      description: "Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor",
    },
  ];
  
    const verifyRegistrationStore = useAppSelector(
      (state) => state.verifyRegistration
    );

  useEffect(() => {
    const fetchPrestations = async () => {
      // try {
      //   const response = await HttpClient.get('/prestations');
      //   setPrestations(response.data);
      // } catch (err) {
      //   setError('Erreur lors du chargement des prestations');
      // } finally {
      //   setIsLoading(false);
      // }
    };

    fetchPrestations();
  }, []);
  const title = <h2 className="text-2xl font-bold md:text-4xl py-5">Prestations à la une</h2>

  if (verifyRegistrationStore?.pending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {title}
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="h-48 rounded-lg" />
        ))}
      </div>
    );
  }

  if (verifyRegistrationStore?.errors.length > 0) {
    return <p className="text-red-500">{verifyRegistrationStore?.errors[0]}</p>;
  }

  return (<div className="space-y-4">{title}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {prestations.map((prestation) => (
        <PrestationCard key={prestation.id} prestation={prestation} />
      ))}
    </div>
    <Link to={""} className="text-end w-full block">Voir tout</Link>
    </div>
  );
};
