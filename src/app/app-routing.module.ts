import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { GestionQuejaComponent } from './pagina/gestion-queja/gestion-queja.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { ListarQuejasComponent } from './pagina/listar-quejas/listar-quejas.component';
import { CrearQuejaComponent } from './pagina/crear-queja/crear-queja.component';



const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "crear-producto", component: CrearProductoComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "detalle-producto", component: DetalleProductoComponent },
  { path: "gestion-productos", component: GestionProductosComponent },
  { path: "editar-producto/:codigo", component: CrearProductoComponent },
  { path: "gestion-queja", component: GestionQuejaComponent},
  { path: "listar-quejas", component: ListarQuejasComponent},
  { path: "crear-queja", component: CrearQuejaComponent } ,
  { path: "detalleProducto/:codigo", component: DetalleProductoComponent },
  { path: "carrito", component: CarritoComponent },
  
  

  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
