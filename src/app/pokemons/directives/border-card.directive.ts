import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009688';
    private defaultHeight: number = 200;

    constructor(private el: ElementRef) {
        // this.borderColor = "#009688";
        this.setHeight(this.defaultHeight);
    }

    // permet de coisir la coleur à mettre sur notre template
    // @Input('pkmnBorderCard') borderColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }

}