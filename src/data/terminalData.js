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
    email: "pranjalmlokhande@gmail.com",
    github: "github.com/frolicphoenix",
    linkedin: "linkedin.com/in/pranjallokhande",
    medium: "medium.com/@pranjalmlokhande",
    youtube: "youtube.com/@theunrealdesigner"
  },

  /**
   * Technical skills
   */
  skills: {
    languages: ["C#", "JavaScript", "PHP", "C++", "Objective-C", "SQL", "Python"],
    frameworks: ["React", "Node", "TypeScript", "Angular", ".NET"],
    tools: ["AJAX", "HTTP", "XML", "MS SQL Server", "Azure", "Git", "Docker"],
    gameDev: ["Unity", "Unreal Engine"]
  },

  /**
   * Projects with details
   */
  projects: {
    'Pokémon Unite Build Tracker': {
      description: "Pokémon Unite Build Tracker is an ASP.NET Core Web App that helps users to check the stats of their pokémon by attaching held items and a battle item and save the builds.",
      technologies: ["C#", "ASP.NET MVC"],
      link: "github.com/frolicphoenix/PokemonUniteBuildTracker_PassionProject",
      status: "Completed"
    },
    'Astronomy in Books': {
      description: "Astronomy in Books offers a way to discover books related to astronomical events by tapping into NASA's astronomical data and Google Books' vast library.",
      technologies: ["PUG", "Google Books API", "NASA API"],
      link: "github.com/frolicphoenix/astronomy-in-books",
      status: "Completed"
    },
    'Virtual Zoo': {
      description: "Virtual Zoo is a minimal Infrastructure as Code (IaC) experiment where pets are deployed, aged, and cared for like virtual machines in a cloud.",
      technologies: ["Go", "Python", "YAML", "HTTP (REST)", "Mutex"],
      link: "github.com/frolicphoenix/virtualzoo",
      status: "Completed"
    }
  },

  /**
   * Personal hobbies
   */
  hobbies: [
    "Video Games",
    "Astronomy", 
    "Anime & Manga",
    "Books",
    "Digital Art", 
    "Ice Skating"
  ],

  /**
   * Educational background
   */
  education: {
    associates: {
      degree: "Post Graduation",
      field: "Web Development",
      institution: "Humber College, Canada",
      year: 2024
    },
    masters: {
      degree: "Master of Science",
      field: "Game Design",
      institution: "Full Sail University, USA",
      year: 2021
    },
    bachelors: {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Rai University, India",
      year: 2019
    }
  },

  /**
   * Availability status
   */
  availability: "Available for FULL TIME, freelance work and collaborations.",

  /**
   * Anime list with ratings and genres - currently watching
   */
  anime: [
    { 
      title: "Frieren: Beyond Journey's End", 
      rating: "10/10", 
      genres: ["Adventure", "Drama", "Fantasy"] 
    },
    { 
      title: "My Happy Marriage S2", 
      rating: "8.5/10", 
      genres: ["Drama", "Fantasy", "Romance"] 
    },
    { 
      title: "The Apothecary Diaries S2", 
      rating: "9.5/10", 
      genres: ["Drama", "Mystery", "Historical"] 
    }
  ],

  /**
   * Manga list with authors, ratings and genres
   */
  manga: [
    { 
      title: "Solo Leveling", 
      rating: "8.5/10", 
      author: [ "Chugong (Story)", "Jang, Sung-rak (Art)", "Disciples (Art)"], 
      genres: ["Action", "Fantasy", "Adventure"] 
    },
    { 
      title: "Gokusen", 
      rating: "9.7/10", 
      author: "Morimoto, Kozueko", 
      genres: ["Action", "Comedy", "Romance", "Slice of Life"] 
    },
    { 
      title: "Horimiya", 
      rating: "8/10", 
      author: " Hagiwara, Daisuke", 
      genres: ["Romance", "School", "Shounen"] 
    }
  ],

  /**
   * Games list with platforms and ratings
   */
  games: [
    { 
      title: "Genshin Impact",
      platform: "PC", 
      rating: "8/10" 
    },
    { 
      title: "Split Fiction", 
      platform: "PC", 
      rating: "8.5/10" 
    }
  ],

  /**
   * Welcome message that appears on terminal startup
   */
  welcomeMessage: "Well, hello there! I am Pranjall and I created this web app for fun. This is basically a chat-bot version of myself (portfolio and hobbies). It also lists my current list of anime, manga and games. Go ahead, try it out~!\n\n"
};

export default terminalData;