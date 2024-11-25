# AI Chat Website

Welcome to the **AI Chat Website** repository! This project is a lightweight, conversational AI web application that utilizes the Ollama API to provide engaging and intuitive chatbot functionality.

## 🚀 Features
- **Interactive Chat Interface**: Communicate with an AI model through a user-friendly chat interface.
- **AI-Powered Conversations**: Leverages the Ollama API to process and generate responses.
- **Real-Time Responses**: Quick and seamless interactions for an enjoyable user experience.
- **Modular Codebase**: Clean and scalable structure for easy customization and updates.

## 📋 Prerequisites
Before running the project, ensure you have the following installed:
- **Node.js** (v22 or higher)
- **npm** or **yarn**
- Ollama CLI (for pulling the AI model)

## 📂 Folder Structure
```
📦 root
├── 📁 public              # Static assets for the front-end
├── 📁 src                 # Source code for the web app
│   ├── 📄 index.js        # Main server file
│   ├── 📄 Message.tsx     # Chat message component
│   └── 📄 App.js          # Main application logic
├── 📄 package.json        # Project dependencies and scripts
└── 📄 README.md           # Project documentation
```

## 🛠️ Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/ai-chat-website.git
   cd ai-chat-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Pull the required AI model:
   ```bash
   npx ollama pull llama3.2
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## ⚙️ Configuration
- Ensure the **Ollama API** is correctly configured in your environment.
- Set up environment variables (if applicable) in a `.env` file:
  ```
  API_KEY=your_api_key
  MODEL_NAME=llama3.2
  ```

## 🌐 Deployment
### Local Deployment
Run the server locally:
```bash
node index.js
```

### Cloud Deployment
1. Use a platform like Render or Vercel.
2. Ensure `npm install` and `npx ollama pull llama3.2` are executed during the build phase.
3. Set up your deployment commands to start the app (`npm start`).

## 🤝 Contributing
1. Fork this repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## 🐛 Known Issues
- `ollama pull` may fail during deployment due to missing dependencies or path errors. Ensure the Ollama CLI is installed globally or adjust the `postinstall` script.

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 😊 If you encounter any issues, feel free to open an [issue](https://github.com/YourUsername/ai-chat-website/issues).
