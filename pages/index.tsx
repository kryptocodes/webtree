import Image from 'next/image'
import { Inter } from 'next/font/google'
import WebtreeLogo from '@/assets/logo/webtreeLogo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen bg-black 
      flex flex-col justify-center items-center
    '>
      <WebtreeLogo className='w-64 h-64' />

      <button className='bg-white text-black font-bold rounded-lg px-4 py-2 mt-4'>
        Sign up
      </button>
    </main>
  )
}
