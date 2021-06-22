import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';
import { Gifs } from '../../gifs/interfaces/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get history(): string[]{
    return this.gifService.history;
  }

  search(term:string):void {
    this.gifService.searchGifs(term);
  }

  constructor(private gifService: GifsService){
  }

}
