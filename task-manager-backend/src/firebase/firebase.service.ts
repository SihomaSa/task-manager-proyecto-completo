import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private firestore: admin.firestore.Firestore;

  async onModuleInit() {
    try {
      // Verificar si ya está inicializado
      if (admin.apps.length === 0) {
        // Ruta al archivo de credenciales
        const serviceAccountPath = path.join(
          process.cwd(),
          'config',
          'serviceAccountKey.json',
        );

        // Verificar que el archivo existe
        if (!fs.existsSync(serviceAccountPath)) {
          console.error(
            '❌ Error: No se encontró el archivo serviceAccountKey.json en config/',
          );
          console.error(
            '📝 Descarga las credenciales desde: https://console.firebase.google.com/project/task-manager-proyecto-completo/settings/serviceaccounts/adminsdk',
          );
          throw new Error('Service account key not found');
        }

        const serviceAccount = require(serviceAccountPath);

        // Inicializar Firebase Admin
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          projectId: serviceAccount.project_id,
        });

        console.log('✅ Firebase Admin inicializado correctamente');
        console.log(`📦 Proyecto: ${serviceAccount.project_id}`);
      }

      this.firestore = admin.firestore();
      
      // Configurar opciones de Firestore (opcional pero recomendado)
      this.firestore.settings({
        ignoreUndefinedProperties: true,
      });

      console.log('✅ Firestore inicializado correctamente');
    } catch (error) {
      console.error('❌ Error al inicializar Firebase Admin:', error.message);
      throw error;
    }
  }

  getFirestore(): admin.firestore.Firestore {
    if (!this.firestore) {
      throw new Error('Firestore no está inicializado');
    }
    return this.firestore;
  }

  getAdmin(): typeof admin {
    return admin;
  }
}