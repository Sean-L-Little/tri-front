import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Liste, ListeTriee } from '../liste-triee';


@Component({
  selector: 'app-create-liste',
  templateUrl: './create-liste.component.html',
  styleUrls: ['./create-liste.component.css']
})

/**
 *  Component qui comprends la création et affichage d'une liste triée
 */
export class CreateListeComponent implements OnInit {

  value1=0;  value2=0;  value3=0;  value4=0;  value5=0; //Valeurs par défaut des éléments de la liste
  ordre="croissant";  //Valeur par défaut de l'ordre
  liste=new ListeTriee(0,[],"");
  pretty_list="";
  response=false; //Booléen qui permets de savoir si nous avons eu une réponse du serveur et afficher dans le html en fonction de ça.

  
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  }

  ngOnChange():void {
    console.log(this.ordre);
  }
  /**
   * Pour pretty printer la liste pour qu'elle soit plus lisible.
   */
  pp_array(arr:number[]): string{
    var res="";
    for(let i=0;i<arr.length;i++)
    {
      if(i==arr.length-1){
        res+=arr[i];
      }else{
        res+=arr[i]+' ⸱ ';
      }
    }
    return res;

  }

  /**
   * Fonction qui permets de communiquer avec le serveur PHP
   */
  trier(): void{
    let l= [this.value1,this.value2,this.value3,this.value4,this.value5];
    var liste = new Liste(l,this.ordre);

    this.apiService.createListe(liste).subscribe(data => { 
      this.liste=data;
      this.pretty_list=this.pp_array(data.liste);
      this.response=true;
    });

  }

}
