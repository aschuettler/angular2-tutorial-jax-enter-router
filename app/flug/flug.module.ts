import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlugBuchenComponent} from "./flug-buchen/flug-buchen.component";
import {FlugSuchenComponent} from "./flug-suchen/flug-suchen.component";import {PassagierSuchenComponent} from "./passagier-suchen/passagier.suchen.component";
import {FlugService} from "./services/flug.service";
import {FlugEditComponent} from "./flug-edit/flug-edit.component";
import {FlugRouterModule} from "./flug.routes";
import {OrtValidatorDirective} from "../validators/ort.validator.directive";
import {OrtAsyncValidatorDirective} from "../validators/ort-async.validator.directive";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FlugRouterModule, ],
    declarations: [
        FlugBuchenComponent,
        FlugSuchenComponent,
        PassagierSuchenComponent,
        FlugEditComponent,
        OrtValidatorDirective,
        OrtAsyncValidatorDirective
    ],
   // exports: [FlugBuchenComponent, FlugSuchenComponent, FlugSuchenReactiveComponent, PassagierSuchenComponent, FlugEditComponent],
    providers: [FlugService]
})
export class FlugModule {
}



