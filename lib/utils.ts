import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to extract repeat count from task title
export function extractRepeat (description) {
  const keywordMap= {
    "早晚": 2,
    "早中晚": 3,
    "三餐": 3,
    "每餐": 3,
    "上下午": 2,
    "三次": 3,
    "四次": 4,
    "五次": 5,
    "3次": 3,
    "4次": 4,
    "5次": 5,
  };

  for (const [key, val] of Object.entries(keywordMap)) {
    if (description.includes(key)) {
      return val;
    }
  }

  // 4. 默认返回 1
  return 1;
}