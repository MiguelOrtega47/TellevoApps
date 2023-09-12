import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TellevoPage } from './tellevo.page';

describe('TellevoPage', () => {
  let component: TellevoPage;
  let fixture: ComponentFixture<TellevoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TellevoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
