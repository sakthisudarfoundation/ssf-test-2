import { FaqItem } from "@/types";
import { Accordion } from "@/components/ui/accordion";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return <Accordion items={items} />;
}
