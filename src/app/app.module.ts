import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppShellModule } from './app-shell/app-shell.module';
import { AppComponent } from './app.component';
import { ReadAccessInterceptor } from './read-access.interceptor';
import { DirtyCheckComponent } from './shared/dirty-check/dirty-check.component';

@NgModule({
  declarations: [AppComponent],
    imports: [BrowserModule, AppShellModule, AppRoutingModule, DirtyCheckComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReadAccessInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
