import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from '../core/models/voiture';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.css']
})
export class VoitureDetailsComponent implements OnInit {
  id!: number
  voiture!: Voiture
  constructor(private vs: VoitureService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.ar.snapshot.params['id']
    this.vs.getVoitureById(this.id).subscribe((data)=>{
      this.voiture= data
    })
  }

}
