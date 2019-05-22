import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StdService } from '../services/std.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  std_id : string;

  constructor(private stdSV : StdService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let std_id = this.std_id = (this.router.snapshot.paramMap.get('std_id'));
    this.subscription=this.stdSV.get(std_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let std_id = this.std_id = (this.router.snapshot.paramMap.get('std_id'));
    let std_name = form.std_name;
    let std_last = form.std_last;
    let std_detail = form.std_detail;
    
    this.stdSV.edit(std_id, std_name, std_last,std_detail).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(std_id  + std_name + std_last + std_detail);
       
  }

  ngOnInit() {
  }

}