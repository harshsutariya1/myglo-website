"use client";

import { useState } from 'react';
import { TrendingDown, Calculator } from 'lucide-react';

const FeesComparison = () => {
    const [monthlyRevenue, setMonthlyRevenue] = useState(2000);

    // Constants
    const FRESHA_NEW_CLIENT_FEE = 0.20; // 20%
    const MYGLO_FEE = 0.055; // 5.5% of card payments, no cap

    // Calculate derived values directly during render
    const competitorCommission = Math.round(monthlyRevenue * FRESHA_NEW_CLIENT_FEE);
    const myGloCost = Number((monthlyRevenue * MYGLO_FEE).toFixed(2));

    // Only claim savings against the commission-based example, and only when MyGlo is actually cheaper
    const yearlySavingsVsCommission = (competitorCommission - myGloCost) * 12;

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
                    <span>Monthly Card Booking Revenue</span>
                    <span className="text-white font-bold">{formatCurrency(monthlyRevenue)}</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="6000"
                    step="50"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFB6A3] hover:accent-[#E06052] transition-colors"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>$0</span>
                    <span>$6k+</span>
                </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
                {/* Competitor A */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-transparent">
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-400">Other Apps (Commission)</span>
                        <span className="text-xs text-gray-600">~20% fees on bookings</span>
                    </div>
                    <div className="text-lg font-bold text-gray-300">
                        {formatCurrency(competitorCommission)} <span className="text-xs font-normal opacity-50">/mo (est)</span>
                    </div>
                </div>

                {/* MyGlo */}
                <div className="relative overflow-hidden flex items-center justify-between p-4 rounded-xl bg-linear-to-r from-[#FFB6A3]/20 to-[#E06052]/20 border border-[#FFB6A3]/50">
                    <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
                    <div className="relative z-10 flex flex-col">
                        <span className="text-base font-bold text-white">MyGlo</span>
                        <span className="text-xs text-[#FFB6A3]">5.5% per card booking</span>
                    </div>
                    <div className="relative z-10 text-2xl font-bold text-white">
                        {formatCurrency(myGloCost)} <span className="text-xs font-normal opacity-50 text-gray-300">/mo</span>
                    </div>
                </div>
            </div>

            {/* Savings Message */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
                {yearlySavingsVsCommission > 0 && (
                    <>
                        <p className="text-gray-400 text-sm mb-1">Potential Yearly Savings vs. Commission Apps</p>
                        <div className="text-3xl font-bold text-[#07944F] flex items-center justify-center gap-2">
                            <TrendingDown size={24} />
                            {formatCurrency(yearlySavingsVsCommission)}
                        </div>
                    </>
                )}
                <p className="text-[10px] text-gray-600 mt-2 max-w-xs mx-auto leading-tight">
                    *Estimates only, based on the example competitor rate above. MyGlo cost assumes all revenue is paid by card through MyGlo after the 14-day introductory period. Cash bookings carry no MyGlo fee.
                </p>
            </div>
        </div>
    );
};

export default FeesComparison;
