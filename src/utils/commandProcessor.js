/**
 * Command Processor for NYX Terminal
 * 
 * Handles the processing of user commands and returns appropriate responses
 * based on the command structure: command subcommand item input
 */

import terminalData from '../data/terminalData';

/**
 * Process a terminal command and return the appropriate response
 * @param {string} cmd - The full command string from the user
 * @returns {string} The response to be displayed in the terminal
 */
const processCommand = (cmd) => {
  // Split the command into its components
  const parts = cmd.trim().split(' ');
  const command = parts[0];
  const subcommand = parts[1];
  const item = parts[2]; // This will be the category (project, anime, etc.)
  const input = parts.slice(3).join(' '); // This will be the specific name (Modelxyz, Death Note, etc.)
  
  // Only process 'nyxr' commands
  if (command === 'nyxr') {
    switch (subcommand) {
      case 'start':
        return terminalData.welcomeMessage;
        
      case 'show':
        return handleShowCommand(item);
        
      case 'list':
        return handleListCommand(item);
        
      case 'detail':
        return handleDetailCommand(item, input);
        
      case 'check':
        return handleCheckCommand(item);
        
      case 'help':
        return getHelpText();
        
      default:
        return `Unknown subcommand: ${subcommand}. Type 'nyxr help' for available commands.`;
    }
  }
  
  return `Unknown command: ${command}. Type 'nyxr help' for available commands.`;
};

/**
 * Handle 'show' subcommand to display full information
 * @param {string} item - The category to show
 * @returns {string} Formatted response
 */
const handleShowCommand = (item) => {
  if (item === 'contact') {
    return `Email: ${terminalData.contact.email}\nGitHub: ${terminalData.contact.github}\nLinkedIn: ${terminalData.contact.linkedin}\nMedium: ${terminalData.contact.medium}\nYouTube: ${terminalData.contact.youtube}`;
  } else if (item === 'anime') {
    return terminalData.anime.map(a => 
      `-> ${a.title}\n Rating: ${a.rating}\n Genres: ${a.genres.join(', ')}`
    ).join('\n');
  } else if (item === 'manga') {
    return terminalData.manga.map(m => 
      `-> ${m.title} By ${m.author}\n Rating: ${m.rating}\n Genres: ${m.genres.join(', ')}`
    ).join('\n');
  } else if (item === 'games') {
    return terminalData.games.map(g => 
      `-> ${g.title}\n Platform: ${g.platform}\n Rating: ${g.rating}`
    ).join('\n');
  } else if (item === 'projects') {
    return Object.entries(terminalData.projects).map(([name, details]) => 
      `-> ${name} - ${details.description}\n Technologies: ${details.technologies.join(', ')}\n Status: ${details.status}\n Link: ${details.link}`
    ).join('\n');
  } else if (item === 'education') {
  const educationEntries = Object.entries(terminalData.education);
  return educationEntries.map(([level, details]) => 
    `-> ${details.degree} in ${details.field} from ${details.institution} (${details.year})`
  ).join('\n');
}
  
  return "Please specify what to show (e.g., 'nyxr show contact', 'nyxr show anime')";
};

/**
 * Handle 'list' subcommand to display simple lists
 * @param {string} item - The category to list
 * @returns {string} Formatted response
 */
const handleListCommand = (item) => {
  if (item === 'hobbies') {
    return terminalData.hobbies.join(', ');
  } else if (item === 'anime') {
    return terminalData.anime.map(a => a.title).join(', ');
  } else if (item === 'manga') {
    return terminalData.manga.map(m => m.title).join(', ');
  } else if (item === 'games') {
    return terminalData.games.map(g => g.title).join(', ');
  } else if (item === 'projects') {
    return Object.keys(terminalData.projects).join('\n');
  } else if (item === 'skills') {
    return Object.entries(terminalData.skills).map(([category, skills]) => 
      `${category.charAt(0).toUpperCase() + category.slice(1)}: ${skills.join(', ')}`
    ).join('\n');
  }
  
  return "Please specify what to list (e.g., 'nyxr list skills', 'nyxr list anime')";
};

/**
 * Handle 'detail' subcommand to show detailed information about a specific item
 * @param {string} item - The category (project, anime, manga, game)
 * @param {string} input - The specific item name
 * @returns {string} Formatted response
 */
const handleDetailCommand = (item, input) => {
  if (item === 'project' && input) {
    const project = terminalData.projects[input];
    if (project) {
      return `Project: ${input}\nDescription: ${project.description}\nTechnologies: ${project.technologies.join(', ')}\nStatus: ${project.status}\n Link: ${details.link}`;
    }
    return `Project "${input}" not found. Available projects: ${Object.keys(terminalData.projects).join(', ')}`;
  } else if (item === 'anime' && input) {
    const animeMatch = terminalData.anime.find(a => a.title.toLowerCase() === input.toLowerCase());
    if (animeMatch) {
      return `Anime: ${animeMatch.title}\nRating: ${animeMatch.rating}\nGenres: ${animeMatch.genres.join(', ')}`;
    }
    return `Anime "${input}" not found. Try 'nyxr list anime' to see available titles.`;
  } else if (item === 'manga' && input) {
    const mangaMatch = terminalData.manga.find(m => m.title.toLowerCase() === input.toLowerCase());
    if (mangaMatch) {
      return `Manga: ${mangaMatch.title}\nAuthor: ${mangaMatch.author}\nRating: ${mangaMatch.rating}\nGenres: ${mangaMatch.genres.join(', ')}`;
    }
    return `Manga "${input}" not found. Try 'nyxr list manga' to see available titles.`;
  } else if (item === 'game' && input) {
    const gameMatch = terminalData.games.find(g => g.title.toLowerCase() === input.toLowerCase());
    if (gameMatch) {
      return `Game: ${gameMatch.title}\nPlatform: ${gameMatch.platform}\nRating: ${gameMatch.rating}`;
    }
    return `Game "${input}" not found. Try 'nyxr list games' to see available titles.`;
  }
  
  return "Please specify what to detail (e.g., 'nyxr detail project Modelxyz', 'nyxr detail anime Death Note')";
};

/**
 * Handle 'check' subcommand
 * @param {string} item - The item to check
 * @returns {string} Formatted response
 */
const handleCheckCommand = (item) => {
  if (item === 'availability') {
    return terminalData.availability;
  }
  
  return "Please specify what to check (e.g., 'nyxr check availability')";
};

/**
 * Get the help text showing all available commands
 * @returns {string} Formatted help text
 */
const getHelpText = () => {
  return `Available commands:
- nyxr start: Welcome message
\n
- nyxr show contact: Show contact information
- nyxr show anime: Show anime list with details
- nyxr show manga: Show manga list with details
- nyxr show games: Show games list with details
- nyxr show projects: Show projects list with details
- nyxr show education: Show education details
\n
- nyxr list skills: List technical skills
- nyxr list hobbies: List hobbies
- nyxr list anime: List anime titles only
- nyxr list manga: List manga titles only
- nyxr list games: List game titles only
- nyxr list projects: List project names only
\n
- nyxr detail project [name]: Show project details
- nyxr detail anime [title]: Show anime details
- nyxr detail manga [title]: Show manga details
- nyxr detail game [title]: Show game details
\n
- nyxr check availability: Check availability
\n
- nyxr help: Show this help message`;
};

export default processCommand;