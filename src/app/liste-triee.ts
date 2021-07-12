export interface Liste {
    liste: Array<number>;
    ordre: string;
}

export class Liste {
    constructor(public liste: Array<number>, public ordre: string){};
}

export interface ListeTriee {
    id: number;
    liste: Array<number>;
    ordre: string;
}

export class ListeTriee {
    constructor(public id: number, public liste: Array<number>, public ordre: string){};
}
