import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Configurando o formulário
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  // Salvar o produto
  saveProduct() {
    if (this.productForm.valid) {
      console.log('Produto salvo:', this.productForm.value);
    } else {
      console.log('Formulário inválido!');
    }
  }
}
