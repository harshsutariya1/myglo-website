import React from 'react';
import { checkAuth, getWaitlistData } from '@/app/actions/founderActions';
import LoginComponent from './LoginComponent';
import DashboardComponent from './DashboardComponent';
import { AlertTriangle } from 'lucide-react';

export const metadata = {
    title: 'Founder Access | MyGlo',
    robots: 'noindex, nofollow'
};

export default async function FounderPage() {
    // Auth check removed as per user request
    // const isAuthenticated = await checkAuth();

    // if (!isAuthenticated) {
    //     return <LoginComponent />;
    // }

    // Fetch data
    const { success, data, error } = await getWaitlistData();

    if (!success || !data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FFF3F0] p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-red-100">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                        <AlertTriangle size={32} />
                    </div>
                    <h1 className="text-xl font-bold text-[#140000] mb-2">Access Error</h1>
                    <p className="text-[#534B4B] mb-6">{error || "An unknown error occurred while fetching the waitlist."}</p>
                    <div className="text-xs text-left bg-gray-50 p-4 rounded-lg font-mono text-gray-500 break-all border border-gray-100">
                        Hint: Ensure <code>SUPABASE_SERVICE_ROLE_KEY</code> is set in your environment variables if RLS is enabled on the table.
                    </div>
                    <a href="/waitlist" className="mt-6 inline-block text-sm font-bold text-[#140000] hover:text-[#FFB6A3] transition-colors">
                        Try Refreshing
                    </a>
                </div>
            </div>
        );
    }

    return <DashboardComponent data={data} />;
}
