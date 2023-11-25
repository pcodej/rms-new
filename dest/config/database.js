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
exports.connectToDatabase = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dbConst_1 = require("./dbConst");
const executeQuery_1 = require("./executeQuery");
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connection object to execute queries or interact with the database
            const connection = yield mysql2_1.default
                .createConnection({
                host: dbConst_1.DB.hostname,
                user: dbConst_1.DB.username,
                password: dbConst_1.DB.password,
                database: dbConst_1.DB.database,
            })
                .promise();
            return { connection, executeQuery: executeQuery_1.executeQuery };
        }
        catch (error) {
            console.error("Error connecting to the database:", error);
        }
    });
}
exports.connectToDatabase = connectToDatabase;
