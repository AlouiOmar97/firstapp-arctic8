import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../core/models/voiture';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent implements OnInit {

  
  voiture: Voiture={
    id: 0, 
    marque: "", 
    date: 0,
  }
  updateVoitureForm!: FormGroup
  id!: number
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id']
    this.voitureService.getVoitureById(this.id).subscribe((data)=>{
      this.voiture= data
      this.updateVoitureForm= new FormGroup({
        marque: new FormControl(this.voiture.marque,[Validators.required, Validators.minLength(3),Validators.pattern('^[a-z]+')]),
        date: new FormControl(this.voiture.date,Validators.required),
      })
    })
    
  }

  get marque(){return this.updateVoitureForm.get('marque')}
  get date(){return this.updateVoitureForm.get('date')}

  updateVoiture(){
    console.log("update Voiture");
   // console.log(this.updateVoitureForm.value);
   // console.log(this.updateVoitureForm.value.date);
 /*  this.logService.warn(this.updateVoitureForm.value)
   this.logService.error(this.updateVoitureForm.value)*/
   this.voitureService.updateVoiture(this.id,this.updateVoitureForm.value).subscribe(()=>{
    console.log('Voiture updateed');
     this.router.navigateByUrl('/voiture')
   })
    
  }


}
