"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWeatherEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendWeatherEmail = (content, p0) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: 'rutukhatal13@gmail.com',
            pass: 'jjqi kpff yfmk clte'
        }
    });
    const mailOptions = {
        from: 'rutukhatal13@gmail.com',
        to: 'rutukhatal04@gmail.com',
        subject: 'Weather Data',
        html: content
    };
    yield transporter.sendMail(mailOptions);
});
exports.sendWeatherEmail = sendWeatherEmail;
