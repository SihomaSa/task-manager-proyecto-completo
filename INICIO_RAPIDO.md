# ⚡ GUÍA RÁPIDA - 1 HORA

## 🎯 Objetivo: Proyecto funcionando en 60 minutos

### ⏱️ Minuto 0-10: Configuración Inicial

1. **Descargar/Clonar el proyecto**
```bash
# Si tienes los archivos en /home/claude
cd /home/claude
```

2. **Dar permisos al script de setup**
```bash
chmod +x setup.sh
```

3. **Ejecutar setup**
```bash
./setup.sh
```

### ⏱️ Minuto 10-20: Configurar Firebase

1. **Instalar Firebase CLI** (si no lo tienes)
```bash
npm install -g firebase-tools
```

2. **Login en Firebase**
```bash
firebase login
```

3. **Crear proyecto en Firebase Console**
   - Ir a: https://console.firebase.google.com/
   - Click en "Agregar proyecto"
   - Nombre: task-manager-2024
   - Continuar (deshabilitar Analytics si quieres más rápido)
   - Crear proyecto

4. **Habilitar Firestore**
   - En el menú lateral: "Firestore Database"
   - "Crear base de datos"
   - Modo de producción → Siguiente
   - Ubicación: nam5 (United States) → Habilitar

5. **Configurar reglas temporales**
   - En Firestore → Reglas
   - Reemplazar con:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
   - Publicar

6. **Obtener credenciales**
   - Ir a ⚙️ (Configuración del proyecto)
   - Pestaña "Cuentas de servicio"
   - "Generar nueva clave privada"
   - Descargar el archivo JSON
   - Renombrar a `serviceAccountKey.json`
   - Mover a `task-manager-backend/serviceAccountKey.json`

### ⏱️ Minuto 20-30: Probar Localmente

**Opción 1: Con Docker (más rápido)**
```bash
# Desde la raíz del proyecto
docker-compose up --build
```

**Opción 2: Sin Docker (requiere 2 terminales)**

Terminal 1 - Backend:
```bash
cd task-manager-backend
npm run start:dev
```

Terminal 2 - Frontend:
```bash
cd task-manager-frontend
npm run dev
```

### ⏱️ Minuto 30-35: Verificar que Funciona

1. Abrir navegador en: http://localhost:5173 (o http://localhost si usas Docker)
2. Crear una tarea de prueba
3. Marcarla como completada
4. Eliminarla
5. Si todo funciona → ¡Perfecto! Continuar con despliegue

### ⏱️ Minuto 35-50: Desplegar en Firebase

1. **Configurar proyecto Firebase**
```bash
cd task-manager-frontend
firebase init hosting
```
   - ¿Proyecto existente? → Sí
   - Seleccionar: task-manager-2024 (tu proyecto)
   - ¿Qué directorio público? → **dist**
   - ¿Single-page app? → **y** (yes)
   - ¿Configurar builds automáticos? → **N** (no, por ahora)
   - ¿Sobrescribir index.html? → **N** (no)

2. **Editar .firebaserc**
```bash
# Verificar que tenga tu project-id correcto
cat .firebaserc
```

Debe verse así:
```json
{
  "projects": {
    "default": "task-manager-2024"
  }
}
```

3. **Compilar frontend**
```bash
npm run build
```

4. **Desplegar**
```bash
firebase deploy --only hosting
```

5. **Anotar la URL**
   - Firebase te dará una URL como: https://task-manager-2024.web.app
   - ¡Copia esta URL!

### ⏱️ Minuto 50-60: Desplegar Backend

**Opción A: Heroku (Recomendado para demo rápida)**

1. **Instalar Heroku CLI** (si no lo tienes)
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Ubuntu/Linux
curl https://cli-assets.heroku.com/install.sh | sh

