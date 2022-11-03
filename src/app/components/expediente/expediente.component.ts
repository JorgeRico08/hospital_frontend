import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Expediente } from 'src/app/models/expediente';
import { ExpedienteFiltroRequest } from 'src/app/models/expedienteFiltroRequest';
import { ExpedienteService } from 'src/app/service/expediente.service';
import { MatTableDataSource } from "@angular/material/table";

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

  

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

  

}
