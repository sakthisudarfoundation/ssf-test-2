"use client";

import { objectives } from "@/data/objectives";
import { RevealStagger } from "@/components/shared/reveal";
import { ObjectiveCard } from "./objective-card";

export function ObjectivesGrid() {
  return (
    <RevealStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
      {objectives.map((group) => (
        <ObjectiveCard key={group.slug} group={group} />
      ))}
    </RevealStagger>
  );
}
