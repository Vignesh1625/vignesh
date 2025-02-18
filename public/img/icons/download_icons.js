const axios = require('axios');
const fs = require('fs');
const path = require('path');

// List of skills and their corresponding SVG icon URLs
const skillsIcons = {
  java: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/java.svg",
  python: "https://simpleicons.org/icons/python.svg",
  "c-cpp": "https://simpleicons.org/icons/cplusplus.svg", // C/C++ icon
  r: "https://simpleicons.org/icons/r.svg",
  sql: "https://simpleicons.org/icons/mysql.svg", // Generic SQL icon (MySQL)
  flask: "https://simpleicons.org/icons/flask.svg",
  django: "https://simpleicons.org/icons/django.svg",
  "spring-boot": "https://simpleicons.org/icons/spring.svg",
  hibernate: "https://simpleicons.org/icons/hibernate.svg",
  nodejs: "https://simpleicons.org/icons/nodedotjs.svg", // Updated URL
  streamlit: "https://simpleicons.org/icons/streamlit.svg",
  tensorflow: "https://simpleicons.org/icons/tensorflow.svg",
  pytorch: "https://simpleicons.org/icons/pytorch.svg",
  postgresql: "https://simpleicons.org/icons/postgresql.svg",
  mysql: "https://simpleicons.org/icons/mysql.svg",
  mongodb: "https://simpleicons.org/icons/mongodb.svg",
  firebase: "https://simpleicons.org/icons/firebase.svg",
  sqlite: "https://simpleicons.org/icons/sqlite.svg",
  git: "https://simpleicons.org/icons/git.svg",
  docker: "https://simpleicons.org/icons/docker.svg",
  kubernetes: "https://simpleicons.org/icons/kubernetes.svg",
  maven: "https://simpleicons.org/icons/apachemaven.svg", // Updated URL
  gradle: "https://simpleicons.org/icons/gradle.svg",
  "jupyter-notebook": "https://simpleicons.org/icons/jupyter.svg",
  numpy: "https://simpleicons.org/icons/numpy.svg",
  pandas: "https://simpleicons.org/icons/pandas.svg",
  matplotlib: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/matplotlib.svg",
  "scikit-learn": "https://simpleicons.org/icons/scikitlearn.svg",
  opencv: "https://simpleicons.org/icons/opencv.svg",
  nltk: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nltk.svg",
  aws: "https://simpleicons.org/icons/amazon.svg", // Updated URL
  gcp: "https://simpleicons.org/icons/googlecloud.svg",
  azure: "https://simpleicons.org/icons/azure.svg", // Updated URL
};

// Function to download an SVG icon
async function downloadIcon(url, filename) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    fs.writeFileSync(filename, response.data);
    console.log(`Downloaded: ${filename}`);
  } catch (error) {
    console.error(`Failed to download ${filename}:`, error.message);
  }
}

// Download all icons
(async () => {
  for (const [skill, url] of Object.entries(skillsIcons)) {
    const filename = path.join(__dirname, `${skill}.svg`); // Save in the same directory as the script
    await downloadIcon(url, filename);
  }
  console.log("All icons downloaded successfully!");
})();