import { Navbar } from '@/components/Navbar/Navbar'
import { RecipesList } from '@/components/RecipesList/RecipesList'
import { SectionOne } from '@/components/SectionOne/SectionOne'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <SectionOne />
      <RecipesList />
    </main>
  )
}
