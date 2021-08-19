import { HttpClient } from '@angular/common/http';
import { CompileNgModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?&appid='
  key = '50408669ad5a23e0ed79f765508852a8';

  constructor(private http: HttpClient) { }

  getClima(ciudad : string): Observable<any>{
    const URL = this.url + this.key + '&q='+ ciudad;
   return this.http.get(URL);
  }
}
