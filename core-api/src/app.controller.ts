import { Controller, Get, Request } from "@nestjs/common";

@Controller()
export class AppController {

    @Get('')
    healthCheck() {
        return {
            "HealthCheck": "Health",
            "WellCome": "You are AWESOME!"
        }
    }
}