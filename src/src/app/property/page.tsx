'use client';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { Property } from './components/Property';

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='flex h-screen '>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      <div className='flex-1 flex flex-col lg:ml-[242px]'>
        <Navbar onMenuClick={toggleSidebar} />

        <main className='flex-1 overflow-auto pt-26 p-5 lg:pt-28 lg:px-[40px] lg:ml-[-242px]'>
          <Property />
        </main>
      </div>
    </div>
  );
}
