import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {CarService} from '../../services/car.service';
import {Car, ServiceRecord} from '../../models/car.model';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {ServiceFormComponent} from '../service-form/service-form.component';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {Subscription} from 'rxjs';

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
    MatDividerModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule
  ]
})
export class CarDetailsComponent implements OnInit, OnDestroy {
  car!: Car;
  serviceDataSource: MatTableDataSource<ServiceRecord> = new MatTableDataSource<ServiceRecord>();
  displayedColumns: string[] = ['date', 'part', 'cost'];
  private carsSubscription!: Subscription;

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
      this.serviceDataSource.data = this.car.services;
    } else {
      // Handle car not found
      this.router.navigate(['/cars']);
    }

    this.carsSubscription = this.carService.cars$.subscribe(cars => {
      const updatedCar = cars.find(c => c.id === this.car.id);
      if (updatedCar) {
        this.car = updatedCar;
        this.serviceDataSource.data = this.car.services;
      } else {
        // Car was deleted
        this.router.navigate(['/cars']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.carsSubscription) {
      this.carsSubscription.unsubscribe();
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
        // No need to call ngOnInit(), the subscription will handle the update
      }
    });
  }
}
