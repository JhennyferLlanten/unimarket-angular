import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { EditarProductoComponent } from './pagina/editar-producto/editar-producto.component';
import { GestionQuejaComponent } from './pagina/gestion-queja/gestion-queja.component';



const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "crear-producto", component: CrearProductoComponent },
  { path: "busqueda/:texto", component: BusquedaComponent },
  { path: "detalle-producto", component: DetalleProductoComponent },
  { path: "gestion-productos", component: GestionProductosComponent },
  { path: "editar-producto/:codigo", component: EditarProductoComponent },
  { path: "gestion-queja", component: GestionQuejaComponent},
 
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }