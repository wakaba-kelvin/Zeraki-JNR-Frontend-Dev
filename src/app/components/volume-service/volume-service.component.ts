import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-volume-service',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './volume-service.component.html',
  styleUrls: ['./volume-service.component.css']
})
export class VolumeServiceComponent implements OnInit {
  data!: ChartData;
  options: ChartOptions = {};

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Volume',
          data: [300, 500, 400, 600, 700, 800, 900],
          backgroundColor: '#0095FF', // Blue color
          stack: 'Stack 0'
        },
        {
          label: 'Services',
          data: [200, 400, 300, 500, 600, 700, 800],
          backgroundColor: '#00E096', // Green color
          stack: 'Stack 0'
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
