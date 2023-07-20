import blogImg from "../assets/Images/blog.png";
import instaImg from "../assets/Images/insta.png";
import memoryImg from "../assets/Images/memorygame.png";
import waldoImg from "../assets/Images/waldo.png";

export const projects = [
  {
    projectTitle: "Personal Blog",
    projectDescription:
      "Front-end of the personal blog built with react, It's a full featured app which allows users to read blog posts and write comments for the post only if they login and also has a feature to delete the comment. This app also has a backend which allows me to post a blog from it, using the backend app I can unpublish the published blog, edit blog posts, view and delete comments.",
    buildWith: ["React", "Styled Components", "Javascript"],
    liveLink: "https://karthicbz.github.io/blog-frontend/",
    githubLink: "https://github.com/karthicbz/blog-frontend",
    screenshot: blogImg,
  },
  {
    projectTitle: "Instagram Clone",
    projectDescription:
      "Created a Cloned version of instagram using react and firebase as backend. It has all the functionality like instagram where users can create posts, follow other users, like and comment on posts .",
    buildWith: ["React", "Styled Components", "Javascript", "Firebase"],
    liveLink: "https://karthicbz.github.io/insta-clone/",
    githubLink: "https://github.com/karthicbz/insta-clone",
    screenshot: instaImg,
  },
  {
    projectTitle: "Memory Card",
    projectDescription:
      "Flash card-like memory game created using react, I have used the harry potter characters for this project, the user loses the game if they clicked the same character twice.",
    buildWith: ["React", "Javascript"],
    liveLink: "https://karthicbz.github.io/odin_memorycard/",
    githubLink: "https://github.com/karthicbz/odin_memorycard",
    screenshot: memoryImg,
  },
  {
    projectTitle: "Where's Waldo",
    projectDescription:
      "It's a game where users need to find a specified character from a highly populated image. This game has 3 difficulty levels. I have used firebase to store images for the game and gaming stats. The game features include the users can view how much time it takes to finish the game and also see their score in the leaderboard.",
    buildWith: ["React", "Firebase", "Javascript"],
    liveLink: "https://karthicbz.github.io/waldo-project/",
    githubLink: "https://github.com/karthicbz/waldo-project",
    screenshot: waldoImg,
  },
];
