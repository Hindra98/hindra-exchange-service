
interface Prestation {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  location?: string;
  picture?: string;
  pictures?: string;

  author?: User;
}