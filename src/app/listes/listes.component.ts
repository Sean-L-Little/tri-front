import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ListeTriee } from '../liste-triee';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})

/**
 * Component qui permets d'afficher l'historique des listes triées.
 */
export class ListesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  listes=new Array<ListeTriee>();
  displayedColumns: string[] = ['ID', 'Liste', 'Ordre'];

  ngOnInit(): void {
    this.update();
  }

  ngOnChange():void{
    this.update();
  }

  

  update(){
    this.apiService.getAllListeTriees().subscribe(data =>   {
      this.listes = data.reverse();
    })
  }

}
