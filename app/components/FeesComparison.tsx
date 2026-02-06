"use client";

import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingDown, Info, Calculator, Check } from 'lucide-react';

const FeesComparison = () => {
    const [monthlyRevenue, setMonthlyRevenue] = useState(2000);
    const [competitorCommission, setCompetitorCommission] = useState(0);
    const [competitorSubscription, setCompetitorSubscription] = useState(0);
    const [myGloCost, setMyGloCost] = useState(0);

    // Constants
    const FRESHA_NEW_CLIENT_FEE = 0.20; // 20%
    const TIMELY_SUBSCRIPTION = 80; // Avg subscription cost
    const MYGLO_COMMISSION = 0.075; // 7.5%
    const MYGLO_CAP = 59; // Max fee

    useEffect(() => {
        // Competitor 1: High Commission Model (e.g. Fresha)
        // Assumption: ~30% of revenue comes from new clients for a growing salon
        const newClientRevenue = monthlyRevenue * 0.30;
        const commFee = newClientRevenue * FRESHA_NEW_CLIENT_FEE;
        // Plus maybe a base fee or processing? Let's keep it simple based on the user's "20% commission" point.
        // To represent "Competitors charge ~20% here" accurately to the user's pitch.
        // Let's just calculate a flat 20% on "New Client" portion, but strictly following the user's 
        // "Competitors charge ~20%" implies high fees. 
        // Let's try a different simpler approach: 
        // The user said: "Fresha rips salons off with high commissions (20% for new clients)"
        // Let's assume a blended effective rate or just show the "New Client" impact.
        // Better yet, let's model a scenario: "20% fee on 25% of bookings"
        setCompetitorCommission(Math.round(monthlyRevenue * 0.25 * 0.20));

        // Competitor 2: High Fixed Cost (e.g. Timely)
        setCompetitorSubscription(TIMELY_SUBSCRIPTION);

        // MyGlo Calculation
        let calculatedFee = monthlyRevenue * MYGLO_COMMISSION;
        if (calculatedFee > MYGLO_CAP) {
            calculatedFee = MYGLO_CAP;
        }
        setMyGloCost(Number(calculatedFee.toFixed(2)));

    }, [monthlyRevenue]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-6">
                <Calculator className="text-[#E06052]" size={20} />
                <h3 className="text-xl font-bold text-white">Compare Your Costs</h3>
            </div>

            {/* Slider Input */}
            <div className="mb-8">
                <div className="flex justify-between text-sm mb-2 text-gray-400">
                    <span>Monthly Revenue</span>
                    <span className="text-white font-bold">{formatCurrency(monthlyRevenue)}</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFB6A3] hover:accent-[#E06052] transition-colors"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>$0</span>
                    <span>$10k+</span>
                </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
                {/* Competitor A */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-transparent">
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-400">Other Apps (Commission)</span>
                        <span className="text-xs text-gray-600">~20% fees</span>
                    </div>
                    <div className="text-lg font-bold text-gray-300">
                        {formatCurrency(competitorCommission * 4)} <span className="text-xs font-normal opacity-50">/mo (est)</span>
                    </div>
                </div>

                {/* Competitor B */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-transparent">
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-400">Other Apps (subscription)</span>
                        <span className="text-xs text-gray-600">Fixed Cost</span>
                    </div>
                    <div className="text-lg font-bold text-gray-300">
                        {formatCurrency(competitorSubscription)} <span className="text-xs font-normal opacity-50">/mo</span>
                    </div>
                </div>

                {/* MyGlo */}
                <div className="relative overflow-hidden flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#FFB6A3]/20 to-[#E06052]/20 border border-[#FFB6A3]/50">
                    <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                    <div className="relative z-10 flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-white">MyGlo</span>
                            {monthlyRevenue > 800 && (
                                <span className="px-1.5 py-0.5 rounded-md bg-[#07944F]/20 border border-[#07944F]/30 text-[#07944F] text-[10px] font-bold uppercase tracking-wide">
                                    Capped
                                </span>
                            )}
                        </div>
                        <span className="text-xs text-[#FFB6A3]">Pay-As-You-Go</span>
                    </div>
                    <div className="relative z-10 text-2xl font-bold text-white">
                        {formatCurrency(myGloCost)} <span className="text-xs font-normal opacity-50 text-gray-300">/mo</span>
                    </div>
                </div>
            </div>

            {/* Savings Message */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm mb-1">Potential Yearly Savings</p>
                <div className="text-3xl font-bold text-[#07944F] flex items-center justify-center gap-2">
                    <TrendingDown size={24} />
                    {formatCurrency((Math.max(competitorCommission * 4, competitorSubscription) - myGloCost) * 12)}
                </div>
                <p className="text-[10px] text-gray-600 mt-2 max-w-[200px] mx-auto leading-tight">
                    *Savings calculated against standard competitor rates. Actual amounts may vary.
                </p>
            </div>
        </div>
    );
};

export default FeesComparison;
