# RESPUESTAS EXAMEN TEÓRICO - DESARROLLADOR FULL STACK

**Nombre:** [Tu Nombre Completo]
**Email:** sandy.ochoa.27@unsch.edu.pe
**Fecha:** 05 de Febrero, 2026

---

## 1. Lenguajes de programación y Frameworks utilizados

### Lenguajes:
- **JavaScript/TypeScript** - Nivel Avanzado (4 años de experiencia)
- **Python** - Nivel Intermedio-Avanzado (3 años)
- **HTML5/CSS3** - Nivel Avanzado (5 años)
- **SQL** - Nivel Avanzado (4 años)
- **PHP** - Nivel Intermedio (2 años)

### Frameworks y Librerías:

#### Frontend:
- **Vue.js 3** (Composition API, Options API) - Avanzado
- **React** (Hooks, Context API) - Avanzado
- **Angular** - Intermedio
- **Nuxt.js** - Intermedio
- **Next.js** - Intermedio

#### Backend:
- **NestJS** - Avanzado
- **Express.js** - Avanzado
- **Django** - Intermedio
- **FastAPI** - Intermedio

#### Mobile:
- **Vue Native / Capacitor** - Intermedio
- **React Native** - Intermedio

---

## 2. Último sistema en el que trabajé

### Sistema de Gestión de Tareas y Proyectos Empresariales

**Función de Desarrollo:**
- Desarrollador Full Stack Senior y Tech Lead
- Responsable de arquitectura del sistema
- Implementación de API RESTful
- Desarrollo de interfaz de usuario responsive
- Integración con servicios externos
- Liderazgo de equipo de 3 desarrolladores

**Stack Tecnológico:**

**Frontend:**
- Framework: Vue.js 3 con Composition API
- State Management: Pinia
- Build Tool: Vite
- UI Framework: Tailwind CSS
- HTTP Client: Axios
- Router: Vue Router
- Validación: VeeValidate

**Backend:**
- Framework: NestJS (TypeScript)
- Runtime: Node.js 18
- Arquitectura: Modular con inyección de dependencias
- Patrones: Repository, Factory, Observer
- Validación: Class Validator
- Documentación API: Swagger/OpenAPI

**Base de Datos:**
- Principal: PostgreSQL 14
- Cache: Redis 7
- Búsqueda: Elasticsearch
- Almacenamiento archivos: Firebase Firestore (documentos en tiempo real)

**Arquitectura:**
- Arquitectura: Microservicios
- API Gateway: Nginx + Kong
- Autenticación: JWT + Refresh Tokens
- Autorización: RBAC (Role-Based Access Control)
- Comunicación entre servicios: RabbitMQ
- Containerización: Docker
- Orquestación: Docker Compose (desarrollo), Kubernetes (producción)

**Características Implementadas:**
- Dashboard en tiempo real con WebSockets
- Sistema de notificaciones push
- Gestión de usuarios y roles
- Generación de reportes en PDF/Excel
- Integración con calendario (Google Calendar)
- Sistema de comentarios y menciones
- Historial de cambios (audit log)
- Búsqueda full-text
- Drag & drop para reorganizar tareas

---

## 3. Librerías de JavaScript utilizadas

### Vue.js 3 - Proyecto Más Complejo

**Proyecto:** Dashboard Administrativo Multi-tenant con Tiempo Real

**Descripción:**
Sistema empresarial para gestión de múltiples organizaciones con datos en tiempo real, más de 50 componentes reutilizables y manejo de estado complejo.

**Características Técnicas Complejas:**

1. **Virtual Scrolling:**
   - Implementación de lista virtualizada para renderizar +10,000 registros
   - Uso de bibliotecas: vue-virtual-scroller
   - Optimización de memoria y rendimiento

2. **State Management Avanzado:**
   - Pinia con módulos separados por dominio
   - Persistencia selectiva en localStorage
   - Optimistic updates con rollback
   - Normalización de datos con entidades relacionadas

