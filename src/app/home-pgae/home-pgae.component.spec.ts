import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePgaeComponent } from './home-pgae.component';

describe('HomePgaeComponent', () => {
  let component: HomePgaeComponent;
  let fixture: ComponentFixture<HomePgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePgaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
