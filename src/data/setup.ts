import collab from "public/collab.svg"
import team from "public/team.svg"
import people from "public/people.svg"

interface Setup {
  id: number;
  title: string;
  image: string;
  description: string;
}



const setupData: Setup[] = [
  {
    id: 1,
    title: "Team Projects",
    description: "Hire developers for team projects.",
    image: team,
  },
  {
    id: 2,
    title: "Personal Projects",
    description: "Hire developers for personal projects.",
    image: collab,
  },
  {
    id: 3,
    title: "Recruiting",
    description: "Recruit developers for outstanding companies",
    image: people,
  },
];

export default setupData
