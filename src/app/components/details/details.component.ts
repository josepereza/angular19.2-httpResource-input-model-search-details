import { Component, computed, inject, input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
id=input<number>(0)
productService=inject(ProductService)
producto=this.productService.getProducto(this.id) 
}
