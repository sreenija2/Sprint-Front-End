import { Addresses } from "./addresses";
import { Users } from "./users";
import { VendorBranches } from "./vendor-branches";

export class PhysicalGoldTransactions {

    transactionid:number;
	
	user:Users;
	
	branch:VendorBranches;
	
	quantity:number;
	
	address2:Addresses;
	
	createdAt:Date;

    constructor(transactionid:number, user:Users, branch:VendorBranches, quantity:number, address2:Addresses, createdAt:Date){
        this.transactionid = transactionid;
        this.user = user;
        this.branch = branch;
        this.quantity = quantity;
        this.address2 = address2;
        this.createdAt = createdAt;
    }

}
