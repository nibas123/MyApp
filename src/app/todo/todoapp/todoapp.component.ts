import { Component } from '@angular/core';
import { BackendapiserviceService } from 'src/app/services/backendapiservice.service';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent {
constructor(private backend:BackendapiserviceService){}

todos:any=""
    ngOnInit()
    {
      this.backend.getTodo().subscribe((data:any)=>{this.todos=data})
    }
}
