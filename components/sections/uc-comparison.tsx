"use client";

import { motion } from "framer-motion";
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
    saturnside: "Made just for your business",
    generic: "Same for every business",
  },
  {
    saturnside: "Knows what's urgent and what can wait",
    generic: "Treats every call the same",
  },
  {
    saturnside: "Sends jobs to the right worker by itself",
    generic: "Can't connect to your schedule",
  },
  {
    saturnside: "Your customer info stays with you",
    generic: "Your info goes to other companies",
  },
  {
    saturnside: "Answers in seconds, day and night",
    generic: "Slow, and often off after hours",
  },
  {
    saturnside: "Changes when your business changes",
    generic: "Can't update without starting over",
  },
];

export function UseCasesComparison() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[560px] text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-light">
            The Difference
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            SaturnSide AI vs Other Tools
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14"
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2 text-accent-light">SaturnSide AI</TableHead>
                <TableHead className="w-1/2">Other Tools</TableHead>
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
        </motion.div>
      </div>
    </section>
  );
}
