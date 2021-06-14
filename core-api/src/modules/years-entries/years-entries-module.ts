import { Module } from "@nestjs/common";
import { YearsEntriesController } from "./years-entries-controller";

@Module({
    controllers: [YearsEntriesController]
})

export class YearsEntriesModule { }