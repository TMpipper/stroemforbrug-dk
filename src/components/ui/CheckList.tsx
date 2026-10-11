import { CircleCheck } from "lucide-react";

interface CheckListProps {
  items: string[];
  className?: string;
}

export default function CheckList({ items, className = "" }: CheckListProps) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-ink-body">
          <CircleCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
