import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { TesteComponent } from './teste/teste.component';
import { LinkclienteComponent } from './linkcliente/linkcliente.component';

export const routes: Routes = [

    { path: '', redirectTo: 'nome', pathMatch: 'full' },
    {path: 'link', component: LinkclienteComponent},
    {path: 'teste', component: TesteComponent},
    { path: 'home', component: HomeComponent, children:[

        {path: 'cliente', component: ClienteComponent},
        {path: 'fornecedor', component: FornecedorComponent},
        ]
    },


    { path: '**', component:HomeComponent },
];
