# NYX Terminal

> A sleek, interactive terminal-style interface built with React and Tailwind CSS that simulates a command-line portfolio. NYX Terminal offers an engaging way to showcase personal information, projects, and interests through a developer-friendly interface.

---

## 📸 Show Image  
*(Insert screenshot or demo gif here)*

---

## ✨ Features

- 🖥️ Terminal-like user interface with command prompt  
- 🎨 Color-coded command syntax for easy readability  
- 💾 Multiple data categories (projects, skills, anime, manga, games)  
- 📝 Detailed command documentation and help system  
- ⌨️ Command history and scrollable output  
- 🧩 Modular component architecture  
- 🔄 Easily extensible for custom data and commands  

---

## 🚀 Live Demo  
Check out the live demo to try it yourself!  
[Live Demo](https://your-demo-link.com)

---

## 🧾 Commands

NYX Terminal uses a structured command syntax:

```
nyxr [subcommand] [item] [input]
```

### 📜 Available Commands

```bash
nyxr start                     # Show welcome message
nyxr help                      # Display available commands
nyxr show contact              # Display contact information
nyxr show anime                # List all anime with details
nyxr show manga                # List all manga with details
nyxr list skills               # List all technical skills
nyxr list hobbies              # List all hobbies
nyxr detail project Modelxyz   # Show details of specific project
nyxr detail anime "Death Note" # Show details of specific anime
nyxr check availability        # Check availability status
```

---

## 🛠️ Technologies Used

- **React** - UI components and state management  
- **Tailwind CSS** - Styling and layout  
- **ES6+** - Modern JavaScript features  
- **React Hooks** - State and side effects management  

---

## 📦 Getting Started

### ✅ Prerequisites

- Node.js and npm installed

### 📥 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nyx-terminal.git
cd nyx-terminal

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser to the localhost URL shown in your terminal (typically [http://localhost:5173](http://localhost:5173))

---

## 🗂 Project Structure

```
src/
├── components/       
│   ├── NyxTerminal.jsx         # Main terminal container
│   ├── TerminalHeader.jsx      # Terminal header component
│   ├── TerminalInput.jsx       # Command input component
│   ├── TerminalOutput.jsx      # Command output display
│   ├── InfoPanel.jsx           # Right side info panel
│   ├── WelcomeMessage.jsx      # Welcome message component
│   └── CommandGuide.jsx        # Command guide component
├── utils/            
│   ├── commandProcessor.js     # Command processing logic
│   └── terminalUtils.js        # Terminal utility functions
├── data/             
│   └── terminalData.js         # Terminal content and information
├── hooks/            
│   └── useTerminalHistory.js   # Terminal history management
├── styles/           
│   ├── index.css               # Main CSS file with Tailwind imports
│   ├── terminal.css            # Terminal container styles
│   ├── commandOutput.css       # Command styling
│   └── infoPanel.css           # Info panel styling
└── App.jsx                     # Application entry point
```

---

## 🛠 Customization

### ✏️ Adding Your Own Data

Edit `src/data/terminalData.js` to customize:

- Personal information and contact details
- Projects and their details
- Skills and hobbies
- Anime, manga, games, or other interests

### 🔧 Adding New Command Types

1. Add a new case to the switch statement in `src/utils/commandProcessor.js`:

```javascript
case 'newcommand':
  return handleNewCommand(item, input);
```

2. Create a handler function for your new command type  
3. Update the help text to include your new command

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch  
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch  
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

**Your Name** – [@yourtwitter](https://twitter.com/yourtwitter) – email@example.com  
**Project Link:** [https://github.com/yourusername/nyx-terminal](https://github.com/yourusername/nyx-terminal)

---

## 🙏 Acknowledgements

- [React](https://reactjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Vite](https://vitejs.dev/)  
- [Font Awesome](https://fontawesome.com/) for icons
