import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './appmodule';

declare const module: any;

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);
        const config = new DocumentBuilder()
            .setTitle('File Converter')
            .setDescription('The files format converter API')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('swagger', app, document);
        await app.listen(52001);

        if (module.hot) {
            module.hot.accept();
            module.hot.dispose(() => app.close());
        }
        console.log(`Application is running on: ${await app.getUrl()}`);
    } catch (error) {
        console.log(error.message);
    }
}
bootstrap();
