import { Component, OnInit } from '@angular/core';
import { StdService } from '../services/std.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private stdSV : StdService ,private route:Router) { }

  ngOnInit() {
    
  }
  insert(form) {
    let std_id = form.std_id;
    let std_name = form.std_name;
    let std_last = form.std_last;
    let std_detail= form.std_detail;
   
    
    this.stdSV.insert(std_id,std_name,std_last,std_detail).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }

}

