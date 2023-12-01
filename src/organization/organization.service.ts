import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import prisma from 'src/prisma';

@Injectable()
export class OrganizationService {
  async create(organization: CreateOrganizationDto) {
    const newOrganization = await prisma.organization.create({
      data: organization,
    });
    return newOrganization;
  }

  findAll() {
    return prisma.organization.findMany();
  }

  findOne(id: string) {
    return prisma.organization.findUnique({
      where: { id },
    });
  }

  update(id: string, partialOrganization: UpdateOrganizationDto) {
    return prisma.organization.update({
      where: { id },
      data: partialOrganization,
    });
  }

  remove(id: string) {
    return prisma.organization.delete({
      where: { id },
    });
  }
}
