import Image from 'next/image';
import Link from 'next/link';

export function Property() {
  return (
    <>
      <div className='px-2 lg:px-0'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[#0E121B] font-medium text-2xl leading-[100%] tracking-[-3%]'>
            My properties
          </h2>
          <p className='text-[#676D72B2] font-normal text-sm leading-[100%] tracking-[-3%]'>
            View, edit, or unlist your active properties anytime.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center mt-16 lg:mt-24 gap-4'>
          <div>
            <Image
              src='/images/bigbuildingIcon.png'
              width={200}
              height={167}
              alt='building'
              className='lg:w-[249.81px] lg:h-[208.44px]'
            />
          </div>
          <div className='gap-2 flex flex-col items-center'>
            <p className='text-[#0E121B] font-medium text-xl lg:text-2xl leading-[100%] tracking-[-3%] text-center'>
              You have not listed any property yet.
            </p>
            <p className='text-[#676D72B2] font-normal text-sm leading-[100%] tracking-[-3%] text-center max-w-sm lg:max-w-[379.1px]'>
              Add a property to unlock bookings, track performance, and manage
              guests.
            </p>
          </div>
          <div className='mt-4 lg:mt-4 mb-20 lg:mb-40'>
            <Link
              href='/propertyInformation'
              className='bg-[#020C14] rounded-lg py-3 px-6 text-white font-medium text-base leading-[145%] tracking-[-3%] inline-block'
            >
              Add property
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
