import { Component } from "@angular/core";

@Component ({
    selector: 'page-404',
    template: `
        <div class='center'>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png"/>
            <h1>Hey, cette page n'éxiste pas !</h1>
            <a href="/" class="waves-effect waves-teal btn-flat">
                Retourner à l'accueil
            </a>
        </div>
    `
})
export class PageNotFoundComponent {

}