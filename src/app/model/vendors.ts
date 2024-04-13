export class Vendors {
 
    vendorId : number;
    vendorName : string;
    description : string;
    contactPersonName : string;
    contactEmail : string;
    contactPhone : string;
    websiteUrl : string;
    totalGoldQuantity : number;
    currentGoldPrice : number;
    createdAt : Date;

   constructor(vendorId : number, vendorName : string, description : string, contactPersonName : string, contactEmail : string,contactPhone : string,websiteUrl : string,totalGoldQuantity : number,currentGoldPrice : number,createdAt : Date){
       this.vendorId = vendorId;
       this.vendorName = vendorName;
       this.description = description;
       this.contactPersonName = contactPersonName;
       this.contactEmail = contactEmail;
       this.contactPhone = contactPhone;
       this.websiteUrl = websiteUrl;
       this.totalGoldQuantity = totalGoldQuantity;
       this.currentGoldPrice = currentGoldPrice;
       this.createdAt = createdAt;
   }
  
   toString() : string {
       return "Id: "+this.vendorId+" "+"Name: "+this.vendorName+" "+"Description: "+this.description+" "+"ContactPersonName: "+this.contactPersonName
       +" "+"ContactEmail: "+this.contactEmail+" "+"ContactPhone: " + this.contactPhone+" "+"WebsiteUrl: "+this.websiteUrl+" "+"TotalGoldQuantity: "+this.totalGoldQuantity
       +" "+"CurrentGoldPrice: "+this.currentGoldPrice+" "+"CreatedAt: "+this.createdAt;
   }
}