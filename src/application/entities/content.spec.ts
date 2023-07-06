import { Content } from './content';

describe('Notification content', () => {
  it('should create a new valid content', () => {
    const content = new Content('Você tem uma nova solicitação de amizade.');

    expect(content).toBeTruthy();
  });

  it('should throw a error when create a new content with less than 5 characters', () => {
    expect(() => new Content('')).toThrow();
  });

  it('should throw a error when create a new content with greater than 255 characters', () => {
    expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
