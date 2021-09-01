import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'pokemonRareteColor'})
export class PokemonRareteColorPipe implements PipeTransform {
    transform(rarete: string): string {
        let color: string;

        switch (rarete) {
            case '*':
                color = 'green lighten-1';
                break;
            case '**':
                color = 'blue lighten-1';
                break;
            case '***':
                color = 'grey lighten-3';
                break;
            case '****':
                color = 'brown lighten-1';
                break;
            case '*****':
                color = 'red lighten-1';
                break;
            default:
                color = 'grey';
                break;
        }
        return 'chip ' + color;
    }
}
