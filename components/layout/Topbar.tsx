'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/customers': 'Customers',
  '/transactions': 'Transactions',
  '/analytics': 'Analytics',
};

export default function Topbar() {
  const pathname = usePathname();
  const router = useRouter();

  const title =
    Object.entries(pageTitles).find(
      ([key]) => pathname === key || pathname.startsWith(key + '/')
    )?.[1] ?? 'Dashboard';

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
      <h1 className="text-xl font-semibold text-slate-800">{title}</h1>

      <div className="flex items-center gap-4">
        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-700">Ishola Olatunde</p>
            <p className="text-xs text-slate-500">ishola@eventpro.com</p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </div>
    </header>
  );
}
