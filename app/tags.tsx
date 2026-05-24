import { bgVariants } from "./variants";

export type TagTitle = "Todos" | "Viagem" | "Bolsas" | "Tech" | "Organização" | "Higiene"

export const tags: { title: TagTitle; color: keyof typeof bgVariants }[] = [
  {
    title: "Todos",
    color: "white"
  },
  {
    title: "Viagem",
    color: "indigo"
  },
  {
    title: "Bolsas",
    color: "fuchsia"
  },
  {
    title: "Tech",
    color: "rose"
  },
  {
    title: "Organização",
    color: "amber"
  },
  {
    title: "Higiene",
    color: "emerald"
  },
];