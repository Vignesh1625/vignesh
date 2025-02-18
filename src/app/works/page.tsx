import { Card } from '@/components/card/card';
import styles from './styles.module.scss';

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>
        <ul className={styles.list}>

          {/* Project 1: Influencer Marketing */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Influencer Marketing"
              description="Built a scalable influencer marketing platform connecting businesses with influencers for custom campaigns."
              href="https://github.com/Vignesh1625/Influencer-Marketing"
              githubUrl="https://github.com/Vignesh1625/Influencer-Marketing"
              topics={['python', 'django', 'machine-learning', 'rest-api', 'postgresql']}
            />
          </li>

          {/* Project 2: Medical Hunt */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Medical Hunt"
              description="Constructed a platform to match students with colleges based on rankings, categories, and preferences."
              href="https://github.com/Vignesh1625/Medical-Hunt"
              githubUrl="https://github.com/Vignesh1625/Medical-Hunt"
              topics={['python', 'flask', 'mongodb', 'machine-learning', 'docker']}
            />
          </li>

          {/* Project 3: SAMAM Mental Peace */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="SAMAM Mental Peace"
              description="Created a virtual mental health assistant delivering personalized recommendations based on clinical assessments."
              href="https://github.com/Vignesh1625/SAMAM-Mental-Peace"
              githubUrl="https://github.com/Vignesh1625/SAMAM-Mental-Peace"
              topics={['python', 'django', 'sqlite', 'machine-learning', 'rest-api']}
            />
          </li>

          {/* Project 4: Dynamic Length Optimization */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Dynamic Length Optimization"
              description="Devised an AI-powered solution to optimize packaging length, reducing material waste by 30%."
              href="https://github.com/Vignesh1625/Dynamic-Length-Optimization"
              githubUrl="https://github.com/Vignesh1625/Dynamic-Length-Optimization"
              topics={['streamlit', 'tensorflow', 'opencv', 'ai']}
            />
          </li>

          {/* Project 1: Food Recognition and Calorie Estimation */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Food Recognition and Calorie Estimation"
              description="Uses OpenCV and CNN to analyze food images and estimate calories, categorized by food type."
              href="https://github.com/Vignesh1625/Food-Recognition-Calorie-Estimation"
              githubUrl="https://github.com/Vignesh1625/Food-Recognition-Calorie-Estimation"
              topics={['opencv', 'tensorflow', 'python']}
            />
          </li>

          {/* Project 2: Task Manager */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Task Manager"
              description="A task management app built using React and Node.js, featuring all essential task management functionalities."
              href="https://github.com/Vignesh1625/Task-Manager"
              githubUrl="https://github.com/Vignesh1625/Task-Manager"
              topics={['react', 'nodejs', 'mongodb']}
            />
          </li>

          {/* Project 3: Resume Generator */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Resume Generator"
              description="An ATS-friendly resume generator built with Streamlit, Google API, and Gemini for dynamic resume creation."
              href="https://github.com/Vignesh1625/Resume-Generator"
              githubUrl="https://github.com/Vignesh1625/Resume-Generator"
              topics={['streamlit', 'google-api', 'python']}
            />
          </li>

          {/* Project 4: Hindi-English OCR */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Hindi-English OCR"
              description="Extracts Hindi and English text from images and identifies specific words within sentences."
              href="https://github.com/Vignesh1625/Hindi-English-OCR"
              githubUrl="https://github.com/Vignesh1625/Hindi-English-OCR"
              topics={['opencv', 'tesseract', 'python']}
            />
          </li>

          {/* Project 5: Lazy Mail */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Lazy Mail"
              description="Automates email outreach to recruiters and employees for job inquiries and referrals at scheduled times."
              href="https://github.com/Vignesh1625/Lazy-Mail"
              githubUrl="https://github.com/Vignesh1625/Lazy-Mail"
              topics={['python', 'smtp', 'automation']}
            />
          </li>

          {/* Project 6: Privacy Chat */}
          <li>
            <Card
              img="/img/works/taskify.jpg" // Placeholder image URL
              title="Privacy Chat"
              description="A secure chat application with end-to-end encryption, hashing messages into binary for privacy."
              href="https://github.com/Vignesh1625/Privacy-Chat"
              githubUrl="https://github.com/Vignesh1625/Privacy-Chat"
              topics={['nodejs', 'encryption', 'socketio']}
            />
          </li>

         
        </ul>
      </div>
    </section>
  );
};

export default Works;