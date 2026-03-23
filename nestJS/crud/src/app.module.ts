import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacultyModule } from './faculty/faculty.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Faculty } from './faculty/entities/faculty.entity';

@Module({
  imports: [
    FacultyModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: 'localhost',
      database: 'crudprisma',
      username: 'root',
      password: '',
      port: 3306,
      entities: [Faculty],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
