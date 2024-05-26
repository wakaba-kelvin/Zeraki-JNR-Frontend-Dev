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
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem: any) => {
              const datasetLabel = tooltipItem.dataset.label || '';
              return `${datasetLabel}: ${tooltipItem.raw}`;
            }
          }
        },
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
          },
          onClick: (e, legendItem) => {
            // Custom legend click behavior
          },
          onHover: (e, legendItem) => {
            // Custom legend hover behavior
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          title: {
            display: true,
            text: 'Month',
          },
          ticks: {
            color: '#333'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Value',
          },
          ticks: {
            color: '#333'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    };
  }
}