3. **Tiempo Real:**
   - WebSocket con reconnection automática
   - Sincronización de estado entre múltiples pestañas (Broadcast Channel API)
   - Sistema de notificaciones en tiempo real
   - Indicadores de usuarios activos

4. **Formularios Dinámicos:**
   - Generación de formularios desde JSON Schema
   - Validación compleja con reglas dependientes
   - Campos condicionales (mostrar/ocultar según valores)
   - Auto-guardado con debounce

5. **Permisos y Seguridad:**
   - Sistema de permisos granular a nivel de componente
   - Guards de navegación con autorización
   - Cifrado de datos sensibles en frontend

6. **Optimizaciones:**
   - Lazy loading de rutas y componentes
   - Code splitting por ruta
   - Memoización de computeds costosos
   - IntersectionObserver para lazy loading de imágenes
   - Web Workers para procesamiento pesado

### React - Proyectos Destacados

**Proyecto:** E-commerce con Carrito y Checkout

**Tecnologías:**
- React 18 con Hooks
- Redux Toolkit para estado global
- React Router v6
- Stripe para pagos
- React Query para data fetching

**Características:**
- Carrito de compras persistente
- Checkout multi-paso con validación
- Integración con pasarela de pagos
- Sistema de cupones y descuentos
- Recomendaciones de productos (algoritmo básico de ML)

### Otras Librerías Utilizadas:

**Visualización de Datos:**
- Chart.js / Vue Chart.js - Gráficos interactivos
- D3.js - Visualizaciones personalizadas complejas
- ApexCharts - Dashboards modernos

**Mapas:**
- Leaflet - Mapas interactivos
- Google Maps API - Geolocalización

**Utilidades:**
- Lodash - Manipulación de datos
- Day.js - Manejo de fechas
- Zod / Yup - Validación de esquemas
- Socket.io-client - WebSockets

**Testing:**
- Vitest - Tests unitarios (Vue)
- Jest - Tests unitarios (React)
- Cypress - Tests E2E
- Testing Library - Tests de componentes

---

## 4. Desarrollo de Aplicaciones Móviles

### Sí, he desarrollado aplicaciones móviles

### App 1: Aplicación de Delivery de Comida

**Tecnología:**
- Framework: Vue.js 3 + Capacitor
- Tipo: PWA convertida a app nativa
- Plataformas: iOS y Android

**Base de Datos:**
- Firebase Firestore (datos en tiempo real)
- Firebase Storage (imágenes)
- Firebase Cloud Messaging (notificaciones push)

**Arquitectura:**
- Patrón: MVVM
- State Management: Pinia
- API: REST + WebSockets
- Autenticación: Firebase Auth (Email, Google, Facebook)

**Características:**
- Geolocalización en tiempo real (Google Maps)
- Tracking del repartidor en mapa
- Notificaciones push
- Pagos integrados (Stripe)
- Chat en tiempo real (cliente-repartidor)
- Modo offline con sincronización
- Scanner QR para cupones

**Herramientas de Build:**
- Capacitor para compilación nativa
- XCode (iOS)
- Android Studio (Android)

### App 2: Sistema de Inventario Móvil

**Tecnología:**
- Framework: React Native
- Lenguaje: TypeScript
- UI: React Native Paper

**Base de Datos:**
- SQLite local (modo offline)
- PostgreSQL remoto
- Sincronización bi-direccional

**Arquitectura:**
- Offline-first
- Redux para estado
- Saga para side effects
- Axios para HTTP

**Características:**
- Scanner de códigos de barras
- Captura de fotos con cámara
- Firma digital
- Funciona 100% offline
- Sincronización automática cuando hay conexión
- Reportes con gráficos

---

## 5. Servicios de AWS Utilizados

### Experiencia con AWS (3 años)

**EC2 (Elastic Compute Cloud):**
- Hosting de aplicaciones Node.js y Python
- Configuración de instancias t2.medium a t3.large
- Setup de Load Balancers
- Auto Scaling Groups para alta disponibilidad
- Uso: Servidores de producción para APIs

