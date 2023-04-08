import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
    private readonly users: { user_id: string; stripeUserId: string; }[];

    constructor() {
        this.users = [
            { user_id: '123', stripeUserId: '321' },
            { user_id: '456', stripeUserId: '654' }
        ];
    }

    getUser(getUserRequest: GetUserRequest) {
        return this.users.find(user => user.user_id === getUserRequest.user_id);
    }
}
