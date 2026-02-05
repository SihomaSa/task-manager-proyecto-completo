#!/bin/bash

echo "🚀 Configurando Task Manager..."
echo ""

# Backend
echo "📦 Instalando dependencias del backend..."
cd task-manager-backend
npm install
cd ..

# Frontend
echo "📦 Instalando dependencias del frontend..."
cd task-manager-frontend
npm install
cd ..

echo ""
echo "✅ ¡Instalación completada!"
echo ""
echo "Para ejecutar el proyecto:"
echo "  Opción 1 (Docker):    docker-compose up"
echo "  Opción 2 (Local):"
echo "    Terminal 1:         cd task-manager-backend && npm run start:dev"
echo "    Terminal 2:         cd task-manager-frontend && npm run dev"
echo ""
echo "🌐 URLs:"
echo "  Frontend: http://localhost:5173 (desarrollo) o http://localhost (Docker)"
echo "  Backend:  http://localhost:3000"
echo ""
