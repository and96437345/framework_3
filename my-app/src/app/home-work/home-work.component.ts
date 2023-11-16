import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-work.component.html',
  styleUrl: './home-work.component.css',
  
})
export class HomeWorkComponent {
  currency1 = 10000;
  currency2 = 100;
  percent1 = 1.5;
  percent2 = 24;
  isTrue = true;
  students =["Andrey", "Alexey", "Anna", "Tigran", "Alexey", "Anton", "Artyom"];
  day = 3;
}
