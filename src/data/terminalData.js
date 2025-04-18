/**
 * NYX Terminal Data
 * Contains all data for the terminal application including personal information,
 * projects, skills, anime, manga, games, and other content.
 */

const terminalData = {
  /**
   * Contact information
   */
  contact: {
    email: "foenyx@example.com",
    github: "github.com/foenyx",
    linkedin: "linkedin.com/in/foenyx"
  },

  /**
   * Technical skills
   */
  skills: [
    "JavaScript", 
    "React", 
    "Node.js", 
    "Python", 
    "CSS/SASS", 
    "UI/UX Design"
  ],

  /**
   * Projects with details
   */
  projects: {
    Modelxyz: {
      description: "A 3D model viewer with AR capabilities",
      technologies: ["Three.js", "React", "WebXR"],
      status: "Completed"
    },
    // Add more projects here
  },

  /**
   * Personal hobbies
   */
  hobbies: [
    "Anime & Manga", 
    "Game Development", 
    "Digital Art", 
    "Music Production"
  ],

  /**
   * Educational background
   */
  education: {
    degree: "Computer Science",
    university: "Tech University",
    year: "2023"
  },

  /**
   * Availability status
   */
  availability: "Available for freelance work and collaborations",

  /**
   * Anime list with ratings and genres
   */
  anime: [
    { 
      title: "Attack on Titan", 
      rating: "10/10", 
      genres: ["Action", "Drama", "Fantasy"] 
    },
    { 
      title: "Death Note", 
      rating: "9.5/10", 
      genres: ["Mystery", "Psychological", "Thriller"] 
    },
    { 
      title: "Fullmetal Alchemist: Brotherhood", 
      rating: "9.8/10", 
      genres: ["Action", "Adventure", "Fantasy"] 
    },
    { 
      title: "Demon Slayer", 
      rating: "9.3/10", 
      genres: ["Action", "Supernatural"] 
    },
    { 
      title: "My Hero Academia", 
      rating: "8.7/10", 
      genres: ["Action", "Comedy", "Superhero"] 
    }
  ],

  /**
   * Manga list with authors, ratings and genres
   */
  manga: [
    { 
      title: "Berserk", 
      rating: "10/10", 
      author: "Kentaro Miura", 
      genres: ["Dark Fantasy", "Horror"] 
    },
    { 
      title: "Vagabond", 
      rating: "9.7/10", 
      author: "Takehiko Inoue", 
      genres: ["Action", "Historical"] 
    },
    { 
      title: "One Piece", 
      rating: "9.5/10", 
      author: "Eiichiro Oda", 
      genres: ["Adventure", "Fantasy"] 
    },
    { 
      title: "Chainsaw Man", 
      rating: "9.2/10", 
      author: "Tatsuki Fujimoto", 
      genres: ["Action", "Horror"] 
    },
    { 
      title: "Spy x Family", 
      rating: "8.9/10", 
      author: "Tatsuya Endo", 
      genres: ["Action", "Comedy"] 
    }
  ],

  /**
   * Games list with platforms and ratings
   */
  games: [
    { 
      title: "The Legend of Zelda: Breath of the Wild", 
      platform: "Nintendo Switch", 
      rating: "10/10" 
    },
    { 
      title: "Elden Ring", 
      platform: "PC/Console", 
      rating: "9.8/10" 
    },
    { 
      title: "Final Fantasy VII Remake", 
      platform: "PlayStation", 
      rating: "9.5/10" 
    },
    { 
      title: "Hollow Knight", 
      platform: "PC/Console", 
      rating: "9.6/10" 
    },
    { 
      title: "Persona 5 Royal", 
      platform: "PlayStation/PC", 
      rating: "9.7/10" 
    }
  ],

  /**
   * Welcome message that appears on terminal startup
   */
  welcomeMessage: "Well, hello there! I created this web app for fun. This is basically a chat-bot version of myself (portfolio and hobbies). It also lists my top list of anime and manga. Go ahead, try it out~!"
};

export default terminalData;