export class Pokemon {
    id: number | null;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    rarete: number;
    created: Date;

    constructor() {
        this.id = 0;
        this.hp = 0;
        this.cp = 0;
        this.name = 'noName';
        this.picture = 'https://';
        this.types = ['Plante'];
        this.rarete = 0;
        this.created = new Date();
    }
}
