import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento';
import { Response } from '../models/Response'
import { EventoRequest } from '../models/eventoRequest';
import { Expediente } from '../models/expediente';
import { ExpedienteFiltroRequest } from '../models/expedienteFiltroRequest';


@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  dialogData: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) {}

  getDialogData() {
    return this.dialogData;
  }

  buscarExpediente(filtro:ExpedienteFiltroRequest):Observable<Response<Expediente>>{
    let url="http://localhost:8082/expediente/buscarExpediente";
    return this.http.post<Response<Expediente>>(url, filtro);
  }

  consultarExpedientePorID(idExpediente: any): Observable<Response<Expediente>> {
    const url = "http://localhost:8082/expediente/consultarExpedientePorID/1" +  idExpediente

    return this.http.get<Response<Expediente>>(url);
  }
}
