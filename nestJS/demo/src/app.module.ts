import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { FacultyModule } from './faculty/faculty.module';
import { RouteController } from './route/route.controller';
import { RouteModule } from './route/route.module';

@Module({
  imports: [StudentModule, FacultyModule, RouteModule],
  controllers: [AppController, RouteController],
  providers: [AppService],
})
export class AppModule {}
