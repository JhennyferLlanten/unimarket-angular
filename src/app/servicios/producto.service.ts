import { ProductoGetDTO } from "../modelo/producto-get-dto";

export class ProductoService {
  productos: ProductoGetDTO[];

  constructor() {
    this.productos = [];
    const producto1 = new ProductoGetDTO();
    producto1.codigo = 1;
    producto1.nombre = "Televisor LG 4K";
    producto1.descripcion = "Descripcion 1";
    producto1.precio = 3500000;
    producto1.unidades = 2;
    producto1.imagenes = ["https://picsum.photos/450/225", "https://picsum.photos/450/225"];
    producto1.categoria = ["TECNOLOGIA"];
    this.productos.push(producto1);

    const producto2 = new ProductoGetDTO();
    producto2.codigo = 2;
    producto2.nombre = "Tenis Nike";
    producto2.descripcion = "Descripcion 2";
    producto2.precio = 650000;
    producto2.unidades = 4;
    producto2.imagenes = ["https://picsum.photos/450/225"];
    producto2.categoria = ["ROPA", "DEPORTE"];
    this.productos.push(producto2);

    // Agrega otros productos

  }

  public listar(): ProductoGetDTO[] {
    return this.productos;
  }

  public obtener(codigo:number):ProductoGetDTO | undefined{
    return this.productos.find(p => p.codigo == codigo);
  }
}