
interface Team {
  team: TeamItem[];
}
interface TeamItem {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}