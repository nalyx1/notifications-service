import { Content } from './content';

export interface NotificationProps {
  recipient_id: string;
  content: Content;
  category: string;
  readed_at?: Date | null;
  created_at?: Date;
  updated_at?: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    const defaultCreatedAt = props.created_at || new Date();
    this.props = {
      ...props,
      created_at: defaultCreatedAt,
    };
  }

  public get recipient_id(): string {
    return this.props.recipient_id;
  }

  public set recipient_id(recipient_id: string) {
    this.props.recipient_id = recipient_id;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get readed_at(): Date | null | undefined {
    return this.props.readed_at;
  }

  public set readed_at(readed_at: Date | null | undefined) {
    this.props.readed_at = readed_at;
  }

  public get created_at(): Date | undefined {
    return this.props.created_at;
  }

  public get updated_at(): Date | undefined {
    return this.props.updated_at;
  }

  public set updated_at(updated_at: Date | undefined) {
    this.props.updated_at = updated_at;
  }

  public toJSON(): NotificationProps {
    return {
      ...this.props,
    };
  }
}
