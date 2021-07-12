import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste, ListeTriee } from './liste-triee';

@Injectable({
  providedIn: 'root'
})
/**
 * Services qui permettent la commincation avec le serveur.
 */
export class ApiService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
/**
 * Faire un POST d'une liste sur l'API
 * 
 * @param l La liste que l'on souhaite faire trier
 * @returns L'objet "liste" triée.
 */
  createListe(l: Liste){
    let liste = l.liste;
    let ordre = l.ordre;

    return this.http.post<ListeTriee>('/api/list', {liste,ordre},this.httpOptions) ; 
  }
/**
 * Récuperer tous les listes triées avec un GET
 * @returns tous les objets "Liste"
 */
  getAllListeTriees(): Observable<ListeTriee[]>{
    return this.http.get<ListeTriee[]>('/api/list'); 
  }
/**
 * Récuperer une listes triées avec un GET
 * @param id l'id de la liste cherché
 * @returns un objets Liste avec l'id du paramètre
 */
  getListeTriee(id : number): Observable<ListeTriee>{
    return this.http.get<ListeTriee>('/api/list/'+id); 
  }
}
