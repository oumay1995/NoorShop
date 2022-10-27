import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})

export class DepartementsComponent implements OnInit {
  addDepartementForm : FormGroup;
  categorie : any = {};
  imagePreview : any;
  id: any;
  categories : any;
  title : any;

  constructor(private formBuilder : FormBuilder , private categorieServie : CategorieService, private activatedRoute : ActivatedRoute,private categorieService : CategorieService, private router : Router ) {}

  ngOnInit(): void {
    this.addDepartementForm = this.formBuilder.group({
      categorieName : [''],
      img:[]
    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log("id : ",this.id);
    
    this.categorieServie.getCategorie(this.id).subscribe((data)=>{
      this.categorie = data.categorie
    })

     if(this.id){
      this.title = "Edit categorie";
      this.categorieServie.getCategorie(this.id).subscribe((data)=>{
        this.categorie = data.categorie
      })
    }else{
      this.title = "Add categorie";
    }

  }
  saveDepartement(){
    if(this.id){
      //Edit categorie
      this.categorieServie.updateCategorie(this.categorie).subscribe((data)=>{
        console.log(data.message);
      })
      this.router.navigate(["/dashboardCategorie"]);   
     }
    else{
      //Add categorie
      this.title = "Add Categorie";
      console.log("save departement TS img",this.categorie , this.addDepartementForm.value.img);
      this.categorieServie.createCategorie(this.categorie,this.addDepartementForm.value.img).subscribe((data)=>{
        console.log(data.message);
      })
    }
  
  }
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Departement
    this.addDepartementForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.addDepartementForm.updateValueAndValidity();
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
