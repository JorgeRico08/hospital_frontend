import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {
  filterPost = '';
  
  posts = [
    {
      id: 1,
      nombre: "Jorge Alejandro Rico",
      crup: "RIAJO098778RICO"
    },
    {
      id: 2,
      nombre: "Maria Mendoza",
      crup: "MAMENDOZA092838"
    },
    {
      id: 3,
      nombre: "Javier Araiza",
      crup: "JJAAC0384AA939"
    }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

}
