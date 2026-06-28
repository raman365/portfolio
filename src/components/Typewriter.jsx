import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, infinite, pauseAfterComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      // While typing
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else if (currentIndex === text.length && infinite) {
      // Wait for pause after typing the entire text
      timeout = setTimeout(() => {
        setCurrentText(''); // Reset the text
        setCurrentIndex(0); // Reset the index
      }, pauseAfterComplete); // Pause after completing the typing
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, pauseAfterComplete]);

  useEffect(() => {
    // Toggle cursor visibility after typing completes
    if (currentIndex === text.length) {
      const cursorTimeout = setInterval(() => {
        setShowCursor(prev => !prev); // Toggle the cursor on and off
      }, 500); // Cursor blinks every 500ms

      return () => clearInterval(cursorTimeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {currentText}
      {showCursor && '|'}
    </span>
  );
};

export default Typewriter;