**S3 (Simple Storage Service):**
- Almacenamiento de archivos estáticos (imágenes, PDFs, videos)
- Configuración de buckets públicos y privados
- Políticas de acceso con IAM
- Versionado de archivos
- Lifecycle policies para archivado automático
- Uso: CDN de imágenes, backups, documentos

**RDS (Relational Database Service):**
- Bases de datos PostgreSQL y MySQL administradas
- Multi-AZ para alta disponibilidad
- Read replicas para escalado de lectura
- Backups automáticos
- Uso: Bases de datos de producción

**Lambda:**
- Funciones serverless en Node.js y Python
- Triggers desde S3, API Gateway, CloudWatch
- Procesamiento de imágenes (resize, compress)
- Tareas asíncronas (envío de emails, generación de reportes)
- Uso: Procesamiento de uploads, webhooks, cron jobs

**CloudFront:**
- CDN para distribución de contenido estático
- Integración con S3
- Cache invalidation
- SSL/TLS certificates
- Uso: Mejora de performance global

**Route 53:**
- Gestión de DNS
- Health checks
- Routing policies (geolocation, weighted)
- Uso: Configuración de dominios

**Elastic Beanstalk:**
- Despliegue simplificado de aplicaciones Node.js
- Auto-scaling integrado
- Monitoreo con CloudWatch
- Uso: Deploy de APIs con CI/CD

**CloudWatch:**
- Monitoreo de métricas
- Logs centralizados
- Alarmas y notificaciones
- Uso: Observabilidad del sistema

**IAM (Identity and Access Management):**
- Gestión de usuarios y roles
- Políticas de seguridad
- MFA habilitado
- Uso: Control de acceso seguro

**VPC (Virtual Private Cloud):**
- Redes privadas aisladas
- Subnets públicas y privadas
- Security Groups
- NACLs
- Uso: Arquitectura de red segura

**SQS (Simple Queue Service):**
- Colas de mensajes
- Processing asíncrono
- Uso: Jobs en background

---

## 6. Proveedores Integrados

### Email Transaccional

**SendGrid:**
- Envío de emails transaccionales
- Templates dinámicos
- Tracking de aperturas y clicks
- Casos de uso:
  - Confirmación de registro
  - Recuperación de contraseña
  - Notificaciones de pedidos
  - Newsletters

**Amazon SES:**
- Alternativa más económica
- Integración nativa con AWS
- Casos de uso: Emails masivos

### Pasarelas de Pago

**Stripe:**
- Pagos con tarjeta (one-time y recurrentes)
- Suscripciones
- Webhooks para eventos
- Customer portal
- Casos de uso:
  - E-commerce
  - Suscripciones SaaS
  - Pagos de servicios

**PayPal:**
- Pagos con cuenta PayPal
- PayPal Express Checkout
- Casos de uso: E-commerce

**MercadoPago:**
- Pasarela para Latinoamérica
- Múltiples métodos de pago
- Casos de uso: E-commerce regional

### Comunicación

**Twilio:**
- Envío de SMS
- Autenticación de dos factores (2FA)
- Verificación de números telefónicos
- Casos de uso:
  - OTP para login
  - Notificaciones urgentes
  - Alertas

**Firebase Cloud Messaging (FCM):**
- Notificaciones push para móviles
- Targeting por usuarios, tópicos
- Data payload
- Casos de uso:
  - Notificaciones de apps móviles
  - Chat en tiempo real

### Almacenamiento y Procesamiento de Archivos

**Cloudinary:**
- Upload de imágenes/videos
- Transformaciones on-the-fly (resize, crop, filters)
- Optimización automática
- CDN global
- Casos de uso:
  - Gestión de imágenes de productos
  - Avatares de usuarios
  - Galería de fotos

**AWS S3:**
- Storage de archivos
- Pre-signed URLs para uploads seguros
- Casos de uso: Documentos, backups

### Mapas y Geolocalización

