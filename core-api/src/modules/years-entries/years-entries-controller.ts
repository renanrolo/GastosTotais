import { Controller, Get, Param, Query } from "@nestjs/common";


@Controller('years-entries/:user_uuid')
export class YearsEntriesController {

    @Get()
    getYears(@Param('user_uuid') user_uuid) {
        console.log("🚀 > file: years-entries-controller.ts > line 9 > getYears > user_uuid", user_uuid);
        return {
            "user_uuid": user_uuid
        }
    }
}