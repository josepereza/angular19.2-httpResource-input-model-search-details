import { httpResource } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productos(){
  return httpResource<Product[]>(()=>'https://fakestoreapi.com/products')
}

getProducto(id:Signal<number>){
  return httpResource<Product | undefined>(() => ({
    url: `https://fakestoreapi.com/products/${id()}`,
  }));



}
  constructor() { }
}
