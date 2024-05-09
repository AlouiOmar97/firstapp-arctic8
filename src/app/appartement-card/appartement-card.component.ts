import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-appartement-card',
  templateUrl: './appartement-card.component.html',
  styleUrls: ['./appartement-card.component.css']
})
export class AppartementCardComponent implements OnInit {
  childText="text from child"
  residence: Residence={
    "id": 1,
    "name": "Residence 1 json",
    "address": "Address 1",
    "image": "https://www.seniortransition.fr/wp-content/uploads/2021/02/residence-senior-les-jardins-darcadie-le-mans.jpg"
  }
  @Input()
  appartement: Appartement={
    id: 0, 
    numAppart: 0, 
    numEtage: 0, 
    surface: 0, 
    terrasse: "", 
    surfaceTerrasse: 0, 
    category: "", 
    description: "", 
    residence: this.residence, 
    status: true
  }
  @Output()
  deleteC= new EventEmitter<Appartement>()
  constructor() { }

  childMethod(){
    this.childText="child text modified"
  }
  ngOnInit(): void {
  }

  deleteChild(){
    console.log("delete from child");
    this.deleteC.emit(this.appartement)
  }

}
