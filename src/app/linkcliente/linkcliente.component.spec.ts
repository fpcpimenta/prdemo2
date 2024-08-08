import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkclienteComponent } from './linkcliente.component';

describe('LinkclienteComponent', () => {
  let component: LinkclienteComponent;
  let fixture: ComponentFixture<LinkclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
