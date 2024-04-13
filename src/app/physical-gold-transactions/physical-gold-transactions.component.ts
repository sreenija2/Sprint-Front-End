import { Component, OnInit } from '@angular/core';
import { PhysicalGoldTransactions } from '../model/physical-gold-transactions';
import { PhysicalGoldTransactionsService } from '../service/physical-gold-transactions.service';

@Component({
  selector: 'app-physical-gold-transactions',
  templateUrl: './physical-gold-transactions.component.html',
  styleUrls: ['./physical-gold-transactions.component.css']
})
export class PhysicalGoldTransactionsComponent implements OnInit{
  phygoldtran : PhysicalGoldTransactions[];

  constructor(private service : PhysicalGoldTransactionsService){
    this.phygoldtran = new Array();
  }

  ngOnInit(){
    this.service.getAllPhysicalGoldTransactions()
    .subscribe(
      data => {this.phygoldtran = data; alert(JSON.stringify(data))
      }, //this success handler works only if status code between 200 and 299
      err => {console.log(err)} //this success handler works only if status code between 4 and 5
    );
  }

}
