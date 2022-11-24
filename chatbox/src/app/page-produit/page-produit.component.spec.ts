import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProduitComponent } from './page-produit.component';

describe('PageProduitComponent', () => {
  let component: PageProduitComponent;
  let fixture: ComponentFixture<PageProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
