import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/car.model';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatIconModule,
    MatCardTitle,
    MatCardSubtitle
  ]
})

// @Component({
//   selector: 'app-car-list',
//   templateUrl: './car-list.component.html',
//   styleUrls: ['./car-list.component.scss']
// })

export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, public router: Router) {
  }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  onSelectCar(car: Car): void {
    this.router.navigate(['/cars', car.id]);
  }

  onAddCar(): void {
    this.router.navigate(['/cars', 'new']);
  }
}

