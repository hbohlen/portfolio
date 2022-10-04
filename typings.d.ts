interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Social extends SanityBody {
  _type: 'social';
  title: string;
  url: string;
}

export interface PageInfo extends SanityBody {
  _type: 'pageInfo';
  email: string;
  role: string;
  image: Image;
  name: string;
  phoneNumber: string;
}
