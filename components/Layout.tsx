
import React from 'react';
import { LayoutGrid, User } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xl tracking-tight">
            <LayoutGrid className="w-6 h-6" />
            <span>ClearBin</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">
            C
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 py-8 max-w-md mx-auto w-full">
        {children}
      </main>

      {/* Footer Branding */}
      <footer className="py-6 text-center text-gray-400 text-[10px] uppercase tracking-widest">
        CleanSight Citizen Portal • Campus Maintenance
      </footer>
    </div>
  );
};

export default Layout;
