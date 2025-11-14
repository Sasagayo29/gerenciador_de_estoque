import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ProductListComponent } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ProductListComponent,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'gerenciador_de_estoque';
}