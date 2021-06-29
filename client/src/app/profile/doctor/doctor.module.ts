import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MyappointmentComponent } from './myappointment/myappointment.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MyscheduleComponent } from './myschedule/myschedule.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { HistoryComponent } from './history/history.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatSortModule} from '@angular/material/sort';
const routes: Routes = [
{path:'myappoint',component:MyappointmentComponent},
{path:'schedule',component:MyscheduleComponent},
{path:'myhistory',component:HistoryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MyappointmentComponent,
    MyscheduleComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    MatTreeModule,
    MatSortModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
