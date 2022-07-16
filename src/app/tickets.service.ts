import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  url ="http://localhost:3000/tickets"
  constructor(private http:HttpClient) { }
  
  getList()
  {
    return this.http.get(this.url);
  }
  saveTickets(data:any){
    return this.http.post(this.url,data)
  }
  deleteTickets(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentTickets(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateTickets(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}