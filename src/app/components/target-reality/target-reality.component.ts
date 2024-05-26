import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartData, ChartOptions, TooltipItem } from 'chart.js'; 

@Component({
  selector: 'app-target-reality',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './target-reality.component.html',
  styleUrls: ['./target-reality.component.css'] 
})
export class TargetRealityComponent implements OnInit {
  data!: ChartData;
  options: ChartOptions = {}
  
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    // Example data structure for target and reality
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Target',
          data: [600, 200, 520, 400, 300, 700, 800],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color
          borderColor: 'rgba(54, 162, 235, 1)', // Blue color
          borderWidth: 1
        },
        {
          label: 'Reality',
          data: [540, 325, 702, 620, 450, 800, 900],
          backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color
          borderColor: 'rgba(255, 99, 132, 1)', // Red color
          borderWidth: 1
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