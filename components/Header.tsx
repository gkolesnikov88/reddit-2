import Image from 'next/image'
import React from 'react'
import { 
  ChevronDownIcon, 
  HomeIcon, 
  Bars3Icon, 
  MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { 
  BellIcon, 
  ChatBubbleOvalLeftEllipsisIcon, 
  GlobeEuropeAfricaIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

function Header() {
  return <div className='sticky top-0 z-50 flex bg-white px-4 py-4 shadow-sm'>
    <div className="relative h-10 w-20 flex-shrink-0">
        <Image objectFit='contain' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Reddit_logo_new.svg/1024px-Reddit_logo_new.svg.png" layout='fill'/>
    </div>

    <div className='mx-7 flex items-center xl:min-w-[300px]'>
      <HomeIcon className='h-5 w-5'/>
      <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
      <ChevronDownIcon className='h-5 w-5'/>
    </div>

    {/* Search box */}
    <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
      <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
      <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Reddit'/>
      <button type="submit" hidden/>
    </form>

    {/* Menu Icons */}
    <div className='
      flex items-center text-gray-500 space-x-2 
      mx-5 hidden lg:inline-flex'
    >
      <SparklesIcon className='icon '/>
      <GlobeEuropeAfricaIcon className='icon '/>
      <VideoCameraIcon className='icon '/>
      <hr className='h-10 border border-gray-100'/>
      <ChatBubbleOvalLeftEllipsisIcon className='icon '/>
      <BellIcon className='icon '/>
      <PlusIcon className='icon '/>
      <SpeakerWaveIcon className='icon '/>
    </div>
    {/* Menu Bars */}
    <div className='ml-5 flex items-center lg:hidden'>
      <Bars3Icon className="icon" />
    </div>
    {/* Sing In / Sign Out button */}
    <div className='hidden cursor-pointer items-center space-x-2
       border-gray-100 p-2 lg:flex'
    >
      <div className='relative h-5 w-5 flex-shrink-0'>
        <Image 
          src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
          objectFit='contain'
          layout='fill'
          alt="" />
      </div>
      <p className='text-gray-400'>Sign In</p>      
    </div>
  </div>
}

export default Header