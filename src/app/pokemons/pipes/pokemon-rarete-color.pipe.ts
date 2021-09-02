import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'pokemonRareteColor'})
export class PokemonRareteColorPipe implements PipeTransform {
    transform(rarete: number): string {
        let color: string;

        switch (rarete) {
            case 1:
                color = 'green lighten-1';
                break;
            case 2:
                color = 'blue lighten-1';
                break;
            case 3:
                color = 'grey lighten-3';
                break;
            case 4:
                color = 'brown lighten-1';
                break;
            case 5:
                color = 'red lighten-1';
                break;
            default:
                color = 'grey';
                break;
        }
        return 'chip ' + color;
    }
}
