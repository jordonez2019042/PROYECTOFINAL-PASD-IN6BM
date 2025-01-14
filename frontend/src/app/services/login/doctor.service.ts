import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DoctorService{
  private URL =  "https://pasd-backend.herokuapp.com/PASD/" 
  ;
  constructor(private http: HttpClient, private router: Router){}

  obtenerCitas(){
    if(!sessionStorage.getItem("authorization")) return;

    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", sessionStorage.getItem("authorization"));
    return this.http.get<any>(this.URL + "/obtenerCitas", { headers: allheaders})
  }

  obtenerPacientes(){
    if(!sessionStorage.getItem("authorization")) return;

    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", sessionStorage.getItem("authorization"));
    return this.http.get<any>(this.URL + '/misPacientes', { headers: allheaders})
  }

  agregarCitas(token: any, quotes: any){
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.post<any>(this.URL + "/crearCitas", quotes, { headers: allheaders})
  }

  eliminarCita(token: any, id: any){
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.delete(this.URL + "/eliminarCitas/" + id, { headers: allheaders})
  }

  citaId(id:any){
    return this.http.get<any>(this.URL + "/obtenerCitasID/" + id);
  }

  editarCita(token: any, id: any, cita:any){
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization",token)
    return this.http.put<any>(this.URL + "/editarCitas/" + id, cita, { headers: allheaders})
  }
}
