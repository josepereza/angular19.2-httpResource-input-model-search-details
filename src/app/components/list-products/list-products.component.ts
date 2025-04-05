import { Component, computed, inject, input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { ItemProductComponent } from '../item-product/item-product.component';

@Component({
  selector: 'app-list-products',
  imports: [RouterLink,ItemProductComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
productService=inject(ProductService)
productos= this.productService.productos()
productosItem=computed(()=>this.productos.value())
pageTitle = 'Snacks';

filterCriteria = input.required({
  transform: (value: string | undefined) => value!.toLowerCase(),
  alias: 'listCriteria'
});


filteredProducts = computed(() =>
  this.productosItem()!.filter(s => s.title.toLowerCase().includes(this.filterCriteria())));
}
