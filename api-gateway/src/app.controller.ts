import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ICreateOrderRequest } from './create-order-request.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post()
    async createOrder(@Body() createOrderData: ICreateOrderRequest) {
        await this.appService.createOrder(createOrderData);
    }
}
