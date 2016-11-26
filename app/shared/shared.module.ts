import {NgModule, ModuleWithProviders} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CityPipe} from "./pipes/city.pipe";
import {CityValidatorDirective} from "./validation/city.validator";
import {RoundTrip} from "./validation/roundtrip.validator";
import {AsyncCityValidatorDirective} from "./validation/async-city.validator";
import {DateComponent} from "./date/date.component";
import {AuthGuard} from "./auth/auth.guard";
import {LeaveComponentGuard} from "./deactivation/leave-component-guard";
import {CustomPreloadingStrategy} from "./preload/custom-preloading.strategy";
import { OAuthService } from 'angular2-oauth2/oauth-service';
import {SimpleAuthService} from "./auth/simple-auth.service";
import {AuthChildGuard} from "./auth/auth.child.guard";
import {AuthLoadGuard} from "./auth/auth.load.guard";
import {AuthService} from "./auth/auth.service";

@NgModule({
    imports: [
        FormsModule, // [(ngModel)]
        CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
    ],
    declarations: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTrip,
        DateComponent
    ],
    exports:[
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTrip,
        DateComponent
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            providers:  [
                OAuthService,
                { provide: AuthService, useClass: SimpleAuthService },
                AuthGuard,
                AuthLoadGuard,
                AuthChildGuard,
                LeaveComponentGuard,
                CustomPreloadingStrategy
            ],
            ngModule: SharedModule
        }
    }
}