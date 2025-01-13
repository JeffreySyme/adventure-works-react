import { AddressModel } from '../address-model'

export interface CustomerModel {
    customerId: number
    nameStyle: boolean
    title: string
    firstName: string
    middleName: string
    lastName: string
    suffix: string
    companyName: string
    salesPerson: string
    emailAddress: string
    phone: string
    modifiedDate: string
}

export interface CustomerAddressModel extends AddressModel {
    addressType: string
}