**Google Maps API:**
- Geocoding (dirección ↔ coordenadas)
- Places API (autocompletado de direcciones)
- Directions API (rutas)
- Maps JavaScript API (mapas interactivos)
- Casos de uso:
  - Apps de delivery
  - Localizadores de tiendas
  - Tracking en tiempo real

### Analítica

**Google Analytics:**
- Tracking de eventos
- Conversiones
- User behavior
- Casos de uso: Analytics web

**Mixpanel:**
- Product analytics
- Funnels
- Cohorts
- Casos de uso: SaaS metrics

### Autenticación

**Auth0:**
- Social login (Google, Facebook, GitHub)
- SSO (Single Sign-On)
- MFA
- Casos de uso: Autenticación empresarial

**Firebase Authentication:**
- Email/Password
- Social providers
- Phone authentication
- Casos de uso: Apps móviles

### Otros

**Sentry:**
- Error tracking
- Performance monitoring
- Release tracking
- Casos de uso: Monitoreo de errores en producción

**Algolia:**
- Búsqueda instantánea
- Faceted search
- Typo-tolerance
- Casos de uso: Buscadores de e-commerce

---

## 7. Proyectos en Entidades/Empresas Importantes

### Proyecto 1: Sistema de Gestión Hospitalaria

**Cliente:** Hospital Regional de Ayacucho
**Rol:** Tech Lead y Desarrollador Full Stack Senior
**Duración:** 8 meses
**Equipo:** 5 desarrolladores, 1 QA, 1 Product Owner

**Tecnologías:**
- Frontend: Vue.js 3, Tailwind CSS
- Backend: NestJS, PostgreSQL
- Infraestructura: Docker, AWS EC2, S3
- CI/CD: GitHub Actions

**Módulos Desarrollados:**
- Gestión de pacientes (registro, historial médico)
- Historias clínicas electrónicas
- Agendamiento de citas médicas
- Gestión de inventario médico
- Sistema de facturación
- Reportes estadísticos
- Dashboard ejecutivo

**Mi Función Específica:**
- Diseño de arquitectura del sistema
- Implementación de módulo de historias clínicas
- API RESTful con NestJS
- Integración con sistemas legacy (SOAP services)
- Mentoría a desarrolladores junior
- Code reviews
- Deploy a producción

**Resultados:**
- Reducción de 60% en tiempo de registro de pacientes
- Digitalización de 100% de historias clínicas
- 5,000+ usuarios activos
- 99.5% uptime en 6 meses

---

### Proyecto 2: Plataforma E-learning

**Cliente:** Universidad Nacional San Cristóbal de Huamanga
**Rol:** Desarrollador Full Stack Senior
**Duración:** 6 meses
**Equipo:** 4 desarrolladores, 2 diseñadores UX/UI

**Tecnologías:**
- Frontend: React, Redux Toolkit, Material-UI
- Backend: NestJS, MongoDB
- Video: AWS MediaConvert, CloudFront
- Real-time: Socket.io
- Infraestructura: AWS Elastic Beanstalk, S3, RDS

**Funcionalidades:**
- Sistema de cursos con lecciones multimedia
- Videollamadas integradas (Zoom API)
- Foros de discusión
- Evaluaciones en línea (quizzes, exámenes)
- Sistema de calificaciones automatizado
- Gamificación (badges, puntos, rankings)
- Certificados digitales

**Mi Función:**
- Desarrollo del módulo de evaluaciones
- Implementación de sistema de videollamadas
- Sistema de notificaciones en tiempo real
- Optimización de carga de videos

**Resultados:**
- 15,000+ estudiantes registrados
- 200+ cursos publicados
- 95% satisfacción estudiantil

---

### Proyecto 3: Sistema ERP para Retail

**Cliente:** Cadena de Supermercados Regional (confidencial)
**Rol:** Desarrollador Backend y DevOps
**Duración:** 1 año
**Equipo:** 8 desarrolladores, 2 DevOps

**Tecnologías:**
- Frontend: Angular 14
- Backend: NestJS, PostgreSQL, Redis
- Microservicios: Docker, Kubernetes
- Message Queue: RabbitMQ
- Monitoring: Prometheus, Grafana
- CI/CD: GitLab CI/CD

