import { Directive, OnInit, Inject, Input, Renderer, ElementRef } from '@angular/core';

import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{

    private el = HTMLElement;
    @Input('modal-trigger') modalId: string; 

    constructor(private ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.ref.nativeElement.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})
        })
    }
}