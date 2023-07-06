import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications';

interface SendNotificationDto {
  recipient_id: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    sendNotificationDto: SendNotificationDto,
  ): Promise<SendNotificationResponse> {
    const { recipient_id, content, category } = sendNotificationDto;

    const notification = new Notification({
      recipient_id,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
