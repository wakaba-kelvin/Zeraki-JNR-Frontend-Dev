import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartData, ChartOptions, TooltipItem } from 'chart.js'; 

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  data!: ChartData;
  options: ChartOptions = {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    // Example data for customer trends
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Customer Growth',
          data: [100, 200, 150, 300, 250, 400, 350],
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Teal color
          borderColor: 'rgba(75, 192, 192, 1)', // Teal color
          borderWidth: 1,
          fill: true // Line fill
        },
        {
          label: 'Customer Retention',
          data: [90, 180, 140, 280, 230, 380, 330],
          backgroundColor: 'rgba(153, 102, 255, 0.2)', // Purple color
          borderColor: 'rgba(153, 102, 255, 1)', // Purple color
          borderWidth: 1,
          fill: true // Line fill
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };
  }

}
