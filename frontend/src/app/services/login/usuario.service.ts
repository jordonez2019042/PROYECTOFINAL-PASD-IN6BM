import { HttpClient, HttpHeaders } from "@angular/common/http";
import { templateJitUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  private URL = "http://localhost:3000/PASD";

  constructor(private http: HttpClient, private router: Router){}

  crearSolicitud(token:any, request:any){
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", token);
    return this.http.post<any>(this.URL + "/enviarSolicitud", request, {headers: allheaders})
  }

  usuarioId(){
    if(!sessionStorage.getItem("authorization")) return;

    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization", sessionStorage.getItem("authorization"));
    return this.http.get<any>(this.URL + "/usuarioId", {headers: allheaders});;
  }

  obtenerDoctor(id: any){
    return this.http.get<any>(this.URL + "/obtenerDoctor/"+ id)
  }

  obtenerEspecialidades(){
    return this.http.get<any>(this.URL + "/doctoresDetalle")
  }

  doctores(){
    return this.http.get<any>(this.URL + "/doctores")
  }

  agregarDoctor(token:any, addDoctor: any){
    const headers = new HttpHeaders();
    const allheaders = headers.set("authorization",token)
    return this.http.post(this.URL + '/elegirDoctor', addDoctor, {headers: allheaders})
  }
}