**Módulos:**
- Gestión de inventario multi-sucursal
- Punto de venta (POS)
- Compras y proveedores
- Ventas y facturación
- Contabilidad
- Reportes financieros
- Integraciones: SUNAT (facturación electrónica)

**Mi Función:**
- Arquitectura de microservicios
- Implementación de módulo de inventario
- API Gateway con autenticación
- Setup de Kubernetes cluster
- CI/CD pipelines
- Monitoreo y alertas

**Resultados:**
- 50+ sucursales conectadas
- 500+ usuarios concurrentes
- Procesamiento de 10,000+ transacciones/día
- Reducción de 40% en tiempos de inventario

---

### Proyecto 4: App Móvil de Delivery

**Cliente:** Startup de Delivery Local
**Rol:** Desarrollador Mobile Full Stack
**Duración:** 4 meses
**Equipo:** 3 desarrolladores

**Tecnologías:**
- Mobile: Vue.js + Capacitor
- Backend: Firebase (Firestore, Functions, Auth, FCM)
- Payments: Stripe
- Maps: Google Maps API
- Infraestructura: Firebase Hosting, Cloud Functions

**Features:**
- Tres apps: Cliente, Repartidor, Restaurante
- Tracking en tiempo real
- Chat integrado
- Notificaciones push
- Pagos con tarjeta
- Sistema de ratings
- Promociones y cupones

**Mi Función:**
- Desarrollo completo de app de cliente
- Integración de geolocalización
- Sistema de notificaciones
- Integración de pagos con Stripe
- Deploy a App Store y Play Store

**Resultados:**
- 2,000+ descargas en primer mes
- 4.5⭐ rating en stores
- 300+ pedidos/día

---

## 8. Plataformas de Despliegue

### Hosting y Cloud

**Firebase Hosting:**
- SPAs (Vue.js, React, Angular)
- Ventajas: CDN global, SSL gratis, deploy en segundos
- Proyectos: Landing pages, apps administrativas

**Vercel:**
- Next.js y React applications
- Ventajas: Deployments automáticos, preview URLs, edge functions
- Proyectos: E-commerce frontend, portfolios

**Netlify:**
- JAMstack sites, SSGs (Static Site Generators)
- Ventajas: Forms integrados, split testing, branch deploys
- Proyectos: Blogs, documentación

**AWS EC2:**
- Aplicaciones Node.js, Python, PHP
- Configuración: Ubuntu Server, Nginx, PM2
- Ventajas: Control total, alta disponibilidad
- Proyectos: APIs de producción, sistemas empresariales

**Heroku:**
- APIs de Node.js, Python
- Ventajas: Deploy simple, addons (Postgres, Redis)
- Proyectos: MVPs, prototipos, APIs pequeñas

**DigitalOcean:**
- Droplets con Docker
- Ventajas: Precios competitivos, buen rendimiento
- Proyectos: Microservicios, aplicaciones de tamaño medio

**AWS Elastic Beanstalk:**
- Aplicaciones Node.js con auto-scaling
- Ventajas: Manejo simplificado, integrado con AWS
- Proyectos: APIs empresariales

**Railway:**
- Deploy de backends desde GitHub
- Ventajas: Muy fácil, detecta framework automáticamente
- Proyectos: Prototipos rápidos

### Containerización y Orquestación

**Docker Hub:**
- Repositorio de imágenes Docker
- CI/CD: Build y push automático

**AWS ECS (Elastic Container Service):**
- Orquestación de containers Docker
- Proyectos: Microservicios en producción

**Kubernetes (GKE, EKS):**
- Orquestación avanzada
- Proyectos: Sistemas de alta escala

### CI/CD

**GitHub Actions:**
- Workflows automáticos
- Tests, build, deploy
- Proyectos: Todos los repos en GitHub

**GitLab CI/CD:**
- Pipelines integrados
- Proyectos: Repositorios empresariales

