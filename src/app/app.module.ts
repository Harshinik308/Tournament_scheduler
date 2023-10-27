import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetApiService } from './get-api.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent,ChildComponent],
  imports: [BrowserModule, HttpClientModule,FormsModule],
  providers: [GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

