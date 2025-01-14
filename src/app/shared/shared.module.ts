import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
