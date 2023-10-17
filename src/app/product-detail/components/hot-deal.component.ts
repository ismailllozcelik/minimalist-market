import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hot-deal',
    template: ` <div
        class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap"
    >
        <div class="font-bold mr-8">🔥 Hot Deals!</div>
        <div class="align-items-center hidden lg:flex">
            <span class="line-height-3"
                >Grab this hot deal now and be a winner with every
                purchase!</span
            >
        </div>
        <a class="flex align-items-center ml-2 mr-8">
            <a class="text-white" href="#"
                ><span class="underline font-bold">Learn More</span></a
            >
        </a>
    </div>`,
})
export class HotDetalComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
