import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  private apiUrl = 'http://localhost:8081/api/pacientes';  // URL do backend diretamente no código

  constructor(private http: HttpClient) {}

  listarPacientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Requisição GET para listar pacientes
  }

  buscarPacientePorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);  // Requisição GET passando o ID do paciente
  }

  excluirPaciente(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);  // Requisição DELETE passando o ID do paciente
  }
}
