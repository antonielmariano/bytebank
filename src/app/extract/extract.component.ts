import { Component, OnInit } from '@angular/core';
import { ITransfer } from 'src/interfaces/transfer';
import { TransferService } from '../service/transfer.service';

@Component({
    selector: 'app-extract',
    templateUrl: './extract.component.html',
    styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit{

    transfers: ITransfer[]

    constructor(private service: TransferService){}

    ngOnInit(){
        this.transfers = this.service.transfers
    }
}