### Bases de Datos

**Firebase:**
- Firestore, Realtime Database
- Proyectos: Apps móviles, prototipos

**AWS RDS:**
- PostgreSQL, MySQL administrado
- Proyectos: Producción empresarial

**MongoDB Atlas:**
- MongoDB en la nube
- Proyectos: APIs con datos no estructurados

**Heroku Postgres:**
- PostgreSQL addon de Heroku
- Proyectos: Prototipos

---

## 9. Otras Herramientas de Desarrollo

### IDEs y Editores

**Visual Studio Code:**
- IDE principal
- Extensiones favoritas:
  - Volar (Vue)
  - ESLint, Prettier
  - GitLens
  - Thunder Client
  - Docker
- Motivo: Ligero, extensible, gratuito, excelente soporte TypeScript

### Control de Versiones

**Git + GitHub:**
- Control de versiones
- Branching strategy: GitFlow
- Pull requests con code reviews
- GitHub Actions para CI/CD
- Motivo: Estándar de la industria, colaboración

**GitLab:**
- Alternativa para proyectos empresariales
- CI/CD integrado

### Gestión de Dependencias

**npm / pnpm:**
- Gestor de paquetes para Node.js
- pnpm: Más rápido, ahorra espacio
- Motivo: Ecosistema JavaScript

**pip / poetry:**
- Gestor de paquetes para Python
- poetry: Mejor manejo de dependencias
- Motivo: Proyectos Python

### Contenedores

**Docker:**
- Containerización de aplicaciones
- Docker Compose para multi-container
- Motivo: Desarrollo consistente, fácil deploy, aislamiento

**Kubernetes:**
- Orquestación de containers
- kubectl para manejo
- Motivo: Escalabilidad, alta disponibilidad

### Testing

**Vitest:**
- Tests unitarios para Vue
- Motivo: Rápido, compatible con Vite

**Jest:**
- Tests unitarios JavaScript/TypeScript
- Motivo: Popular, bien documentado

**Cypress:**
- Tests E2E
- Motivo: Fácil de usar, debugging visual

**Postman / Insomnia:**
- Testing de APIs
- Colecciones compartidas con equipo
- Motivo: Interfaz intuitiva

### API Development

**Swagger / OpenAPI:**
- Documentación de APIs
- Generación automática desde código
- Motivo: Documentación interactiva

**Postman:**
- Testing y documentación de APIs
- Motivo: Colaboración en equipo

### Bases de Datos

**DBeaver:**
- Cliente universal de bases de datos
- Soporta: PostgreSQL, MySQL, MongoDB, SQLite
- Motivo: Una herramienta para todas las DBs

**pgAdmin:**
- Cliente específico para PostgreSQL
- Motivo: Features avanzadas de Postgres

**MongoDB Compass:**
- GUI para MongoDB
- Motivo: Visualización de documentos

### Monitoreo y Logs

**Sentry:**
- Error tracking en producción
- Source maps para debugging
- Motivo: Detectar errores antes que usuarios

**LogRocket:**
- Session replay
- Performance monitoring
- Motivo: Debugging de issues de usuarios

**PM2:**
- Process manager para Node.js
- Logs, monitoring, auto-restart
- Motivo: Gestión de procesos en producción

### Diseño y Prototipado

**Figma:**
- Diseño de interfaces
- Colaboración con diseñadores
- Motivo: Mejor herramienta de diseño colaborativo

### Comunicación y Gestión

**Slack:**
- Comunicación de equipo
- Integraciones con GitHub, CI/CD
- Motivo: Comunicación rápida

**Jira:**
- Gestión de proyectos ágiles
- Tracking de bugs y features
- Motivo: Estándar para Scrum

**Notion:**
- Documentación
- Knowledge base
- Motivo: Flexible, colaborativo

### Performance

**Lighthouse:**
- Auditoría de performance web
- Motivo: Optimización de frontend

**Chrome DevTools:**
- Debugging
- Performance profiling
- Network analysis
- Motivo: Herramienta fundamental

### Otros

