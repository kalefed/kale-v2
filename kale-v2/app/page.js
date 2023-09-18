import { dm_mono, josefin_sans } from './font'

export default function Home() {
  return (
    <main style={{ height: `calc(100vh - ${65}px)` }}>
      <div className="flex flex-col justify-center h-full">
       <h1 className={`lg:text-5xl md:text-4xl text-3xl ${josefin_sans.className}`}>hi there <br /> i'm <span className="text-[#B3D1BF] italic">kaleigh</span>! 🐻</h1>
       <p className={`lg:text-2xl md:text-xl text-lg ${dm_mono.className}`}>an aspiring frontend developer<br />and computer science student</p>
      </div>
    </main>
  )
}
