import Link from 'next/link';
import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>
        <span>My</span> Works
      </h2>
      <ul className={styles.list}>
        {/* Project 1: Medical Hunt */}
        <li>
          <Card
            img="/img/works/project_1.jpg" // Placeholder image URL
            title="Medical Hunt"
            description="A machine learning-driven platform for NEET seat analysis, matching students to colleges based on rankings, categories, and preferences. Processed over 700+ user profiles, achieving 92% recommendation accuracy and driving a 14x revenue increase."
            href="https://medicalhunt.in/" // Live demo link
            githubUrl="https://github.com/Vignesh1625/medical-hunt" // GitHub repository link
            topics={['Python', 'Flask', 'MongoDB', 'Machine Learning', 'Docker']} // Corrected topics
          />
        </li>

        {/* Project 2: SAMAM Mental Peace */}
        <li>
          <Card
            img="/img/works/project_2.png" // Placeholder image URL
            title="SAMAM Mental Peace"
            description="A virtual mental health assistant that analyzes clinical assessments and delivers personalized recommendations. Analyzed over 5,000 assessments, achieving 97% predictive accuracy for identifying mental disorders."
            href="https://samam-mental-peace.vercel.app/" // Live demo link (replace with actual link if available)
            githubUrl="https://github.com/Vignesh1625/samam-mental-peace" // GitHub repository link
            topics={['Python', 'Django', 'SQLite', 'REST API', 'Machine Learning']} // Corrected topics
          />
        </li>

        {/* Project 3: Dynamic Length Optimization */}
        <li>
          <Card
            img="/img/works/project_1.jpg" // Placeholder image URL
            title="Dynamic Length Optimization"
            description="An AI-powered solution to optimize packaging length, reducing material waste by 30%. Constructed predictive models using TensorFlow and OpenCV and launched an interactive dashboard with Streamlit for real-time insights."
            href="https://dynamic-length-optimization.vercel.app/" // Live demo link (replace with actual link if available)
            githubUrl="https://github.com/Vignesh1625/dynamic-length-optimization" // GitHub repository link
            topics={['TensorFlow', 'OpenCV', 'Streamlit', 'AI']} // Corrected topics
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/works">
        See more
      </Link>
    </section>
  );
};

export { Portfolio };