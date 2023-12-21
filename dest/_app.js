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
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const routes_1 = require("./routes/routes");
const loginForm_1 = require("./views/loginForm");
exports.server = http_1.default.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedUrl = new URL(`http://localhost:3000${req.url}`);
        const reqUrl = parsedUrl.pathname;
        let result = yield (0, routes_1.rocket)(parsedUrl);
        console.log(result);
        if (typeof result === "string") {
            if (result == 'login') {
                res.write(loginForm_1.loginHtml);
            }
        }
        res.end(result); // Send the result as the response
    }
    catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
}));
exports.server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
