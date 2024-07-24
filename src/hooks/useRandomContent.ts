import { useCallback, useEffect, useState } from 'react';

const notes = ['A', 'B♭', 'B', 'C', 'C#', 'D', 'E♭', 'E', 'F', 'F#', 'G', 'A♭'];

export const useRandomContent = () => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    updateContent();

    // 3分ごとにコンテンツを更新する
    const intervalId = setInterval(updateContent, 3 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const updateContent = useCallback(() => {
    while (true) {
      const newContent = notes[Math.floor(Math.random() * notes.length)];
      if (newContent !== content) {
        setContent(newContent);
        break;
      }
    }
  }, [content]);

  return content;
};
