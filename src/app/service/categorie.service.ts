import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  //adresse de base
  SERVER_URL: string = "http://localhost:3000/api/";
  constructor(private HttpClient : HttpClient) {}
  public createCategorie(categorie, img : File){
    console.log("service",categorie);
    let formData = new FormData();
    formData.append('categorieName',categorie.categorieName);
    formData.append('img',img);
    return this.HttpClient.post<{message : any}>(`${this.SERVER_URL + 'categories'}`, formData)
  }

  public getCategories(){
    return this.HttpClient.get<{categories : any}>(`${this.SERVER_URL + 'categories'}`)
  }

  public getCategorie(categorieId){
    return this.HttpClient.get<{categorie : any}>(`${this.SERVER_URL + 'categories'}/${categorieId}`); 
  }

  public updateCategorie(categorie){
    return this.HttpClient.put<{message : any}>(`${this.SERVER_URL + 'categories'}/${categorie._id}`, categorie)
  }
  
  public DeleteCategorie(categorieId){
    return this.HttpClient.delete<{message : any}>(`${this.SERVER_URL + 'categories'}/${categorieId}`); 
  }
}