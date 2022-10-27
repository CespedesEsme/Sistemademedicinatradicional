import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { BaseAPIClass } from '../class/baseAPI.class';
// import { BaseAPIClass } from '..';
import { Paginated } from '../model/paginated.model';
import { Rol } from '../model/rol.model';

@Injectable({
  providedIn: 'root'
})
export class ReportesService extends BaseAPIClass {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = '/reportes';
  }

  getEnfermedadMedicina(id: any): Observable<any>{
    return this.httpClient.get(this.baseUrl+'/enfermedad/'+ id);
  }

  getAportes(term): Observable<any>{
    return this.httpClient.get(this.baseUrl+'/aportes?term='+ term);
  }
  getMedicinas(term,orden): Observable<any>{
    return this.httpClient.get(this.baseUrl+'/rating-medicinas?term='+term+'&orden='+orden);
  }

  getMedicinasPopulares(term): Observable<any> {
    return this.httpClient.get(this.baseUrl+'/medicinas-populares?term='+term);
  }

  getChartMedicinas(): Observable<any>{
    return this.httpClient.get(this.baseUrl+'/medicinas-populares-chart');
  }
  getChartRatings(orden):Observable<any>{
    return this.httpClient.get(this.baseUrl+'/rating-medicinas-chart?orden='+orden);
  }

  getChartAportes(): Observable<any>{
    return this.httpClient.get(this.baseUrl+'/aportes-chart');

  }

  generatePdf(params: any) {
    return this.httpClient.get(this.baseUrl + '/enfermedad-pdf/'+params, { responseType: 'blob',});
  }
  generatePdfRating() {
    return this.httpClient.get(this.baseUrl + '/rating-medicinas-pdf', { responseType: 'blob',});
  }

  generatePdfPopulares() {
    return this.httpClient.get(this.baseUrl + '/medicinas-populares-pdf', { responseType: 'blob',});
  }
  generatePdfAportes() {
    return this.httpClient.get(this.baseUrl + '/aportes-pdf', { responseType: 'blob',});
  }

  getMedicinaVisitas(term, rango):Observable<any>{
    return this.httpClient.get(this.baseUrl + '/medicinas-visitas?term='+term+'&rango='+rango);
  }   
  getMedicinaVisitasChart(term, rango):Observable<any>{
    return this.httpClient.get(this.baseUrl + '/medicinas-visitas-chart?term='+term+'&rango='+rango);
  }

  getMedicinaVisitasPdf(term, rango):Observable<any>{
    return this.httpClient.get(this.baseUrl + '/medicinas-visitas-pdf?term='+term+'&rango='+rango,{ responseType: 'blob',});
  }

  getRango(){
    return this.httpClient.get(this.baseUrl + '/rango-visitas');
  }
   


}
