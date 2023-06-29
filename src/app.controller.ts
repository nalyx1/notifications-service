import { Controller, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.appService.create(createNotificationDto)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return this.appService.update(id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
