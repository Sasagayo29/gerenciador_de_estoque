// Em: src/app/product.service.ts

import { Injectable } from '@angular/core';
import { Product } from './interfaces/product.interface'; // Importa nossa interface
import { of, Observable } from 'rxjs'; // 'of' simula uma resposta de API

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // 1. Nosso banco de dados fake
  private products: Product[] = [
    { id: 1, nome: 'Parafuso Sextavado 1/4"', sku: 'PFR-001', quantidade: 1500 },
    { id: 2, nome: 'Arruela Lisa 1/4"', sku: 'ARR-001', quantidade: 3000 },
    { id: 3, nome: 'Porca 1/4"', sku: 'POR-001', quantidade: 2800 },
    { id: 4, nome: 'Abraçadeira Tipo U 2"', sku: 'ABR-002', quantidade: 400 }
  ];

  private nextId = 5; // Simula o auto-incremento do ID

  constructor() { }

  // --- NOSSAS FUNÇÕES (CRUD) ---

  // READ (Ler todos os produtos)
  getProducts(): Observable<Product[]> {
    // 'of()' cria um Observable que retorna o array imediatamente.
    // Numa app real, aqui entraria o this.http.get(...)
    return of(this.products);
  }

  // CREATE (Salvar novo produto)
  // (Vamos usar na próxima etapa, no modal)
  saveProduct(product: Product): Observable<Product> {
    if (product.id) {
      // EDITAR
      const index = this.products.findIndex(p => p.id === product.id);
      if (index > -1) {
        this.products[index] = { ...product }; // Atualiza o produto
        return of(this.products[index]);
      }
    } else {
      // CRIAR NOVO
      const newProduct = { ...product, id: this.nextId++ };
      this.products.push(newProduct);
      return of(newProduct);
    }
    // Retorna o produto como está se o ID não for encontrado (apenas para simulação)
    return of(product); 
  }

  // DELETE (Ainda não vamos usar, mas é bom ter)
  deleteProduct(id: number): Observable<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index > -1) {
      this.products.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}