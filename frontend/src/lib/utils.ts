import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateFilename(url: string): string {
  const filename: string = url.split('/').pop() || ""; // Extract filename with extension
  const lastDotIndex: number = filename.lastIndexOf('.'); // Find the last dot for the extension

  if (lastDotIndex === -1) return filename; // Return as is if no extension

  const name: string = filename.substring(0, lastDotIndex); // Extract name
  const extension: string = filename.substring(lastDotIndex); // Extract extension

  return name.length > 12 ? `${name.substring(0, 9)}...${extension}` : filename;
}