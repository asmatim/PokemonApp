import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'pokemonRareteStars'})
export class PokemonRareteStarsPipe implements PipeTransform {
    transform(rarete: number): string {
        let stars: string;

        switch (rarete) {
            case 1:
                stars = '*';
                break;
            case 2:
                stars = '**';
                break;
            case 3:
                stars = '***';
                break;
            case 4:
                stars = '****';
                break;
            case 5:
                stars = '*****';
                break;
            default:
                stars = '';
                break;
        }
        return stars;
    }
}
