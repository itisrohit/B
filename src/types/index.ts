export interface StoryEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  imageSrc?: string;
  stickers?: string[];
}

export interface LoveNote {
  id: string;
  sender: string;
  message: string;
  color?: "pink" | "purple" | "yellow" | "blue" | "green";
  rotation?: number; // degree of rotation for digital scrapbook feel
}

export interface FuturePlan {
  id: string;
  title: string;
  description: string;
  status: "completed" | "pending";
  category?: string;
}

export interface ChatMessage {
  id: string;
  sender: "user1" | "user2";
  message: string;
  timestamp: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  duration?: string;
}
