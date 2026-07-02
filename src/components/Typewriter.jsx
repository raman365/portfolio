import { useEffect, useState } from 'react';

/**
 * Types out each phrase, pauses, deletes it, then moves to the next —
 * looping forever. Pass a single-item array for the old behaviour.
 */
const Typewriter = ({
  phrases,
  typingDelay = 90,
  deletingDelay = 45,
  pause = 2200,
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!deleting && text === current) {
      // Finished typing — hold, then start deleting.
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      // Finished deleting — advance to the next phrase.
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }, deleting ? deletingDelay : typingDelay);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typingDelay, deletingDelay, pause]);

  return (
    <span>
      {text}
      <span className="animate-pulse" aria-hidden="true">
        |
      </span>
    </span>
  );
};

export default Typewriter;
