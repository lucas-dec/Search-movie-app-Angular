import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSearchComponent } from './modal-search.component'
import { SearchformComponent } from './components/searchform/searchform.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ModalSearchComponent, SearchformComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ModalSearchComponent]
})
export class ModalSearchModule { }
