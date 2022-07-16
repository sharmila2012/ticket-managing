import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  constructor(private ticket: TicketsService) { }
  collection : any={};

  ngOnInit(): void {
    this.ticket.getList().subscribe((result :any) => {
      console.log(result);
      this.collection = result
    });
  }
  deleteTickets(item:any){
    this.collection.splice(item-1,1)
    this.ticket.deleteTickets(item).subscribe((result)=>{
      console.log("result",result)
    })
  }
  

}
