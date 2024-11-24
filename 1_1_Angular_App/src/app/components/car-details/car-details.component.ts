import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/car.model';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {ServiceFormComponent} from '../service-form/service-form.component';
import {MatDivider} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    RouterModule,
    MatDivider,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule
  ]
})

export class CarDetailsComponent implements OnInit {
  car!: Car;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    const carId = +this.route.snapshot.paramMap.get('id')!;
    const car = this.carService.getCarById(carId);
    if (car) {
      this.car = car;
    } else {
      // Handle car not found
      this.router.navigate(['/cars']);
    }
  }

  onEditCar(): void {
    this.router.navigate(['/cars', this.car.id, 'edit']);
  }

  onDeleteCar(): void {
    this.carService.deleteCar(this.car.id);
    this.router.navigate(['/cars']);
  }

  onAddService(): void {
    const dialogRef = this.dialog.open(ServiceFormComponent, {
      width: '400px',
      data: {carId: this.car.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit(); // Refresh data
      }
    });
  }
}
