# 📝 Task Manager - Sistema de Gestión de Tareas

Sistema completo Full Stack desarrollado con **Vue.js 3**, **NestJS**, **Firebase** y **Docker**.

## 🚀 Tecnologías Utilizadas

### Frontend
- **Vue.js 3** (Composition API)
- **Pinia** (State Management)
- **Vite** (Build Tool)
- **Axios** (HTTP Client)

### Backend
- **NestJS** (Framework Node.js)
- **TypeScript**
- **Firebase Firestore** (Base de datos)
- **Firebase Admin SDK**

### DevOps
- **Docker** & **Docker Compose**
- **Nginx** (Reverse Proxy)
- **Firebase Hosting**

## 📋 Requisitos Previos

1. Node.js 18+ y npm
2. Docker y Docker Compose
3. Firebase CLI: `npm install -g firebase-tools`
4. Cuenta de Firebase

## 🔧 Configuración de Firebase

### 1. Crear Proyecto en Firebase

1. Ve a https://console.firebase.google.com/
2. Crea un nuevo proyecto
3. Habilita Firestore Database
4. Ve a Configuración del proyecto > Cuentas de servicio
5. Genera una nueva clave privada (archivo JSON)

### 2. Configurar Backend

Coloca el archivo JSON de credenciales en:
```
task-manager-backend/serviceAccountKey.json
```

O configura la variable de entorno:
```bash
export GOOGLE_APPLICATION_CREDENTIALS="path/to/serviceAccountKey.json"
```

### 3. Configurar Frontend para Firebase Hosting

```bash
cd task-manager-frontend
firebase login
firebase init hosting
# Selecciona tu proyecto
# Build directory: dist
# Single-page app: Yes
```

Edita `.firebaserc` con tu project-id:
```json
{
  "projects": {
    "default": "tu-proyecto-firebase-id"
  }
}
```

## 🏃‍♂️ Ejecutar el Proyecto

### Opción 1: Con Docker (Recomendado)

```bash
# Desde la raíz del proyecto
docker-compose up --build
```

Accede a:
- Frontend: http://localhost
- Backend API: http://localhost:3000

### Opción 2: Desarrollo Local

#### Backend:
```bash
cd task-manager-backend
npm install
npm run start:dev
```

#### Frontend:
```bash
cd task-manager-frontend
npm install
npm run dev
```

## 🌐 Desplegar en Firebase Hosting

### Backend (Cloud Functions - Opcional)

Para el backend, puedes usar Firebase Cloud Functions o desplegar en:
- Heroku
- AWS EC2
- DigitalOcean
- Vercel (para APIs)

### Frontend

```bash
cd task-manager-frontend
npm run build
firebase deploy --only hosting
```

Tu aplicación estará disponible en: `https://tu-proyecto.web.app`

## 📁 Estructura del Proyecto

```
task-manager/
├── backend/
│   ├── src/
│   │   ├── firebase/
│   │   │   ├── firebase.service.ts
│   │   │   └── firebase.module.ts
│   │   ├── tasks/
│   │   │   ├── tasks.controller.ts
│   │   │   ├── tasks.service.ts
│   │   │   ├── tasks.module.ts
│   │   │   └── task.interface.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.vue
│   │   │   ├── TaskList.vue
│   │   │   └── TaskItem.vue
│   │   ├── stores/
│   │   │   └── taskStore.js
│   │   ├── App.vue
│   │   └── main.js
│   ├── firebase.json
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
```

## 🔌 API Endpoints

### Tasks

- `GET /tasks` - Obtener todas las tareas
- `GET /tasks/:id` - Obtener una tarea específica
- `POST /tasks` - Crear nueva tarea
  ```json
  {
    "title": "Mi tarea",
    "description": "Descripción opcional"
  }
  ```
- `PUT /tasks/:id` - Actualizar tarea
  ```json
  {
    "title": "Nuevo título",
    "description": "Nueva descripción",
    "completed": true
  }
  ```
- `DELETE /tasks/:id` - Eliminar tarea

## 🎨 Características

- ✅ CRUD completo de tareas
- ✅ Interfaz moderna y responsive
- ✅ Estado global con Pinia
- ✅ Arquitectura modular con NestJS
- ✅ Base de datos en tiempo real con Firestore
- ✅ Containerización con Docker
- ✅ Despliegue en Firebase Hosting
- ✅ Transiciones y animaciones
- ✅ Marcado de tareas completadas
- ✅ Estadísticas en tiempo real

## 🧪 Testing

### Backend:
```bash
cd task-manager-backend
npm run test
```

### Frontend:
```bash
cd task-manager-frontend
npm run test
```

## 📝 Notas Importantes

1. **Firebase Credentials**: Nunca subas las credenciales de Firebase al repositorio. Usa `.gitignore`:
   ```
   serviceAccountKey.json
   .env
   ```

2. **CORS**: El backend está configurado para aceptar peticiones de cualquier origen. En producción, configura dominios específicos.

3. **Variables de Entorno**: 
   - Backend: `PORT`, `NODE_ENV`
   - Frontend: `VITE_API_URL`

4. **Firestore Rules**: Configura las reglas de seguridad en la consola de Firebase:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /tasks/{task} {
         allow read, write: if true; // En producción, agregar autenticación
       }
     }
   }
   ```

## 🚀 Mejoras Futuras

- [ ] Autenticación de usuarios con Firebase Auth
- [ ] Categorías y etiquetas para tareas
- [ ] Fechas de vencimiento y recordatorios
- [ ] Modo oscuro
- [ ] Compartir tareas entre usuarios
- [ ] Notificaciones push
- [ ] Búsqueda y filtros avanzados
- [ ] Tests unitarios y e2e

## 📄 Licencia

MIT

## 👨‍💻 Desarrollador

[Tu Nombre]
- Email: sandy.ochoa.27@unsch.edu.pe
- GitHub: [tu-usuario]

---

**¡Proyecto desarrollado para el examen de Desarrollador Full Stack!**
