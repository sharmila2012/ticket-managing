import { FormGroup,FormControl} from '@angular/forms'
import { TicketsService } from "../tickets.service";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-tickets',
  templateUrl: './update-tickets.component.html',
  styleUrls: ['./update-tickets.component.css']
})
export class UpdateTicketsComponent implements OnInit {
  alert : any = false
  editTickets = new FormGroup({
    name : new FormControl(''),
    from : new FormControl(''),
    to: new FormControl(''),
    email : new FormControl(''),
    rate :  new FormControl('')
  })
  constructor(private router:ActivatedRoute,private ticket:TicketsService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.ticket.getCurrentTickets(this.router.snapshot.params['id']).subscribe((result:any)=>{
      this.editTickets = new FormGroup({
        name : new FormControl(result['name']),
        from : new FormControl(result['from']),
        to: new FormControl(result['to']),
        email : new FormControl(result['email']),
        rate :  new FormControl(result['rate'])
      })
    })
  }
  collection(){
    console.log(this.editTickets.value);
    this.ticket.updateTickets(this.router.snapshot.params['id'],this.editTickets.value).subscribe((result) =>{
      this.alert = true
    })
  }
  closeAlert(){
    this.alert =  false
  }

}
