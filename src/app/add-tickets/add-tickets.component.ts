import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { TicketsService } from "../tickets.service";

@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent implements OnInit {
  alert :boolean = false
  addTickets = new FormGroup({
    name : new FormControl(''),
    from : new FormControl(''),
    to: new FormControl(''),
    email : new FormControl(''),
    rate :  new FormControl('')
  })
  constructor(private ticket: TicketsService) { }

  ngOnInit(): void {
  }
  collectList(){
    this.ticket.saveTickets(this.addTickets.value).subscribe((result) => {
      this.alert=true
      this.addTickets.reset({})
    })
    
  }
  closeAlert()
  {
    this.alert = false;
  }

}
