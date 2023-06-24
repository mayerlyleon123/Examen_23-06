import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InputtPage } from './inputt.page';

describe('InputtPage', () => {
  let component: InputtPage;
  let fixture: ComponentFixture<InputtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
