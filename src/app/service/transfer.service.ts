import { Injectable } from '@angular/core';
import { ITransfer } from 'src/interfaces/transfer';

@Injectable({
    providedIn: 'root'
})
export class TransferService {

    private listTransfer: ITransfer[]

    constructor() {
        this.listTransfer = []
    }

    get transfers(){
        return this.listTransfer
    }
    addTransfer(transfer: ITransfer){
        this.addDateTransfer(transfer)
        this.listTransfer.push(transfer)
    }

    private addDateTransfer(transfer: ITransfer){
        transfer.date = new Date()
        return transfer
    }
}
