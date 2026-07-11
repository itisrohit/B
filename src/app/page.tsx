import React from "react";
import { Hero } from "@/components/sections/Hero";
import { StorySection } from "@/components/sections/StorySection";
import { FuturePlanner } from "@/components/sections/FuturePlanner";
import { Footer } from "@/components/sections/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { StickyNote } from "@/components/ui/StickyNote";
import { PaperCard } from "@/components/ui/PaperCard";
import { MusicPlayer } from "@/components/ui/MusicPlayer";
import { ChatBubble } from "@/components/scrapbook/ChatBubble";
import { PixelCharacter } from "@/components/pixel/PixelCharacter";
import { Sticker } from "@/components/decorations/Sticker";
import { FloatingDecoration } from "@/components/decorations/FloatingDecoration";
import { storyEvents } from "@/data/story";
import { loveNotes } from "@/data/notes";
import { futurePlans } from "@/data/future";
import { chatMessages } from "@/data/chats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-bg-secondary select-none">
      {/* Visual background texture overlay representing grid scrap paper */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Main content elements */}
      <main className="flex-grow flex flex-col w-full relative">
        
        {/* 1. HERO SECTION */}
        <Hero id="hero" />

        {/* 2. STORY SECTION */}
        <StorySection id="story" events={storyEvents} />

        {/* 3. LOVE NOTES SECTION */}
        <section id="love-notes" className="py-20 px-4 max-w-6xl mx-auto w-full relative">
          <SectionTitle
            title="Corkboard Love Notes"
            subtitle="Virtual sticky messages pinned onto our shared board"
          />

          {/* Random floating sparkles and stickers on the board */}
          <FloatingDecoration top="5%" right="10%" floatY={6} duration={4}>
            <Sticker emoji="💖" variant="heart" rotation={10} className="border-2" draggable />
          </FloatingDecoration>
          <FloatingDecoration bottom="5%" left="5%" floatY={8} duration={4.5}>
            <Sticker emoji="🎀" variant="bow" rotation={-15} className="border-2" draggable />
          </FloatingDecoration>

          {/* Notes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-12">
            {loveNotes.map((note) => (
              <StickyNote
                key={note.id}
                text={note.message}
                color={note.color}
                rotation={note.rotation}
              />
            ))}
          </div>
        </section>

        {/* 4. FUTURE SECTION */}
        <section id="future" className="py-20 px-4 max-w-6xl mx-auto w-full relative">
          <SectionTitle
            title="Our Future Planner"
            subtitle="Dreaming of places to go and milestones to reach together"
          />

          <FuturePlanner plans={futurePlans} />
        </section>

        {/* 5. ENDING SECTION (Chat room, retro audio, pixel decoration) */}
        <section id="ending" className="py-20 px-4 max-w-6xl mx-auto w-full relative">
          <SectionTitle
            title="Retro Chat & Chill Room"
            subtitle="Catch up on past messages or play retro soundtracks"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12">
            {/* Left Block: AOL/MSN retro chat messenger */}
            <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border-2 border-zinc-700 dark:border-zinc-800 rounded-lg p-4 shadow-md flex flex-col h-[380px]">
              <div className="flex items-center justify-between border-b-2 border-dashed border-zinc-200 dark:border-zinc-800 pb-3 mb-4 select-none">
                <span className="font-mono text-xs font-extrabold text-pink-600 dark:text-pink-400">
                  💬 INSTANT_CHAT_ROOM
                </span>
                <span className="font-mono text-[9px] text-zinc-400">
                  Users online: 2
                </span>
              </div>

              {/* Message scroll viewport */}
              <div className="flex-grow overflow-y-auto pr-1 flex flex-col scrollbar-none">
                {chatMessages.map((msg) => (
                  <ChatBubble
                    key={msg.id}
                    sender={msg.sender}
                    message={msg.message}
                    timestamp={msg.timestamp}
                  />
                ))}
              </div>
            </div>

            {/* Right Block: Winamp controller and pixel dancing pet */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6 justify-center">
              <PaperCard variant="grid" className="flex flex-col items-center gap-6 py-8">
                <MusicPlayer />
                
                {/* Pixel cat dancing, styled as character stamp */}
                <div className="flex flex-col items-center gap-2 mt-2">
                  <div className="relative">
                    <PixelCharacter animate="bounce" size={72} color="fill-pink-500" />
                    {/* Small music notes puffing from the cat */}
                    <div className="absolute -top-2 -right-2 text-xs animate-bounce font-mono">
                      🎵
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Mascot Status: Jamming
                  </span>
                </div>
              </PaperCard>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer text="Memory Lane foundation complete. Ready for Y2K, McBling, and Kawaii styling overlays." />
    </div>
  );
}
