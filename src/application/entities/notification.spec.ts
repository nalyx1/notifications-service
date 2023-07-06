import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should create a new valid notification', () => {
    const notification = new Notification({
      recipient_id: 'id-example',
      content: new Content('Nova solicitação de amizade.'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
