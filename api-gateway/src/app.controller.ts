import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ICreateOrderRequest } from './create-order-request.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post()
    createOrder(@Body() createOrderData: ICreateOrderRequest) {
        this.appService.createOrder(createOrderData);
    }
}
