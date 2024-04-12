let invoices=[
    {
        id:1,
        name:"sonu",
        number:1995,
        amount:"20000",
        due:"20/05/2015",
    },
    {
        id:2,
        name:"monu",
        number:1993,
        amount:"80000",
        due:"20/05/2015",
    },
    {
        id:3,
        name:"rahul",
        number:1994,
        amount:"60000",
        due:"20/05/2015",
    },
    {
        id:4,
        name:"ravi",
        number:1992,
        amount:"30000",
        due:"20/05/2015",
    },
];

export function getInvoices(){
    return invoices;
}

export function findInvoiceByNumber(number){

  return  invoices.find(invoice => invoice.number === number)

}