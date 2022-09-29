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
export class EnfermedadService extends BaseAPIClass {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = '/enfermedades';
  }
  enableEnfermedad(id: number) {
    return this.httpClient.get(this.baseUrl + '/estado/' + id);
  }
  
  postMedicina(data:any):Observable<any>{
    return this.httpClient.post(this.baseUrl + '/medicina',data);
  }
}