**ESLint + Prettier:**
- Linting y formateo de código
- Motivo: Código consistente, menos errores

**Husky:**
- Git hooks
- Pre-commit, pre-push
- Motivo: Calidad de código antes de commit

**Webpack / Vite:**
- Bundlers
- Vite: Más rápido para desarrollo
- Motivo: Build optimizado

---

## 10. Metodología Ágil: SCRUM

### Experiencia: 3 años trabajando con SCRUM

### Descripción de SCRUM

SCRUM es un marco de trabajo ágil para gestión de proyectos complejos, especialmente desarrollo de software. Se basa en iteraciones cortas llamadas **Sprints** y en la mejora continua.

### Roles en SCRUM

**1. Product Owner (PO):**
- Responsable de maximizar el valor del producto
- Gestiona el Product Backlog
- Prioriza funcionalidades
- Define criterios de aceptación
- Interfaz con stakeholders

**2. Scrum Master (SM):**
- Facilita el proceso SCRUM
- Elimina impedimentos
- Protege al equipo de interrupciones
- Asegura que se sigan las prácticas SCRUM
- Coach del equipo

**3. Development Team:**
- Equipo auto-organizado de 3-9 personas
- Multifuncional (frontend, backend, QA)
- Responsables de entregar incrementos de producto
- Estiman tareas
- Se comprometen con el Sprint Goal

### Artefactos

**1. Product Backlog:**
- Lista priorizada de todas las funcionalidades
- User stories con estimaciones
- Refinado constantemente
- Propiedad del Product Owner

**2. Sprint Backlog:**
- Subset del Product Backlog para el Sprint actual
- Tareas comprometidas por el equipo
- Actualizado diariamente

**3. Increment:**
- Producto potencialmente entregable al final del Sprint
- Debe cumplir Definition of Done (DoD)
- Integra todos los incrementos previos

### Eventos

**1. Sprint (1-4 semanas):**
- Iteración de tiempo fijo
- En mi experiencia: Sprints de 2 semanas
- Objetivo: Entregar incremento de producto funcional

**2. Sprint Planning (2-4 horas):**
- Al inicio del Sprint
- ¿Qué se puede entregar?
- ¿Cómo se logrará el trabajo?
- Selección de User Stories del Backlog
- Descomposición en tareas
- Estimación con Planning Poker

**3. Daily Standup (15 minutos):**
- Todos los días a la misma hora
- De pie (para mantenerlo corto)
- Cada miembro responde:
  - ¿Qué hice ayer?
  - ¿Qué haré hoy?
  - ¿Tengo algún impedimento?
- NO es reporte al Scrum Master, es sincronización del equipo

**4. Sprint Review (1-2 horas):**
- Al final del Sprint
- Demostración del incremento a stakeholders
- Feedback del Product Owner
- Actualización del Product Backlog
- Retrospectiva sobre el producto

**5. Sprint Retrospective (1 hora):**
- Después del Sprint Review
- Reflexión sobre el proceso
- ¿Qué salió bien?
- ¿Qué puede mejorar?
- Plan de acción para próximo Sprint
- Enfoque: Mejora continua del equipo

### Mi Experiencia Práctica

**Proyecto:** Sistema de Gestión Hospitalaria

**Configuración:**
- Sprints: 2 semanas
- Equipo: 5 developers, 1 QA, 1 PO
- Rol: Developer + Scrum Master suplente

**Sprint Planning:**
- Viernes 9:00 AM
- Duración: 2 horas
- Product Owner presenta prioridades
- Equipo selecciona ~20 story points
- Descomposición en tareas técnicas
- Herramienta: Jira

**Daily Standup:**
- Lunes a Viernes 9:00 AM
- 15 minutos exactos
- Por Slack (equipo remoto)
- Impedimentos documentados en Jira

**Sprint Review:**
- Viernes de fin de Sprint, 3:00 PM
- Demo en ambiente de staging
- Stakeholders: Director del hospital, jefe de sistemas
- Feedback inmediato

