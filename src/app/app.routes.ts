import { Routes } from '@angular/router';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { ScannerComponent } from './pages/scanner/scanner.component';
import { ListaComprasComponent } from './pages/lista-compras/lista-compras.component';

export const routes: Routes = [
    {path:'', component:EntradaComponent},
    {path:'scanner', component:ScannerComponent},
    {path:'lista', component:ListaComprasComponent}
];
