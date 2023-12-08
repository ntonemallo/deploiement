import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => { //describe est une fonction de jasmin qui permet de regrouper des tests dans des unités
  beforeEach(() => TestBed.configureTestingModule({ //test
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => { 
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NTONE MALLO Christian-Ryan'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('NTONE MALLO Christian-Ryan');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('NTONE MALLO Christian-Ryan app is running!');
  });
});