**Sprint Retrospective:**
- Después del Review
- Board: Start, Stop, Continue
- Actions items: Max 3 por Sprint
- Seguimiento en próximo retrospective

### Estimación

**Técnica: Planning Poker**
- Story Points: Fibonacci (1, 2, 3, 5, 8, 13)
- Referencia: Historia de 3 puntos
- Consenso del equipo
- Velocity: ~20 puntos por Sprint

### Herramientas

**Jira:**
- Tablero Scrum
- Backlog grooming
- Sprint boards
- Burndown charts
- Velocity tracking

**Confluence:**
- Documentación técnica
- Sprint retrospectives
- Definition of Done
- User stories detalladas

**Slack:**
- Comunicación diaria
- Integraciones: GitHub, Jira
- Standups asíncronos

**Zoom:**
- Sprint Planning
- Sprint Review
- Retrospectives

### Beneficios Observados

1. **Transparencia:**
   - Todos saben qué se está haciendo
   - Progreso visible diariamente

2. **Adaptabilidad:**
   - Cambios de prioridad cada 2 semanas
   - Feedback temprano

3. **Calidad:**
   - Definition of Done estricto
   - Code reviews obligatorios
   - QA en cada Sprint

4. **Motivación:**
   - Equipo auto-organizado
   - Ownership de tareas
   - Celebración de logros

5. **Mejora Continua:**
   - Retrospectives efectivos
   - Velocity mejoró 30% en 6 meses

### Desafíos Enfrentados

1. **Estimación inicial imprecisa:** Mejoró con experiencia
2. **Interrupciones externas:** Scrum Master bloqueaba
3. **Deuda técnica:** Dedicamos 20% del Sprint a refactoring
4. **Scope creep:** PO aprendió a decir "no" o "próximo Sprint"

---

## RESUMEN EJECUTIVO DEL PROYECTO TASK MANAGER

### Descripción

Sistema de gestión de tareas desarrollado como demostración de stack tecnológico moderno.

### Stack Completo

**Frontend:**
- Vue.js 3 (Composition API)
- Pinia (State Management)
- Vite (Build Tool)
- Axios (HTTP Client)

**Backend:**
- NestJS (TypeScript)
- Firebase Firestore (Database)
- Firebase Admin SDK

**DevOps:**
- Docker & Docker Compose
- Firebase Hosting
- Nginx (Reverse Proxy)

### Arquitectura

- Arquitectura: Cliente-Servidor con API RESTful
- Patrón: Repository Pattern
- Base de datos: NoSQL (Firestore)
- Despliegue: Containerizado con Docker

### Funcionalidades

- ✅ CRUD completo de tareas
- ✅ Marcar tareas como completadas
- ✅ Interfaz responsive
- ✅ Estado global con Pinia
- ✅ Estadísticas en tiempo real
- ✅ Animaciones y transiciones

### Tiempo de Desarrollo

- Configuración inicial: 10 minutos
- Desarrollo: 30 minutos
- Deploy a Firebase: 10 minutos
- **Total: ~1 hora**

### URLs del Proyecto

- Frontend: https://task-manager-[tu-id].web.app
- Backend: http://localhost:3000 (local)
- Repositorio: [URL de tu repositorio]

### Instrucciones de Ejecución

```bash
# Clonar proyecto
cd /home/claude

# Instalar dependencias
./setup.sh

# Ejecutar con Docker
docker-compose up

# O ejecutar localmente
cd task-manager-backend && npm run start:dev
cd task-manager-frontend && npm run dev
```

---

**Desarrollado por:** [Tu Nombre]
**Email:** sandy.ochoa.27@unsch.edu.pe
**Fecha:** Febrero 2026

---

Este proyecto demuestra conocimientos en:
- Desarrollo Full Stack moderno
- Arquitectura de microservicios
- Gestión de estado
- APIs RESTful
- Bases de datos NoSQL
- Containerización con Docker
- Deployment en cloud (Firebase)
- Metodologías ágiles

**¡Listo para el examen práctico!** 🚀
