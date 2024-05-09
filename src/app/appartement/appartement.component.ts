import { Component, OnInit, ViewChild } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import { Appartement } from '../core/models/appartement';
import { AppartementCardComponent } from '../appartement-card/appartement-card.component';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {
  appartementList!: Appartement[]
  parentText=""
  @ViewChild(AppartementCardComponent)
  private appartementCardComponent: AppartementCardComponent
  constructor(private appartementService: AppartementService) { }

  ngOnInit(): void {
    this.appartementService.getAllAppartement().subscribe((data)=>{
      this.appartementList= data
    })

  }
  deleteAppartement(appart: Appartement){
    this.appartementService.deleteAppartement(appart.id).subscribe(()=>{
      console.log('appartement deleted');
      this.appartementService.getAllAppartement().subscribe((data)=>{
        this.appartementList= data
      })
    })
  }

  parentMethod(){
    this.parentText= this.appartementCardComponent.childText + " called from parent class"
    this.appartementCardComponent.childMethod()
  }

}
