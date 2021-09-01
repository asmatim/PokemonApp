export class Pokemon {
    id: number | null;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    rarete: string;
    created: Date;

    constructor() {
        this.id = 0;
        this.hp = 0;
        this.cp = 0;
        this.name = 'noName';
        this.picture = 'https://';
        this.types = ['plante'];
        this.rarete = '*';
        this.created = new Date();
    }
}
