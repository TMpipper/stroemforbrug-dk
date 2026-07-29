"use client";

import { useState } from "react";
import { Zap, TrendingDown } from "lucide-react";
import { ELECTRICITY_PRICE_KR_PER_KWH, CHEAP_PROVIDER_PRICE, CHEAP_PROVIDER_NAME } from "@/lib/config";
import type { CalculatorOption } from "@/lib/types";

interface ForbrugBeregnerProps {
  title: string;
  options: CalculatorOption[];
  usageLabel?: string;
  usageUnit?: string;
  usageMin?: number;
  usageMax?: number;
  usageDefault?: number;
  usageStep?: number;
}

export default function ForbrugBeregner({
  title,
  options,
  usageLabel = "Antal gange pr. uge",
  usageUnit = "pr. uge",
  usageMin = 1,
  usageMax = 14,
  usageDefault = 3,
  usageStep = 1,
}: ForbrugBeregnerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [usage, setUsage] = useState(usageDefault);

  const selected = options[selectedIndex];
  const kwhPerWeek = selected.kwhPerUse * usage;
  const kwhPerYear = kwhPerWeek * 52;
  const kwhPerMonth = kwhPerYear / 12;

  const costPerYear = kwhPerYear * ELECTRICITY_PRICE_KR_PER_KWH;
  const costPerMonth = kwhPerMonth * ELECTRICITY_PRICE_KR_PER_KWH;
  const cheapCostPerYear = kwhPerYear * CHEAP_PROVIDER_PRICE;
  const savings = costPerYear - cheapCostPerYear;

  const fmt = (n: number) =>
    n < 10
      ? n.toFixed(2).replace(".", ",")
      : Math.round(n).toLocaleString("da-DK");

  return (
    <div className="my-10 rounded-card overflow-hidden border-2 border-brand-500 shadow-sm">
      {/* Header */}
      <div className="bg-brand-800 px-6 py-5 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Zap className="w-5 h-5 text-accent-400" />
          <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
            {title}
          </h3>
        </div>
        <p className="text-brand-200 text-sm">
          Beregn dit strømforbrug og se hvad det koster
        </p>
      </div>

      <div className="bg-white px-6 py-6 space-y-6">
        {/* Appliance selector */}
        <div>
          <p className="font-heading font-medium text-sm text-ink-900 mb-3">
            Vælg type:
          </p>
          <div className="space-y-2">
            {options.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => setSelectedIndex(i)}
                className={`w-full text-left px-4 py-3 rounded-card border-2 transition-colors text-sm ${
                  i === selectedIndex
                    ? "border-brand-500 bg-brand-50 text-ink-900 font-medium"
                    : "border-ink-200 bg-white text-ink-600 hover:border-ink-300"
                }`}
              >
                {opt.label} ({opt.kwhPerUse.toFixed(1)} kWh)
              </button>
            ))}
          </div>
        </div>

        {/* Usage slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="font-heading font-medium text-sm text-ink-900">
              {usageLabel}:
            </p>
            <span className="text-lg font-bold text-brand-700">
              {usage} {usageUnit}
            </span>
          </div>
          <input
            type="range"
            min={usageMin}
            max={usageMax}
            step={usageStep}
            value={usage}
            onChange={(e) => setUsage(Number(e.target.value))}
            className="w-full h-2 bg-ink-200 rounded-full appearance-none cursor-pointer accent-brand-600"
          />
          <div className="flex justify-between text-xs text-ink-400 mt-1">
            <span>
              {usageMin} {usageUnit}
            </span>
            <span>
              {usageMax} {usageUnit}
            </span>
          </div>
        </div>

        {/* Results */}
        <div>
          <p className="font-heading font-medium text-sm text-ink-900 mb-3">
            Beregnet strømforbrug:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-surface-alt rounded-card px-4 py-3 text-center">
              <p className="text-xs text-ink-500">Pr. gang</p>
              <p className="text-lg font-bold text-ink-900">
                {fmt(selected.kwhPerUse * ELECTRICITY_PRICE_KR_PER_KWH)} kr.
              </p>
              <p className="text-xs text-ink-400">
                {selected.kwhPerUse.toFixed(1)} kWh
              </p>
            </div>
            <div className="bg-surface-alt rounded-card px-4 py-3 text-center">
              <p className="text-xs text-ink-500">Pr. måned</p>
              <p className="text-lg font-bold text-ink-900">
                {fmt(costPerMonth)} kr.
              </p>
              <p className="text-xs text-ink-400">{fmt(kwhPerMonth)} kWh</p>
            </div>
            <div className="bg-brand-50 rounded-card px-4 py-3 text-center border border-brand-200">
              <p className="text-xs text-brand-700 font-medium">Pr. år</p>
              <p className="text-2xl font-bold text-brand-800">
                {fmt(costPerYear)} kr.
              </p>
              <p className="text-xs text-ink-400">{fmt(kwhPerYear)} kWh</p>
            </div>
            <div className="bg-surface-alt rounded-card px-4 py-3 text-center">
              <p className="text-xs text-ink-500">Over 10 år</p>
              <p className="text-lg font-bold text-ink-900">
                {fmt(costPerYear * 10)} kr.
              </p>
              <p className="text-xs text-ink-400">{fmt(kwhPerYear * 10)} kWh</p>
            </div>
          </div>
        </div>

        {/* Savings highlight */}
        {savings > 10 && (
          <div className="bg-success-50 border border-success-500/20 rounded-card px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-start gap-2">
                <TrendingDown className="w-5 h-5 text-success-600 shrink-0 mt-0.5" />
                <p className="text-sm text-ink-700">
                  <strong className="text-ink-900">
                    Spar {fmt(savings)} kr./år
                  </strong>{" "}
                  ved at skifte til {CHEAP_PROVIDER_NAME} ({CHEAP_PROVIDER_PRICE.toFixed(2).replace(".", ",")} kr./kWh)
                </p>
              </div>
              <a
                href="/go/altid-energi"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="shrink-0 btn-cta whitespace-nowrap"
              >
                Se {CHEAP_PROVIDER_NAME}
              </a>
            </div>
          </div>
        )}

        <p className="text-xs text-ink-400 text-center">
          Beregnet med gennemsnitlig elpris på{" "}
          {ELECTRICITY_PRICE_KR_PER_KWH.toFixed(2).replace(".", ",")} kr./kWh
          inkl. afgifter og transport (2026). Faktisk pris afhænger af dit
          elselskab og spotprisen.
        </p>
      </div>
    </div>
  );
}
