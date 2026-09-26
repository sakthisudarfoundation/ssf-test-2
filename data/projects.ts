/**
 * Active fundraising projects shown on the Projects page. Starts empty —
 * do not invent project names, locations or fundraising figures. Add a
 * real entry here (title, raised, goal) once an actual project is live.
 */

export interface FundraisingProject {
  title: string;
  raised: number;
  goal: number;
}

export const projects: FundraisingProject[] = [];
