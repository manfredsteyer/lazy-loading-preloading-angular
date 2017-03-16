import { NgModule } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { CommonModule } from '@angular/common';
import { SimpleAuthService } from '../shared/auth/simple-auth.service';
@NgModule({
    imports: [
      CommonModule
    ],
    providers: [
        { provide: AuthService, useClass: SimpleAuthService }
    ]
})
export class CoreModule {


}