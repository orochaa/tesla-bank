import { HeaderSection } from '@/sections/header-section'
import { HomeSection } from '@/sections/home-section'

export function App(): React.JSX.Element {
  return (
    <div className="min-h-svh w-full bg-white">
      <HeaderSection />
      <HomeSection />
    </div>
  )
}
