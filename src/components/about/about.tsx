import Link from 'next/link';
import Image from 'next/image';
import { Skill } from '@/common/types/types';
import { Icon } from '@/components/icon/icon';
import styles from './styles.module.scss';

const About = () => {
  const skills: Skill[] = [
    // Programming Languages
    { title: 'Java', iconName: 'java', href: 'https://www.java.com/' },
    { title: 'Python', iconName: 'python', href: 'https://www.python.org/' },
    { title: 'C/C++', iconName: 'ccpp', href: 'https://isocpp.org/' },
    { title: 'JavaScript', iconName: 'js', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/' },
    { title: 'R', iconName: 'r', href: 'https://www.r-project.org/' },
    { title: 'SQL', iconName: 'sql', href: 'https://www.postgresql.org/' },

    // Web Technologies
    { title: 'HTML', iconName: 'html', href: 'https://html.spec.whatwg.org/multipage/' },
    { title: 'CSS', iconName: 'css', href: 'https://www.w3.org/Style/CSS/' },
    { title: 'GraphQL', iconName: 'graphql', href: 'https://graphql.org/' },

    // Frameworks & Platforms
    { title: 'Flask', iconName: 'flask', href: 'https://flask.palletsprojects.com/' },
    { title: 'Django', iconName: 'django', href: 'https://www.djangoproject.com/' },
    { title: 'Spring Boot', iconName: 'springBoot', href: 'https://spring.io/projects/spring-boot' },
    { title: 'Hibernate', iconName: 'hibernate', href: 'https://hibernate.org/' },
    { title: 'Node.js', iconName: 'nodejs', href: 'https://nodejs.org/' },
    { title: 'Streamlit', iconName: 'streamlit', href: 'https://streamlit.io/' },
    { title: 'TensorFlow', iconName: 'tensorflow', href: 'https://www.tensorflow.org/' },
    { title: 'PyTorch', iconName: 'pytorch', href: 'https://pytorch.org/' },

    // Databases
    { title: 'PostgreSQL', iconName: 'postgresql', href: 'https://www.postgresql.org/' },
    { title: 'MySQL', iconName: 'mysql', href: 'https://www.mysql.com/' },
    { title: 'MongoDB', iconName: 'mongodb', href: 'https://www.mongodb.com/' },
    { title: 'Firebase', iconName: 'firebase', href: 'https://firebase.google.com/' },
    { title: 'SQLite', iconName: 'sqlite', href: 'https://www.sqlite.org/' },

    // Developer Tools
    { title: 'Git', iconName: 'git', href: 'https://git-scm.com/' },
    { title: 'Docker', iconName: 'docker', href: 'https://www.docker.com/' },
    { title: 'Kubernetes', iconName: 'kubernetes', href: 'https://kubernetes.io/' },
    { title: 'Maven', iconName: 'maven', href: 'https://maven.apache.org/' },
    { title: 'Gradle', iconName: 'gradle', href: 'https://gradle.org/' },
    { title: 'Jupyter Notebook', iconName: 'jupyterNotebook', href: 'https://jupyter.org/' },

    // Libraries & Data Science
    { title: 'NumPy', iconName: 'numpy', href: 'https://numpy.org/' },
    { title: 'Pandas', iconName: 'pandas', href: 'https://pandas.pydata.org/' },
    { title: 'Scikit-learn', iconName: 'scikitLearn', href: 'https://scikit-learn.org/' },
    { title: 'OpenCV', iconName: 'opencv', href: 'https://opencv.org/' },

    // Cloud Platforms
    { title: 'AWS', iconName: 'aws', href: 'https://aws.amazon.com/' },
    { title: 'GCP', iconName: 'gcp', href: 'https://cloud.google.com/' },
    { title: 'Azure', iconName: 'azure', href: 'https://azure.microsoft.com/' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <Image
          className={styles.img}
          src="/img/about.png"
          width={550}
          height={320}
          alt="Picture with characters from anime and video games"
        />
        <div className={styles.content}>
          <h2 className={styles.title}>About <span>Me</span></h2>
          <p className={styles.text}>
            Greetings! I&apos;m <span>Vignesh Eligeti</span>, a dedicated Full Stack Developer with experience in backend development, 
            machine learning, and automation. I have worked on diverse projects, including mental health applications, 
            e-commerce platforms, and AI-driven job search tools. My expertise includes <span>Java</span>, <span>Python</span>, 
            <span>JavaScript</span>, <span>Flask</span>, <span>Spring Boot</span>, <span>MongoDB</span>, <span>TensorFlow</span>, 
            and <span>AWS</span>. I am passionate about building scalable and efficient applications while continuously exploring 
            new technologies.
          </p>
        </div>
      </div>
      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <ul className={styles.skillsList}>
          {skills.map(skill => (
            <li key={skill.title}>
              <Link
                className={styles.skillsLink}
                href={skill.href}
                title={skill.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  aria-label={skill.title + ' logo'}
                  name={skill.iconName}
                  size={50}
                />    
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { About };