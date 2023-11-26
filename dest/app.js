"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const http_1 = __importDefault(require("http"));
const api = __importStar(require("./services/apiOrg"));
const loginForm_1 = require("./views/loginForm");
const organizationAdd_1 = require("./views/organizationAdd");
const server = http_1.default.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //render login page
    if (req.url === '/login') {
        try {
            res.write(loginForm_1.loginHtml);
            res.end();
        }
        catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //render add organization page
    if (req.url === '/create/organization') {
        try {
            res.write(organizationAdd_1.orgAddForm);
            res.end();
        }
        catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //get organization info
    if (req.url === '/organization/getorganizationinfo') {
        try {
            let result = yield api.getOrgInfo();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        }
        catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //get only active organizations
    if (req.url === '/organization/getactiveorgs') {
        try {
            let result = yield api.getActiveOrgs();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        }
        catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //get organization details by it name
    if (req.url === '/organization/getorgbyname') {
        try {
            let result = yield api.getOrgByName();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        }
        catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //get product  wise lic information of organization
    if (req.url === '/organization/getOrgProductWiseLicenseInfo') {
        try {
            let result = yield api.getOrgProductWiseLicenseInfo();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        }
        catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    // get org admins for seats increase emails
    if (req.url === '/organization/getOrgAdminsSeatsIncreaseEmail') {
        try {
            let result = yield api.getOrgAdminsSeatsIncreaseEmail();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        }
        catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
}));
server.listen(3000);
