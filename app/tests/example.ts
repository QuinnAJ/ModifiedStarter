import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HomeComponent} from '../home/home.component';

describe('BasicAdComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(()=>{
    fixture=TestBed.createComponent(HomeComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should CameraSet',()=>{
    component.cameraSet();
    expect(component.value).toBe(3);
  })
})