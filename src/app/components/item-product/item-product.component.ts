import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-product',
  imports: [RouterLink],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.css'
})
export class ItemProductComponent {
  producto=input.required<Product>()

}
