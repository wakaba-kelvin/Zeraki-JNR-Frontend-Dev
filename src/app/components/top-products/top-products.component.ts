import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

interface Invoice {
  schoolName: string;
  invoiceNumber: string;
  dueDate: string;
  amountDue: number;
}

@Component({
  selector: 'app-top-products',
  standalone: true,
  imports: [TableModule],
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {
  invoices: Invoice[] = [];

  ngOnInit() {
    // Example data
    this.invoices = [
      { schoolName: 'Greenwood High', invoiceNumber: 'INV001', dueDate: '2023-06-01', amountDue: 1500 },
      { schoolName: 'Sunrise School', invoiceNumber: 'INV002', dueDate: '2023-06-15', amountDue: 2000 },
      { schoolName: 'Riverside Academy', invoiceNumber: 'INV003', dueDate: '2023-07-01', amountDue: 2500 },
      { schoolName: 'Hilltop School', invoiceNumber: 'INV004', dueDate: '2023-07-15', amountDue: 3000 },
      { schoolName: 'Lakeside High', invoiceNumber: 'INV005', dueDate: '2023-08-01', amountDue: 3500 },
    ];
  }
}
