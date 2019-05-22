import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StdService } from '../services/std.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  subscription : Subscription;
  dataList : any = [];
  datarow = 0;
  constructor(private stdSv:StdService , private route : Router){
    this.showData();
  }

  showData(){
    this.subscription = this.stdSv.getStd()
    .subscribe(data=>{
      this.dataList= data['rs'];
    });
  }

  adddata(){
    this.route.navigateByUrl("create");
  }

  deletedata(std_id){
    this.stdSv.del(std_id).subscribe();
    console.log(std_id);
  }
  
  editdata(std_id){
    this.route.navigate(['/edit',{std_id : std_id}]);
    console.log(std_id);
  }
}
