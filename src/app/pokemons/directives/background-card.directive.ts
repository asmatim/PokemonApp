import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[pkmnBackgroundCard]'
})
export class BackgroundCardDirective {

    private backgroundColor: string = '#009688';
    private defaultBackgroundColor = '#FFFFFF';

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBackgroundColor(this.backgroundColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBackgroundColor(this.defaultBackgroundColor);
    }

    private setBackgroundColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}