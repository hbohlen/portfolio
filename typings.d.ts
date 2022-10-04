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
  name: string;
  email: string;
  role: string;
  heroImage: Image;
  phoneNumber: string;
}

export interface Skill extends SanityBody {
  _type: 'skill';
  image: Image;
  title: string;
}
export interface Technology extends SanityBody {
  _type: 'skill';
  image: Image;
  title: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: 'project';
  image: Image;
  linkToBuild: string;
  summary: string;
}
