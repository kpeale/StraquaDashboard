import Image from 'next/image';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <>
      <nav className='fixed px-5 py-2 border-b border-[#00000012] left-0 right-0 top-0 bg-white lg:px-10 lg:py-2 lg:left-[242px]'>
        <header className='flex flex-row justify-between items-center'>
          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              className='p-2'
              onClick={onMenuClick}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          <div className='relative flex-1 max-w-sm lg:max-w-none lg:flex-initial'>
            <form>
              <input
                placeholder='Search for...'
                className='border-[#00000029] p-3 pl-10 border-2 rounded-xl w-full lg:w-[343px]'
              />
              <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                <Image
                  src='/images/searchIcon.png'
                  width={16}
                  height={16}
                  alt='search icon'
                />
              </div>
            </form>
          </div>
          <div className='flex flex-row gap-2 ml-4'>
            <div>
              <Image
                src='/images/bell.png'
                width={32}
                height={32}
                alt='notification icon'
                className='lg:w-[41px] lg:h-[41px]'
              />
            </div>
            <div>
              <Image
                src='/images/user.png'
                width={32}
                height={32}
                alt='user icon'
                className='lg:w-[40px] lg:h-[40px]'
              />
            </div>
          </div>
        </header>
      </nav>
    </>
  );
}
