import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CarService } from '../../services/car.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServiceRecord, Car } from '../../models/car.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class ServiceFormComponent implements OnInit, OnDestroy {
  serviceForm!: FormGroup;
  car!: Car;
  private carsChangedSubscription!: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ServiceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { carId: number },
    private fb: FormBuilder,
    private carService: CarService
  ) {
    this.car = this.carService.getCarById(data.carId)!;
    this.initializeForm();
  }

  ngOnInit(): void {
    this.carsChangedSubscription = this.carService.cars$.subscribe(() => {
      this.car = this.carService.getCarById(this.car.id)!;
    });
  }

  ngOnDestroy(): void {
    this.carsChangedSubscription.unsubscribe();
  }

  initializeForm(): void {
    this.serviceForm = this.fb.group({
      part: ['', Validators.required],
      cost: [0, [Validators.required, Validators.min(0)]],
      date: [new Date(), Validators.required]
    });
  }

  onSubmit(): void {
    if (this.serviceForm.valid) {
      const serviceData: ServiceRecord = {
        id: Date.now(),
        ...this.serviceForm.value
      };
      this.car.services = [...this.car.services, serviceData];
      this.carService.updateCar(this.car);
      this.dialogRef.close(true);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
