import { Injectable, Inject } from '@nestjs/common';
import { ICreateOrderRequest } from './create-order-request.dto';
import { ClientKafka } from '@nestjs/microservices/client';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
    constructor(
        @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka
    ) {}

    createOrder({ user_id, price }: ICreateOrderRequest) {
        this.billingClient.emit(
            'order_created',
            new OrderCreatedEvent('123', user_id, price)
        );
    }
}
