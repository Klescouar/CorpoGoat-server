import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './organization/organization.module';
import { OrganizationController } from './organization/organization.controller';
import { OrganizationModule } from './organization/organization.module';

@Module({
  imports: [OrganizationModule],
  controllers: [AppController, OrganizationController],
  providers: [AppService],
})
export class AppModule {}
