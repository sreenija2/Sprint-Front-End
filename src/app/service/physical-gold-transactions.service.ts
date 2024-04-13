import { Injectable } from '@angular/core';
import { PhysicalGoldTransactions } from '../model/physical-gold-transactions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhysicalGoldTransactionsService {

  constructor(private http : HttpClient) { }
  baseUrl = "http://localhost:8089/digitalgoldwallet/api/v1/physical_gold_transactions";

  getAllPhysicalGoldTransactions():Observable<PhysicalGoldTransactions[]>{
    return this.http.get<PhysicalGoldTransactions[]>(this.baseUrl);
  }

}
