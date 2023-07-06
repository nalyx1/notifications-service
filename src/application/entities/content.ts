export class Content {
  private readonly content;

  public get value(): string {
    return this.content;
  }

  private validadeContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 255;
  }

  constructor(content: string) {
    const isValidContentLenght = this.validadeContentLength(content);

    if (!isValidContentLenght) {
      throw new Error('Invalid content length');
    }

    this.content = content;
  }
}
