const emojiMap: Record<string, string> = {
  happy: "😊",
  sad: "😢",
  love: "❤️",
  heart: "❤️",
  smile: "😊",
  laugh: "😂",
  wink: "😉",
  cool: "😎",
  thumbsup: "👍",
  thumbsdown: "👎",
  fire: "🔥",
  star: "⭐",
  check: "✅",
  warning: "⚠️",
  info: "ℹ️",
  // Add more emojis as needed
};

export const getEmoji = (name: string): string => {
  return emojiMap[name] || name;
};

export const replaceEmojiCodes = (text: string): string => {
  return text.replace(/:(\w+):/g, (match, name) => getEmoji(name) || match);
};
