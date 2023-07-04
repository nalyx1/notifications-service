import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './infra/prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.notification.findMany();
  }

  findOne(id: string) {
    return this.prismaService.notification.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  create(createNotificationDto: CreateNotificationDto) {
    return this.prismaService.notification.create({
      data: createNotificationDto,
    });
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto) {
    return this.prismaService.notification.update({
      where: { id },
      data: updateNotificationDto,
    });
  }

  remove(id: string) {
    return this.prismaService.notification.delete({
      where: {
        id,
      },
    });
  }
}
