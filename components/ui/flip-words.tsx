'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!isAnimating) {
      timeoutId = setTimeout(() => {
        startAnimation();
      }, duration);
    }
    // Cleanup function to clear the timeout if the component unmounts
    // or if the dependencies change before the timeout is completed.
    return () => clearTimeout(timeoutId);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className="z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2"
        key={currentWord}
      >
        {currentWord.split('').map((letter, index) =>
          letter === ' ' ? (
            <span
              key={currentWord + index}
              className={className}
              style={{ width: 'px' }}
            >
              &nbsp;
            </span>
          ) : (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className={className}
            >
              {letter}
            </motion.span>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};
