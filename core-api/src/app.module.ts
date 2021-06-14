import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { YearsEntriesModule } from "./modules/years-entries/years-entries-module";

@Module({
    controllers: [AppController],
    imports: [
        YearsEntriesModule
    ]
})

export class AppModule { }