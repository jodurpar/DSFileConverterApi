"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterController = void 0;
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const swagger_1 = require("@nestjs/swagger");
const commands_1 = require("../commands/commands");
const converterOptions_1 = require("../common/Dtos/converterOptions");
let ConverterController = class ConverterController {
    async Converter(option, res) {
        try {
            commands_1.Command.Execute(option);
            res.status(common_1.HttpStatus.CREATED).send(`Created ${option.outputFile}`);
            return `Created ${option.outputFile} `;
        }
        catch (error) {
            res.status(common_1.HttpStatus.CONFLICT).send(error.message);
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'File created' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Do not have permisions to write file' }),
    (0, swagger_1.ApiBody)({ type: converterOptions_1.ConverterOptions }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [converterOptions_1.ConverterOptions, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ConverterController.prototype, "Converter", null);
ConverterController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Converter'),
    (0, common_1.Controller)('Converter')
], ConverterController);
exports.ConverterController = ConverterController;
//# sourceMappingURL=converter.controller.js.map