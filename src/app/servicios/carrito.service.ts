import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: number[];
  constructor() {
    this.productos = [];
  }
  public agregar(codigo: number) {
    this.productos.push(codigo); //validar que no se guarden prod repeditos
  }
  public quitar(codigo: number) {
    let indice = this.productos.indexOf(codigo);
    this.productos.splice(indice, 1);
  }
  public listar(): number[] {
    return this.productos;
  }
}