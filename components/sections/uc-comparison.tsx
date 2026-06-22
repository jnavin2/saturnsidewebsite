import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ROWS = [
  {
    saturnside: "Built around your trade, pricing, and dispatch rules",
    generic: "One size fits all",
  },
  {
    saturnside: "Handles emergency vs routine jobs differently",
    generic: "Treats every inquiry the same",
  },
  {
    saturnside: "Routes jobs to the right technician automatically",
    generic: "Cannot connect to scheduling or dispatch",
  },
  {
    saturnside: "Your customer data stays on your own infrastructure",
    generic: "Data routed through third-party servers",
  },
  {
    saturnside: "Responds in 2 to 5 seconds, 24/7",
    generic: "Delayed, generic, often offline after hours",
  },
  {
    saturnside: "Adapts as your pricing, zones, and team change",
    generic: "Cannot learn or update without rebuilding",
  },
];

export function UseCasesComparison() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            The Difference
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            SaturnSide AI vs Generic Automation Tools
          </h2>
        </div>

        <div className="mt-14">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2 text-accent-light">SaturnSide AI</TableHead>
                <TableHead className="w-1/2">Generic Automation Tools</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ROWS.map((row) => (
                <TableRow key={row.saturnside}>
                  <TableCell className="text-white">
                    <span className="flex items-start gap-2.5">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-accent-light" />
                      {row.saturnside}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-start gap-2.5">
                      <X size={16} className="mt-0.5 flex-shrink-0 text-muted/50" />
                      {row.generic}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
