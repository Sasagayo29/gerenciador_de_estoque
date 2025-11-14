import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../product';

import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  providers: [MessageService, ConfirmationService]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  productDialog: boolean = false;
  product: Product = {} as Product;
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data
    );
  }

  openNew() {
    this.product = {} as Product;
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (!this.product.nome?.trim()) {
      return;
    }

    const isEditing = !!this.product.id;

    this.productService.saveProduct(this.product).subscribe(
      () => {
        const actionLabel = isEditing ? 'atualizado' : 'cadastrado';

        this.messageService.add({
          severity: 'success',
          summary: 'Operação concluída',
          detail: `Produto ${actionLabel} com sucesso.`,
          life: 3000
        });

        this.loadProducts();
        this.productDialog = false;
        this.product = {} as Product;
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Falha ao salvar',
          detail: 'Não foi possível salvar o produto. Tente novamente.',
          life: 3000
        });
      }
    );
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      header: 'Confirmar Remoção',
      message: `Deseja realmente remover o produto "${product.nome}"? Esta ação não pode ser desfeita.`,
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Remover',
      rejectLabel: 'Cancelar',

      accept: () => {
        this.productService.deleteProduct(product.id!).subscribe(
          (success) => {
            if (success) {
              this.messageService.add({
                severity: 'success',
                summary: 'Produto removido',
                detail: 'O produto foi excluído com sucesso.',
                life: 3000
              });
              this.loadProducts();
            }
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro ao remover',
              detail: 'Não foi possível excluir o produto. Tente novamente.',
              life: 3000
            });
          }
        );
      }
    });
  }
}
