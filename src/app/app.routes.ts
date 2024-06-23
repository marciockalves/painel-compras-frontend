import { Routes } from '@angular/router';
import { EntradaComponent } from './pages/entrada/entrada.component';
import { ScannerComponent } from './pages/scanner/scanner.component';

export const routes: Routes = [
    {path:'', component:EntradaComponent},
    {path:'scanner', component:ScannerComponent}
];
