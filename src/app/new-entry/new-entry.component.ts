import { Component,  } from "@angular/core";
import { TransferService } from "../service/transfer.service";
import { Router } from "@angular/router"

@Component({
    selector: 'app-new-entry',
    templateUrl: './new-entry.component.html',
    styleUrls: ['./new-entry.component.scss']
})


export class NewEntryComponent {

    account: string 
    value: number

    constructor(private service: TransferService, private router: Router){}

    transfer() {
        const data = { account: this.account, value: this.value }
        this.service.addTransfer(data)
        this.clearField()
        this.router.navigateByUrl("extrato")
    }

    clearField() {
        this.account = undefined
        this.value = undefined
    }
}