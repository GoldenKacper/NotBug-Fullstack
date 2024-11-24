// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
    imports: [RouterModule, MatToolbarModule, MatButton, MatIcon]
})
export class AppComponent {
  title = '1_1_Angular_App';
}
