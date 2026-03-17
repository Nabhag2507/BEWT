import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot('mongodb+srv://nabhagsorathiya81_db_user:Nabhag1121@cluster0.xem98sr.mongodb.net/student')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
