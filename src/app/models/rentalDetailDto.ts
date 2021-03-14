export interface RentalDetailDto{
    Id:number;
    carName: string;
    customerFirstName: string;
    customerLastName: string;
    customerEMail: string;
    customerCompanyName: string;
    rentDate: Date;
    returnDate?: Date;


}

