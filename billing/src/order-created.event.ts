export class OrderCreatedEvent {
    constructor(
        public readonly order_id: string,
        public readonly user_id: string,
        public readonly price: number
    ) {}
}
