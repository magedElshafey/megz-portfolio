import { IconType } from "react-icons";
export interface Skill {
  frontend: { name: string; icon: IconType; class: string }[];
  backend: { name: string; icon: IconType; class: string }[];
  tools: { name: string; icon: IconType; class: string }[];
}
