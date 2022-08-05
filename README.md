# Technokart
This project is to build an invoice creating system and the description of the task is as follow :
Create an API which would accept 3 parameters. 
1.Invoice Date. 
2. Invoice Number. 
3. Invoice Amount. 
You have to store these
details in the db (Mongodb Atlas). The logic to store the data would be
as follows - <br>
o The Invoice date should not be greater than the invoice date of
previous or next invoice number. E.g.
▪ Invoice number 1 has invoice date 3rd July 2022.
▪ Invoice number 3 has invoice date 5th July 2022.
▪ So when I put invoice number 2, it’s date should lie
between 3rd July and 5th July, such validation should be
there at the backend.
o Also a clean code, commented code is a plus, along with
Readme.md for documentation. <br>
• You have to create 4 end points
1. Enter new invoice details.
2. Update a specific invoice based on invoice number
3. Delete a specific invoice based on invoice number
4. Get all invoices stored in the db

### <u>Run Locally</u>
Clone the project <br>
```https://github.com/Mitul-778/Technokart.git``` <br>
Install npm Packages <br>
```npm install``` <br>
Run the server <br>
```npm start``` <br>

All the data got stored in and called from <b>Mongo Atlas Cloud Database</b>

### <u>End Points<u>
1. Create a new invoice : <br>
```http://localhost:5005/invoice``` <br>
Pass all the three parameters as json object i.e; <br>
```
{
    "invoice_number": Number,
    "invoice_amount" : Number,
    "invoice_date" : Date
}
```
and hit the URL with <b>POST</b> method <br>
2. Update a Specific invoice based on invoice number : <br>
```http://localhost:5005/invoice/:number``` <br>
It will update the invoice based on the number which you have passed as params in the URL with <b>PATCH</b> method.<br>
3. Delete a specific invoice based on invoice number <br>
```http://localhost:5005/invoice/:number``` <br>
It will delete an invoice based on the number which you have passed as params in the URL with <b>DELETE</b> method. <br>
4. Get all the invoices from the database: <br>
```http://localhost:5005/invoice``` <br>
It will fetch all the invoices that are present in the database and the method is <b>GET</b> method.
5. Get the invoice between two dates : <br>
```http://localhost:5005/invoice/date``` <br>
It will fetch all the invoice that are there in between the start date and the end date. You need to pass an object with start and end date with <b>GET</b> method i.e: <br>
```
{
    "start_date": Date,
    "end_date" : Date
}
```
