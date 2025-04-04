import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { ListProductsComponent } from '../../components/list-products/list-products.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, Observable } from 'rxjs';
import { debounceSignal } from '../../signal-utilities';

@Component({
  selector: 'app-home',
  imports: [ListProductsComponent, NavbarComponent,FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    listFilter = signal<string>('');

    

  /* textFilter=effect(()=>
  {
    const  listFilter$=(toObservable(this.listFilter)).pipe(debounceTime(800)).subscribe(data=>
     this.data=data


     
  )
  this.listFilter.set(this.data)
}
) */
ListFilter$=(toObservable(this.listFilter)).pipe(debounceTime(800))

texto=toSignal(this.ListFilter$)
  


  
}


