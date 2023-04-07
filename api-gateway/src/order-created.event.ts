export class OrderCreatedEvent {
    constructor(
        public readonly order_id: string,
        public readonly user_id: string,
        public readonly price: number
    ) {}

    toString() {
        return JSON.stringify({
            order_id: this.order_id,
            user_id: this.user_id,
            price: this.price
        });
    }
}
