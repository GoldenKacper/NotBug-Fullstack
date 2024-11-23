import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/car.model';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    FlexLayoutModule
  ]
})

export class CarFormComponent implements OnInit {
  carForm!: FormGroup;
  carId!: number;
  isEditMode = false;
  currentYear: number = new Date().getFullYear();

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private route: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.carId = +this.route.snapshot.paramMap.get('id')!;
    this.isEditMode = !!this.carId;
    this.initializeForm();

    if (this.isEditMode) {
      const car = this.carService.getCarById(this.carId);
      if (car) {
        this.carForm.patchValue(car);
      }
    }
  }

  initializeForm(): void {
    this.carForm = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: [
        new Date().getFullYear(),
        [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]
      ]
    });
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const carData: Car = {
        id: this.isEditMode ? this.carId : Date.now(),
        ...this.carForm.value,
        services: this.isEditMode ? this.carService.getCarById(this.carId)!.services : []
      };

      if (this.isEditMode) {
        this.carService.updateCar(carData);
      } else {
        this.carService.addCar(carData);
      }
      this.router.navigate(['/cars']);
    }
  }
}

