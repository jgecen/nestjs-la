import { ApiProperty } from '@nestjs/swagger';

export class CreateWhatsappMessageDto {
  @ApiProperty()
  from: number;

  @ApiProperty()
  text: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  help: { location: { lat: number; lon: number }; to: number[] };
}
