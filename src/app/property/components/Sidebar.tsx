'use client';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out flex flex-col pt-4 pl-4 pr-4 border-r border-[#00000012] lg:translate-x-0 lg:static lg:inset-0 lg:w-[242px] lg:h-screen lg:pt-[16px] lg:pl-[16px] lg:pr-[16px] lg:flex lg:flex-col overflow-hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex justify-center items-center flex-shrink-0 mb-8 lg:mb-[32px]'>
          <Image
            src='/images/logo.png'
            width={131}
            height={39.95}
            alt='logo'
          />
        </div>

        <div className='flex flex-col flex-1 justify-between min-h-0'>
          <nav className='flex flex-col gap-6 lg:gap-[24px] flex-shrink-0'>
            <div className='flex flex-row items-center gap-2 lg:gap-[8px]'>
              <div>
                <Image
                  src='/images/dashboardIcon.png'
                  width={16}
                  height={16}
                  alt='dashboard icon'
                />
              </div>
              <p className='text-sm font-normal text-[#0e121b] lg:text-[14px]'>
                Dashboard
              </p>
            </div>

            <div className='flex flex-row items-center gap-2 bg-[#0E121B] rounded-lg py-3 ml-[-10px] pl-2 max-w-[210px] lg:gap-[8px] lg:w-[210px] lg:rounded-[8px] lg:py-[12px] lg:px-[16px] lg:ml-[-10px]'>
              <div className='lg:ml-[-5px]'>
                <Image
                  src='/images/propertiesIcon.png'
                  width={16}
                  height={16}
                  alt='properties icon'
                />
              </div>
              <p className='text-sm font-normal text-white lg:text-[14px]'>
                My properties
              </p>
            </div>

            <div className='flex flex-row items-center gap-2 lg:gap-[8px]'>
              <div>
                <Image
                  src='/images/bookingIcon.png'
                  width={16}
                  height={16}
                  alt='booking icon'
                />
              </div>
              <p className='text-sm font-normal text-[#0e121b] lg:text-[14px]'>
                Bookings
              </p>
            </div>

            <div className='flex flex-row items-center gap-2 lg:gap-[8px]'>
              <div>
                <Image
                  src='/images/guestIcon.png'
                  width={16}
                  height={16}
                  alt='guest icon'
                />
              </div>
              <p className='text-sm font-normal text-[#0e121b] lg:text-[14px]'>
                Guests
              </p>
            </div>

            <div className='flex flex-row items-center gap-2 lg:gap-[8px]'>
              <div>
                <Image
                  src='/images/campaignIcon.png'
                  width={16}
                  height={16}
                  alt='campaign icon'
                />
              </div>
              <p className='text-sm font-normal text-[#0e121b] lg:text-[14px]'>
                Campaigns
              </p>
            </div>

            <div className='flex flex-row items-center gap-2 lg:gap-[8px]'>
              <div>
                <Image
                  src='/images/reportsIcon.png'
                  width={16}
                  height={16}
                  alt='reports icon'
                />
              </div>
              <p className='text-sm font-normal text-[#0e121b] lg:text-[14px]'>
                Reports
              </p>
            </div>

            <div className='flex flex-row items-center gap-2 lg:gap-[8px]'>
              <div>
                <Image
                  src='/images/settingsIcon.png'
                  width={16}
                  height={16}
                  alt='settings icon'
                />
              </div>
              <p className='text-sm font-normal text-[#0e121b] lg:text-[14px]'>
                Settings
              </p>
            </div>

            <div className='flex flex-row items-center gap-2 lg:gap-[8px]'>
              <div>
                <Image
                  src='/images/supportIcon.png'
                  width={16}
                  height={16}
                  alt='support icon'
                />
              </div>
              <p className='text-sm font-normal text-[#0e121b] lg:text-[14px]'>
                Support
              </p>
            </div>
          </nav>

          <div className='pb-4 lg:pb-[16px] flex-shrink-0'>
            <div className='flex flex-row items-center gap-2 lg:gap-[8px]'>
              <div>
                <Image
                  src='/images/logoutIcon.png'
                  width={16}
                  height={16}
                  alt='logout icon'
                />
              </div>
              <p className='text-sm font-normal text-[#FB3748] lg:text-[14px]'>
                Log out
              </p>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 bg-white bg-opacity-50 z-40 lg:hidden'
          onClick={onClose}
        ></div>
      )}
    </>
  );
}
