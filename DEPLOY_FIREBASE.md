# 🔥 Guía Rápida de Despliegue en Firebase Hosting

## Paso 1: Instalación de Firebase CLI

```bash
npm install -g firebase-tools
```

## Paso 2: Login en Firebase

```bash
firebase login
```

## Paso 3: Configurar Proyecto Firebase

### En la Consola de Firebase (https://console.firebase.google.com):

1. **Crear nuevo proyecto**
   - Nombre: task-manager (o el que prefieras)
   - Habilitar Google Analytics (opcional)

2. **Configurar Firestore**
   - Ir a "Firestore Database"
   - Crear base de datos
   - Modo: Producción
   - Ubicación: us-central (o la más cercana)

3. **Reglas de Firestore** (temporal para desarrollo):
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

4. **Obtener credenciales para Backend**
   - Ir a "Configuración del proyecto" (⚙️)
   - Pestaña "Cuentas de servicio"
   - Click en "Generar nueva clave privada"
   - Guardar el archivo JSON como `serviceAccountKey.json`
   - Copiar a: `task-manager-backend/serviceAccountKey.json`

## Paso 4: Inicializar Firebase en el Proyecto

```bash
cd task-manager-frontend
firebase init hosting
```

Seleccionar:
- ¿Qué directorio público? → **dist**
- ¿Single-page app? → **Yes**
- ¿Sobrescribir index.html? → **No**

## Paso 5: Configurar .firebaserc

Editar `task-manager-frontend/.firebaserc`:

```json
{
  "projects": {
    "default": "tu-proyecto-id-aqui"
  }
}
```

Reemplaza `tu-proyecto-id-aqui` con el ID de tu proyecto Firebase.

## Paso 6: Build y Deploy

```bash
cd task-manager-frontend

# Compilar para producción
npm run build

# Desplegar
firebase deploy --only hosting
```

## Paso 7: Configurar Backend (Opciones)

### Opción A: Firebase Cloud Functions (Recomendado)

```bash
cd task-manager-backend
firebase init functions

# Seleccionar TypeScript
# Seguir las instrucciones
```

Modificar `functions/src/index.ts`:
```typescript
import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableCors();
  return app.init();
};

createNestServer(server);

export const api = functions.https.onRequest(server);
```

Desplegar:
```bash
firebase deploy --only functions
```

### Opción B: Heroku

```bash
cd task-manager-backend

# Instalar Heroku CLI
# Crear app en Heroku
heroku create task-manager-api

# Configurar variables de entorno
heroku config:set NODE_ENV=production

# Subir credenciales de Firebase
heroku config:set FIREBASE_CREDENTIALS="$(cat serviceAccountKey.json)"

# Desplegar
git push heroku main
```

### Opción C: Railway

1. Ir a https://railway.app
2. Crear nuevo proyecto desde GitHub
3. Seleccionar el repositorio
4. Railway detectará automáticamente NestJS
5. Configurar variables de entorno en el dashboard

## Paso 8: Actualizar URL del API en Frontend

Editar `task-manager-frontend/.env.production`:

```env
VITE_API_URL=https://tu-api-url.com
```

O si usas Cloud Functions:
```env
VITE_API_URL=https://us-central1-tu-proyecto-id.cloudfunctions.net/api
```

## Paso 9: Rebuild y Redeploy Frontend

```bash
cd task-manager-frontend
npm run build
firebase deploy --only hosting
```

## 🎉 ¡Listo!

Tu aplicación estará disponible en:
- **Frontend**: https://tu-proyecto-id.web.app
- **Backend**: Según donde lo hayas desplegado

## 🔒 Seguridad - Configurar en Producción

### 1. Reglas de Firestore más seguras:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tasks/{task} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 2. CORS en Backend (main.ts):

```typescript
app.enableCors({
  origin: 'https://tu-proyecto-id.web.app',
  credentials: true,
});
```

### 3. Variables de Entorno:

Nunca subir a Git:
- serviceAccountKey.json
- .env con credenciales

## 📊 Monitoreo

- Firebase Console → Analytics
- Firebase Console → Performance
- Cloud Functions → Logs

## 🔄 Actualizar Aplicación

```bash
# Frontend
cd task-manager-frontend
npm run build
firebase deploy --only hosting

# Backend (Cloud Functions)
cd task-manager-backend
firebase deploy --only functions
```

## 💡 Tips

1. **Caché**: Firebase Hosting cachea automáticamente los assets
2. **CDN**: Firebase usa CDN global automáticamente
3. **SSL**: Certificado SSL incluido gratuitamente
4. **Custom Domain**: Puedes agregar tu dominio en Firebase Console
5. **Rollback**: Puedes volver a versiones anteriores desde la consola

## 🆘 Troubleshooting

**Error: Permission Denied**
```bash
firebase login --reauth
```

**Error: Project not found**
- Verifica el ID en `.firebaserc`

**Error: Build fails**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

¡Éxito con tu despliegue! 🚀
