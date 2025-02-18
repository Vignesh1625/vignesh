"use client";

import { useEffect, useState } from 'react';
import { PC } from '@/components/pc/pc';
import styles from './styles.module.scss';

const Intro = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <section id="home" className={styles.intro}>
      <PC className={styles.pc} />
      <div className={styles.description}>
        <h1 className={styles.title}>
          Hello there! 👋
          <br />
          I&apos;m <span>Vignesh Eligeti</span>
        </h1>
        <p className={styles.text}>
        Freelance Developer | ML Engineer | Backend Development | Django, Spring Boot | Java, Python, C++ | B.Tech CMRCET
        </p>
        <button 
          type="button"
          onClick={() => window.open('https://drive.google.com/file/d/1RKqW8mUVi62dRmeqCtRBdcmwwRQ_ookJ/view?usp=sharing', '_blank', 'noopener noreferrer')}
          className={styles.resumeButton}
        >
          View My Resume
        </button>
      </div>
    </section>
  );
};

export { Intro };