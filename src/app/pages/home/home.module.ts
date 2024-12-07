import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatrixCalculatorComponent } from './components/matrix-calculator/matrix-calculator.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    MatrixCalculatorComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    MatrixCalculatorComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
