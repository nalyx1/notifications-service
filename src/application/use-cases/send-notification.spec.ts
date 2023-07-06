import { InMemoryNotificationsRepository } from 'src/infra/database/in-memory-notifications';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should send a new notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipient_id: 'id-example',
      content: 'Nova solicitação de amizade.',
      category: 'social',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
