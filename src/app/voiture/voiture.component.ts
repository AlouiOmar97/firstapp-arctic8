import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../core/models/voiture';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  voitureList!: Voiture[]
  constructor(private vs: VoitureService) { }

  ngOnInit(): void {
    this.vs.getAllVoiture().subscribe((data)=>{
      this.voitureList= data
    })
  }
  deleteVoiture(id:number){
    this.vs.deleteVoiture(id).subscribe(()=>{
      console.log("Voiture deleted !");
      this.vs.getAllVoiture().subscribe((data)=>{
        this.voitureList= data
      })
    })
  }
}
