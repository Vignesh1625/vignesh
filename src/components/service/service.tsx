import Link from 'next/link';

import { Card } from '@/components/service-card/card';
import styles from './styles.module.scss';

const Services = () => {
  return (
    <section id="services" className={styles.portfolio}>
      <h2 className={styles.title}>
        <span>My</span> Services
      </h2>

      <ul className={styles.list}>
        <li>
          <Card
           img="/img/services/service_1.png"
           title="Web and Application Development"
           description="Build scalable, user-friendly web and mobile applications using modern frameworks like Flask, Django, and React."
           href="https://github.com/Vignesh1625/web-app-projects"
          />
        </li>
        <li>
          <Card
            img="/img/services/service_2.png"
            title="AI Integration and Powered Solutions"
            description="Integrate advanced AI models into your systems to solve complex challenges, such as recommendation engines, predictive analytics, and more."
            href="https://github.com/Vignesh1625/ai-solutions"
          />
        </li>
        <li>
          <Card
            img="/img/services/service_3.png"
            title="Freelance Development"
            description="Offer tailored solutions for startups and businesses through freelance projects, ensuring high-quality deliverables within deadlines."
            href="https://github.com/Vignesh1625/freelance-projects"
          />
        </li>
      </ul>

    </section>
  );
};

export { Services };
