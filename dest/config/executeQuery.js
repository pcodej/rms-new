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
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeQuery = void 0;
const database_1 = require("./database");
function executeQuery(sql) {
    return __awaiter(this, void 0, void 0, function* () {
        const { connection } = yield (0, database_1.connectToDatabase)();
        try {
            const [row, fields] = yield connection.execute(sql);
            return row;
        }
        catch (error) {
            console.log("Error in query execution - " + error);
        }
        finally {
            connection.end();
        }
    });
}
exports.executeQuery = executeQuery;
