import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsUUID()
  recipient_id: string;

  @IsNotEmpty()
  @Length(5, 256)
  content: string;

  @IsNotEmpty()
  category: string;
}
