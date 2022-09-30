interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    email: string;
    role: string;
    name: string;
    phoneNumber: string;
}


export interface Social extends SanityBody {
    _type: "social";
    Title: string;
    url: string;
}


export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}


export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}


export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;

}