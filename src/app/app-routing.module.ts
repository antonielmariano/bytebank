import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ExtractComponent } from "./extract/extract.component";
import { NewEntryComponent } from "./new-entry/new-entry.component";

export const routes: Routes = [
    {path: "", redirectTo: "extrato", pathMatch: "full"},
    {path:"extrato", component: ExtractComponent},
    {path:"nova-transferencia", component:NewEntryComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRountingModule{}