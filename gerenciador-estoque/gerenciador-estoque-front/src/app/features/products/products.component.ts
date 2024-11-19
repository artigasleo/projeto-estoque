import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  // Dados simulados
  products = [
    { id: 1, name: 'Produto 1', description: 'Descrição do Produto 1', price: 100.0, stock: 20 },
    { id: 2, name: 'Produto 2', description: 'Descrição do Produto 2', price: 200.0, stock: 10 },
  ];

  // Adicionar produto
  addProduct() {
    console.log('Adicionar Produto');
    // Aqui você abrirá um formulário para adicionar o produto
  }

  // Editar produto
  editProduct(product: any) {
    console.log('Editar Produto:', product);
    // Aqui você abrirá um formulário com os dados do produto para editar
  }

  // Excluir produto
  deleteProduct(productId: number) {
    this.products = this.products.filter((p) => p.id !== productId);
    console.log('Produto excluído, ID:', productId);
  }
}
