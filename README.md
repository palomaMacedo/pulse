<div align="center">
  
# ⚡ Pulse
 
**An AI-powered experiment — audio transcription, embeddings and semantic search.**

 
</div>
 
## 🧪 About 
 
Pulse was built as a study and test of AI integrations, exploring how to combine audio transcription, embeddings generation, and semantic search in a fullstack application.
 

---
 
## ✨ Features 
 
- 🎙️ Audio transcription with Gemini AI 
- 🧠 Embeddings generation and storage 
- 🏠 Rooms with questions system 
- 🗄️ Database with Drizzle ORM
- 🐳 Docker setup 
---
 
## 🏗️ Structure 
 
```
pulse/
├── server/         # Backend — API, embeddings, Gemini AI
│   ├── src/
│   ├── docker/
│   └── drizzle.config.ts
└── web/            # Frontend — submodule / submódulo
```
 
---
 
## 🛠️ Stack
 
**Backend:** TypeScript · Drizzle ORM · Docker · Gemini AI
 
**Frontend:** TypeScript · React *(submodule)*
 
---
 
## 🚀 Getting Started 
 
```bash
# Clone with submodules 
git clone --recurse-submodules https://github.com/palomaMacedo/pulse.git
 
# Backend
cd server
npm install
docker-compose up -d
npm run dev
 
# Frontend
cd web
npm install
npm run dev
```
 
---
 
 
<div align="center">
 💜 Built by Paloma Macedo
 
</div>
 
