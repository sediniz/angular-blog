import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
    @Input()
    PhotoCover:string=""

    @Input()
    cardtitle:string=""

    @Input()
    id:string="1"

    @Input()
    cardDescription:string = ""

    constructor() {}

    ngOnInit(): void {
        
    }

}
