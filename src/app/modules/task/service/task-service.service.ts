import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private apiUrl = 'api/tasks';
  constructor(private http:HttpClient) {
   }



  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addTask(newTask: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, newTask);
  }

  updateTask(newTask: any): Observable<any> {
    const url = `${this.apiUrl}/${newTask.id}`;
    return this.http.put<any>(url, newTask);
  }

  deleteTask(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
