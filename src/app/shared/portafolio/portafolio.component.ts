import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  items = [
    { title: 'Square Box Mockup', category: 'Mockup', image: 'assets/images/p1.jpg', previewImage: 'assets/images/preview.png', categories: 'all mockup' },
    { title: 'Product Box Package Mockup', category: 'Mockup', image: 'assets/images/p2.jpg', previewImage: 'assets/images/preview.png', categories: 'all mockup' },
    { title: 'Creative Package Design', category: 'Packaging', image: 'assets/images/p3.jpg', previewImage: 'assets/images/preview.png', categories: 'all packaging' },
    { title: 'Packaging Brand', category: 'Packaging', image: 'assets/images/p4.jpg', previewImage: 'assets/images/preview.png', categories: 'all packaging' },
    { title: 'Isometric 3D Extrusion', category: 'Typography', image: 'assets/images/p5.jpg', previewImage: 'assets/images/preview.png', categories: 'all typography' },
    { title: 'White Space Photography', category: 'Photography', image: 'assets/images/p6.jpg', previewImage: 'assets/images/preview.png', categories: 'all photography' },
  ];

  currentFilter = 'all';
  filteredItems = this.items;


  constructor() { }

  ngOnInit(): void {
  }

  filter(category: string): void {
    this.currentFilter = category;
    if (category === 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => item.categories.includes(category));
    }
  }

}
