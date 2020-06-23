

export class Image {
  url: string;
}

export class Artist {
  external_urls: {
      spotify: string;
  };
  id: string;
  name: string;
  images: Image[];

  constructor(data: Artist) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.images[""] = data.images[""] || '';
  }
}

export class Album  {
  artists: Artist[];
  images: Image[];
  name: string;
}

