import { Component } from '@angular/core';
import { ProductoDTO } from 'src/app/modelo/producto-dto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  
  categorias:string[];
  producto:ProductoDTO;

  archivos!:FileList;
  
  constructor(){
  this.categorias = [];
  this.cargarCategorias();
  this.producto = new ProductoDTO;
  }

  private cargarCategorias(){
    this.categorias.push('MODA');
    this.categorias.push('DEPORTES');
    this.categorias.push('MASCOTAS');
    this.categorias.push('JUEGOS');
    this.categorias.push('MUSICA');
  }

  onFileChange(event:any){
    if (event.target.files.length > 0) {
    this.archivos = event.target.files;
    }
  }

  public crearProducto(){
    if(this.archivos != null && this.archivos.length > 0){
    console.log(this.producto);
    }else{
    console.log('Debe seleccionar al menos una imagen');
    }
  }
}
