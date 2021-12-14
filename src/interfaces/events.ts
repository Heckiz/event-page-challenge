export interface HeaderData {
    title: string;
    category: string;
    date: string;
    backgroundUrl: string;
}

export interface Participant {
    name: string;
    job: string;
}

export interface Guest {
    name: string;
    lastname: string;
    email: string;
    country: string;
    phone: string;
    job: string;
}

export interface EventInfoData {
    parners: string[];
    details: string[];
    participants: Participant[];
    finalMessage: string;
    guests: Guest[];
}

export interface RootObject {
    id: number;
    headerData: HeaderData;
    eventInfoData: EventInfoData;
}