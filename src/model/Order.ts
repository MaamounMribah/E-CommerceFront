import { Cart } from "./Cart"


export class Order {
    id!: number
    shipped!:Date
    ordered!:String
    total! :number
    shippingAdresse!:string
    status!:string
    cart!: Cart
     
}

