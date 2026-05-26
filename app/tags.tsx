import { bgVariants } from "./variants";

export type TagTitle = "Todos" | "Viagem" | "Bolsas" | "Tech" | "Organização" | "Higiene" | "Acessórios"

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
    title: "Higiene",
    color: "emerald"
  },
  {
    title: "Acessórios",
    color: "cyan"
  },
  {
    title: "Organização",
    color: "amber"
  },
];