# Windows
# Descargar de: https://devcenter.heroku.com/articles/heroku-cli
```

2. **Login en Heroku**
```bash
heroku login
```

3. **Crear app**
```bash
cd task-manager-backend
heroku create task-manager-api-2024
```

4. **Subir credenciales de Firebase**
```bash
# Opción 1: Variable de entorno
heroku config:set GOOGLE_APPLICATION_CREDENTIALS_JSON="$(cat serviceAccountKey.json | tr -d '\n')"

# Opción 2: Usar buildpack
heroku buildpacks:add https://github.com/buyersight/heroku-google-application-credentials-buildpack
heroku config:set GOOGLE_CREDENTIALS="$(cat serviceAccountKey.json)"
```

5. **Configurar inicio**

Crear `Procfile` en task-manager-backend:
```bash
echo "web: npm run start:prod" > Procfile
```

6. **Desplegar**
```bash
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

7. **Anotar URL del backend**
   - Heroku te dará una URL como: https://task-manager-api-2024.herokuapp.com

**Opción B: Railway (Alternativa más rápida)**

1. Ir a https://railway.app
2. Sign up con GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Seleccionar task-manager-backend
5. En Variables:
   - Agregar GOOGLE_APPLICATION_CREDENTIALS como JSON completo
6. Railway desplegará automáticamente
7. Copiar la URL generada

### ⏱️ Últimos pasos: Conectar Frontend con Backend

1. **Actualizar URL del API en Frontend**
```bash
cd task-manager-frontend
```

Crear archivo `.env.production`:
```bash
VITE_API_URL=https://tu-backend-url.herokuapp.com
```

2. **Rebuild y redeploy**
```bash
npm run build
firebase deploy --only hosting
```

### 🎉 ¡LISTO!

Tu aplicación está desplegada en:
- **Frontend**: https://task-manager-2024.web.app
- **Backend**: https://task-manager-api-2024.herokuapp.com

## ✅ Checklist Final

- [ ] Proyecto clonado/descargado
- [ ] Dependencias instaladas (npm install en ambos folders)
- [ ] Firebase configurado (proyecto creado, Firestore habilitado)
- [ ] Credenciales descargadas (serviceAccountKey.json)
- [ ] Probado localmente (http://localhost:5173 funciona)
- [ ] Frontend desplegado en Firebase Hosting
- [ ] Backend desplegado en Heroku/Railway
- [ ] Frontend actualizado con URL del backend
- [ ] URL final funcionando completamente

## 🆘 Solución Rápida de Problemas

**Error: Firebase login no funciona**
```bash
firebase login --reauth
```

**Error: npm install falla**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Error: Backend no se conecta a Firestore**
- Verificar que serviceAccountKey.json existe
- Verificar que las reglas de Firestore permiten lectura/escritura
- Ver logs: `heroku logs --tail` (en Heroku)

**Error: CORS en producción**
- En backend/src/main.ts, actualizar origin con tu URL de Firebase:
```typescript
app.enableCors({
  origin: 'https://tu-proyecto.web.app',
  credentials: true,
});
```

**Frontend no carga datos**
- Verificar que VITE_API_URL está correcta
- Abrir DevTools → Network → Ver si las peticiones llegan al backend
- Verificar CORS

## 🚀 Comandos de Actualización Rápida

**Actualizar Frontend:**
```bash
cd task-manager-frontend
npm run build
firebase deploy --only hosting
```

**Actualizar Backend (Heroku):**
```bash
cd task-manager-backend
git add .
git commit -m "Update"
git push heroku main
```

**Ver logs del Backend:**
```bash
heroku logs --tail
```

## 📝 URLs para el Examen

Anota estas URLs para incluir en tu examen:

- **Frontend Demo**: https://_________________.web.app
- **Backend API**: https://_________________.herokuapp.com
- **Repositorio Git**: https://github.com/_________________
- **Firebase Console**: https://console.firebase.google.com/project/_________________

---

**Tiempo total: ~45-60 minutos** ✅

¡Éxito en tu examen! 🎯
