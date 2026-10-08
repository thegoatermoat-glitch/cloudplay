'use client'

import { useEffect, useMemo, useState } from 'react'
import { CircleHelp, Gamepad2, Maximize2, MonitorPlay, Settings2, ShieldCheck, Sparkles, X } from 'lucide-react'

const games = [
  { title: 'Roblox', packageId: 'com.roblox.client', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roblox_Logo_2021-ACtsGm7d8ZtZ53NCIRQJN5W0Sl1ejY.png', genre: 'Modded version' },
  { title: 'Fortnite', packageId: 'com.epicgames.fortnite', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fortnite_F_lettermark_logo%20%281%29-YPaSn9VpypDclUJyggGQCs9cg7SAyx.png', genre: 'Unmodded version' },
  { title: 'Terraria', packageId: 'com.and.games505.TerrariaPaid', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-726AVRWUC34OGWcbjpb5ZXXpIblbRs.jpeg', genre: 'Modded version' },
]

export default function Page() {
  const [activeGame, setActiveGame] = useState<(typeof games)[number] | null>(null)
  const [secondsLeft, setSecondsLeft] = useState(1200)

  useEffect(() => {
    if (!activeGame) return
    const timer = window.setInterval(() => setSecondsLeft((value) => Math.max(0, value - 1)), 1000)
    return () => window.clearInterval(timer)
  }, [activeGame])

  useEffect(() => {
    if (secondsLeft === 0) setActiveGame(null)
  }, [secondsLeft])

  const time = useMemo(() => `${String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`, [secondsLeft])
  const launch = (game: (typeof games)[number]) => {
    setSecondsLeft(1200)
    setActiveGame(game)
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-white/15 px-6 py-5 lg:px-10">
        <a href="/" className="text-[21px] font-semibold tracking-[-0.04em]">CloudPlay<span className="text-white/35">.</span></a>
        <a className="hidden items-center gap-2 border border-white/20 px-3 py-2 text-xs font-medium text-white/70 transition hover:border-white hover:text-white sm:flex" href="https://discord.gg/ZpyGAQV99" target="_blank" rel="noreferrer"><svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-current"><path d="M19.54 5.2A16.9 16.9 0 0 0 15.4 4l-.5 1.02a15.7 15.7 0 0 0-5.8 0L8.6 4a16.9 16.9 0 0 0-4.15 1.2C1.82 9.02 1.1 12.75 1.45 16.43a16.8 16.8 0 0 0 5.1 2.58l1.24-1.7a10.1 10.1 0 0 1-1.96-.94l.48-.37c3.78 1.76 7.87 1.76 11.6 0l.49.37c-.63.37-1.28.68-1.97.94l1.24 1.7a16.8 16.8 0 0 0 5.1-2.58c.4-4.27-.68-7.96-3.23-11.23ZM8.2 14.3c-1.13 0-2.06-1.04-2.06-2.3s.91-2.3 2.06-2.3c1.15 0 2.08 1.04 2.06 2.3 0 1.26-.91 2.3-2.06 2.3Zm7.6 0c-1.13 0-2.06-1.04-2.06-2.3s.91-2.3 2.06-2.3c1.15 0 2.08 1.04 2.06 2.3 0 1.26-.91 2.3-2.06 2.3Z"/></svg> Discord</a>
      </header>

      <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-12 lg:px-10 lg:pt-16">
        <div className="grid gap-4 md:grid-cols-3">{games.map((game, index) => <article key={game.packageId} className="group border border-white/15 bg-[#080808] transition hover:border-white/50"><div className="relative aspect-[1.45] overflow-hidden grayscale"><img src={game.image} alt={`${game.title} game artwork`} className="size-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-95" /><span className="absolute left-4 top-4 border border-white/25 bg-black/70 px-2 py-1 text-[10px] font-medium text-white/70">0{index + 1}</span></div><div className="p-5"><div className="flex items-start justify-between gap-3"><div><h2 className="text-xl font-semibold tracking-[-0.04em]">{game.title}</h2><p className="mt-1 text-xs text-white/40">{game.genre}</p></div><Gamepad2 className="mt-1 size-4 text-white/35" /></div><div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><code className="max-w-[180px] truncate text-[10px] text-white/35">{game.packageId}</code><button onClick={() => launch(game)} className="flex items-center gap-2 bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/80">Play <MonitorPlay className="size-3.5" /></button></div></div></article>)}</div>
      </section>
      {activeGame && <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 p-4"><div className="relative w-full max-w-5xl border border-white/25 bg-[#080808] shadow-2xl"><div className="flex items-center justify-between border-b border-white/15 px-5 py-4"><div className="flex items-center gap-3"><span className="size-2 animate-pulse bg-white" /><div><p className="text-sm font-semibold">{activeGame.title}</p><p className="text-[10px] uppercase tracking-[0.18em] text-white/40">Foxphone stream · {activeGame.packageId}</p></div></div><div className="flex items-center gap-4"><span className="font-mono text-sm text-white/70">{time}</span><button aria-label="Close stream" onClick={() => setActiveGame(null)}><X className="size-4 text-white/50 hover:text-white" /></button></div></div><div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#101010]"><div className="absolute inset-0 opacity-20" style={{backgroundImage: `url(${activeGame.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} /><div className="relative text-center"><div className="mx-auto mb-5 flex size-16 items-center justify-center border border-white/30"><MonitorPlay className="size-6 text-white/60" /></div><p className="text-sm font-medium">Preparing secure stream</p><p className="mt-2 text-xs text-white/40">Locking session to {activeGame.title}</p></div><div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border border-white/10 bg-black/70 px-4 py-3 text-[10px] text-white/50"><span>W A S D · SPACE · SHIFT</span><span className="hidden sm:inline">GAMEPAD READY · TOUCH ENABLED</span><span className="flex items-center gap-2"><Settings2 className="size-3" /> Controls</span></div></div></div></div>}
    </main>
  )
}

export function AdminHint() { return <span className="sr-only"><ShieldCheck /> <CircleHelp /> <Maximize2 /> <Sparkles /></span> }

