import { Addresses } from "./addresses";
import { Payments } from "./payments";
import { PhysicalGoldTransactions } from "./physical-gold-transactions";
import { TransactionHistory } from "./transaction-history";
import { VirtualGoldHoldings } from "./virtual-gold-holdings";

export class Users {
    private userId:number;
    private email:string;
    private name:string;
    private createdAt:Date;
    private balance:number;
    private address:Addresses;
    private transactionhistory:TransactionHistory[];
 
    constructor(userId:number,email:string,name:string,createdAt:Date,balance:number,address:Addresses){
        this.userId=userId;
        this.email=email;
        this.name=name;
        this.createdAt=createdAt;
        this.balance=balance;
        this.address=address;
     
 
    }
    toString():string{
        return "UserId: "+this.userId+", Email: "+this.email+", name: "+this.name+",CreatedAt: "+this.createdAt+",Balance: "+this.balance+", address: "+this.address;
    }
 
}
