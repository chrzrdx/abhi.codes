import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// TODO: for some reason, twMerge handles our custom colors; figure out why?
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
