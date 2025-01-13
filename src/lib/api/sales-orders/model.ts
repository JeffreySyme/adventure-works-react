import { AddressModel } from "../address-model"

export interface SalesOrderModel {
    salesOrderId: number
    revisionNumber: number
    orderDate: string
    dueDate: string
    shipDate: string | null
    status: number
    onlineOrderFlag: boolean
    salesOrderNumber: string
    purchaseOrderNumber: string
    accountNumber: string
    custonerId: number
    shipToAddress: AddressModel
    billToAddress: AddressModel
    shipMethod: string
    creditCardApprovalCode: string
    subTotal: number
    taxAmt: number
    freight: number
    totalDue: number
    comment: string
    modifiedDate: string
    salesOrderDetails: SalesOrderDetailModel[]
}
export interface SalesOrderDetailModel {
    orderQty: number
    productId: number
    unitPrice: number
    unitPriceDiscount: number
    lineTotal: number
    modifiedDate: string
}