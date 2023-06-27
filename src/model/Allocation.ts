import { Cart } from "./Cart"
import { Product } from "./Product"


export class Allocation {
    id!: number
    dateDebut!: Date
    dateFin!: Date
    price!: number
    quantity!: number

    cart!: Cart
    product!: Product
}

