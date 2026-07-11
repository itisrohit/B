"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, Music, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { MusicTrack } from "@/types";

interface MusicPlayerProps {
  tracks?: MusicTrack[];
  className?: string;
}

const defaultTracks: MusicTrack[] = [
  { id: "track-1", title: "Luv Letters (Pixel Mix)", artist: "Dj Kawaii", duration: "2:45" },
  { id: "track-2", title: "Digital Romance", artist: "Y2K Glitch", duration: "3:12" },
  { id: "track-3", title: "Sweet Dreamer", artist: "McBling Club", duration: "2:58" },
];

export function MusicPlayer({ tracks = defaultTracks, className }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(30); // percentage

  const currentTrack = tracks[currentTrackIndex] || defaultTracks[0];

  // Mock progress bar updating when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  return (
    <div
      className={cn(
        "w-full max-w-[320px] bg-zinc-900 text-zinc-100 p-4 rounded-lg border-2 border-zinc-700 shadow-2xl flex flex-col gap-4 font-mono text-xs select-none",
        className
      )}
    >
      {/* Title Bar (Classic Winamp style) */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
        <div className="flex items-center gap-1.5 font-bold text-pink-400">
          <Music size={12} className="animate-bounce" />
          <span>LOVE_PLAYER.EXE</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Screen Display */}
      <div className="bg-zinc-950 p-3 rounded-md border border-zinc-800 flex flex-col gap-1.5 shadow-inner">
        <div className="flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest">
          <span>Track {currentTrackIndex + 1}/{tracks.length}</span>
          <span>{isPlaying ? "PLAYING" : "STOPPED"}</span>
        </div>
        <div className="text-sm font-bold text-emerald-400 truncate tracking-wide">
          {currentTrack.title}
        </div>
        <div className="text-zinc-400 truncate">
          {currentTrack.artist}
        </div>

        {/* Progress bar container */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex-grow h-2 bg-zinc-800 rounded-full overflow-hidden relative border border-zinc-700">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] text-zinc-400 w-8 text-right font-mono">
            {currentTrack.duration}
          </span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-zinc-800 hover:bg-zinc-700 hover:text-white rounded-md border border-zinc-700 active:translate-y-0.5 transition-transform"
            aria-label="Previous Track"
          >
            <SkipBack size={14} />
          </button>
          <button
            onClick={handlePlayPause}
            className="p-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full border-2 border-pink-500 hover:border-pink-400 active:translate-y-0.5 transition-transform shadow-lg shadow-pink-900/30"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-zinc-800 hover:bg-zinc-700 hover:text-white rounded-md border border-zinc-700 active:translate-y-0.5 transition-transform"
            aria-label="Next Track"
          >
            <SkipForward size={14} />
          </button>
        </div>

        {/* Volume & Details */}
        <div className="flex items-center gap-2 text-zinc-400">
          <Volume2 size={14} />
          <button className="hover:text-pink-500 transition-colors">
            <Heart size={14} className="fill-current text-pink-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
