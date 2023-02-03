import { IsUUID } from 'class-validator';

export class AlbumDto {
  id: string;
  name: string;
  year: number;

  @IsUUID()
  artistId: string | null;
}

export class CreateAlbumDto {
  name: string;
  year: number;

  @IsUUID()
  artistId: string | null;
}
