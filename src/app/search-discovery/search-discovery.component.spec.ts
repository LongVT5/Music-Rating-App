import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDiscoveryComponent } from './search-discovery.component';

describe('SearchDiscoveryComponent', () => {
  let component: SearchDiscoveryComponent;
  let fixture: ComponentFixture<SearchDiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
