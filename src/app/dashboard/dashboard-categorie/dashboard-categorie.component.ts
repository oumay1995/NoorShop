import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-dashboard-categorie',
  templateUrl: './dashboard-categorie.component.html',
  styleUrls: ['./dashboard-categorie.component.css']
})
export class DashboardCategorieComponent implements OnInit {
  categories : any = {};
  id : any;
  imagePreview : any;
  constructor(private router : Router , private categorieService : CategorieService) {}

  ngOnInit(): void {
    this.categorieService.getCategories().subscribe((data)=>{
      this.categories = data.categories;
      console.log("this.categories",this.categories);
    })
  }

  AddCategorie(){
    this.router.navigate(["/Departement"]);
  }

  Save(id){
   if(id){
     //Edit categorie
     this.router.navigate([`editCategorie/${id}`]);
   }
  }

  //Delete categorie
  Delete(_id){
    console.log("_id", _id);   
    this.categorieService.DeleteCategorie(_id).subscribe((data)=>{
      console.log("this.categories",data.message);
    })

    this.categorieService.getCategories().subscribe((data)=>{
      this.categories = data.categories;
      console.log("this.categories",this.categories);
    })
  }

  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Departement
    /*this.addDepartementForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.addDepartementForm.updateValueAndValidity();*/
    // Creation d'une variable reader pour lire le contenu de fichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier avec succès
    reader.onload = () => {
    //affecter le résultat de la lecture dans la variable imagePreview
    this.imagePreview = reader.result as string
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
    }
}