"use client";

import React, { useState } from "react";
import { WaitlistEntry, logoutAction } from "@/app/actions/founderActions";
import { Download, Search, LogOut, Users, RefreshCw, Calendar, Mail } from "lucide-react";

export default function DashboardComponent({ data }: { data: WaitlistEntry[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter logic
    const filteredData = data.filter((entry) =>
        entry.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Stats
    const totalCount = data.length;
    const recentCount = data.filter(d => {
        const diff = new Date().getTime() - new Date(d.created_at).getTime();
        return diff < (1000 * 60 * 60 * 24); // Last 24 hours
    }).length;

    const handleLogout = async () => {
        await logoutAction();
    };

    const exportCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + "Email,Date Joined\n"
            + data.map(e => `${e.email},${new Date(e.created_at).toLocaleString()}`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `myglo_waitlist_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen w-full bg-[#FBF9F9] font-sans text-[#140000]">
            {/* Navigation */}
            <nav className="bg-white border-b border-[#F3F3F5] px-6 py-4 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#FFB6A3] to-[#FC69C3] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            M
                        </div>
                        <span className="font-bold text-lg tracking-tight">Founders<span className="text-[#FFB6A3]">.</span></span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#888080] hover:text-[#140000] flex items-center gap-2 transition-colors"
                        >
                            <LogOut size={14} />
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Header Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-2xl border border-[#F3F3F5] shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2 bg-[#FFF3F0] rounded-lg text-[#E06052]">
                                <Users size={20} />
                            </div>
                            <span className="text-xs font-bold text-[#34D399] bg-[#ECFDF5] px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div className="text-3xl font-bold text-[#140000] mb-1">{totalCount}</div>
                        <div className="text-xs font-semibold text-[#888080] uppercase tracking-wide">Total Waitlist</div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-[#F3F3F5] shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2 bg-[#FFF3F0] rounded-lg text-[#FC69C3]">
                                <RefreshCw size={20} />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-[#140000] mb-1">{recentCount}</div>
                        <div className="text-xs font-semibold text-[#888080] uppercase tracking-wide">Joined Last 24h</div>
                    </div>

                    <div className="bg-gradient-to-br from-[#140000] to-[#2a0a0a] p-6 rounded-2xl border border-[#140000] shadow-lg text-white">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2 bg-white/10 rounded-lg text-white">
                                <Download size={20} />
                            </div>
                        </div>
                        <button
                            onClick={exportCSV}
                            className="w-full py-2 bg-white text-[#140000] rounded-lg text-sm font-bold hover:bg-[#FFB6A3] transition-colors"
                        >
                            Export CSV
                        </button>
                        <div className="text-[10px] text-white/50 mt-3 uppercase tracking-wide text-center">Download full list</div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4D4D4]" size={18} />
                        <input
                            type="text"
                            placeholder="Search emails..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-[#E5E5E5] rounded-xl text-sm outline-none focus:border-[#FFB6A3] focus:ring-2 focus:ring-[#FFB6A3]/10 transition-all"
                        />
                    </div>
                    <div className="text-xs font-medium text-[#888080]">
                        Showing <span className="text-[#140000] font-bold">{filteredData.length}</span> results
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-2xl border border-[#F3F3F5] shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#FAFAFA] border-b border-[#F3F3F5]">
                                    <th className="py-4 px-6 text-xs font-bold text-[#888080] uppercase tracking-wider w-16">#</th>
                                    <th className="py-4 px-6 text-xs font-bold text-[#888080] uppercase tracking-wider">Email Address</th>
                                    <th className="py-4 px-6 text-xs font-bold text-[#888080] uppercase tracking-wider text-right">Date Joined</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#F3F3F5]">
                                {filteredData.length > 0 ? (
                                    filteredData.map((entry, index) => (
                                        <tr key={entry.id || index} className="group hover:bg-[#FFFdFc] transition-colors">
                                            <td className="py-4 px-6 text-xs font-medium text-[#D4D4D4] group-hover:text-[#FFB6A3]">
                                                {data.length - index}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-[#FFF3F0] flex items-center justify-center text-[#E06052] font-bold text-xs uppercase">
                                                        {entry.email.charAt(0)}
                                                    </div>
                                                    <span className="font-medium text-[#140000]">{entry.email}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="flex items-center justify-end gap-2 text-sm text-[#534B4B]">
                                                    <Calendar size={14} className="text-[#D4D4D4]" />
                                                    {new Date(entry.created_at).toLocaleDateString("en-AU", {
                                                        day: "numeric",
                                                        month: "short",
                                                        year: "numeric"
                                                    })}
                                                    <span className="text-[#D4D4D4] text-xs ml-1">
                                                        {new Date(entry.created_at).toLocaleTimeString("en-AU", {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        })}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="py-12 text-center">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-12 h-12 bg-[#F3F3F5] rounded-full flex items-center justify-center text-[#D4D4D4]">
                                                    <Mail size={24} />
                                                </div>
                                                <p className="text-[#888080] text-sm">No entries found matching "{searchTerm}"</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
