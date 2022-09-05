"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const appmodule_1 = require("./appmodule");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(appmodule_1.AppModule);
        const config = new swagger_1.DocumentBuilder()
            .setTitle('File Converter')
            .setDescription('The files format converter API')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('swagger', app, document);
        await app.listen(3001);
        console.log(`Application is running on: ${await app.getUrl()}`);
    }
    catch (error) {
        console.log(error.message);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map