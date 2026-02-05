import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [FirebaseModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
