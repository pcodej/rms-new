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
const loginForm_1 = require("./views/loginForm");
const organizationAdd_1 = require("./views/organizationAdd");
exports.server = http_1.default.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let urlArr = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split("?");
    let reqUrl = "";
    if (urlArr) {
        reqUrl = urlArr[0];
    }
    else {
        reqUrl = "/login";
    }
    return { req, res };
    //render login page
    if (reqUrl === '/login' && req.method != 'POST') {
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
    if (reqUrl === '/create/organization') {
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
    // if (reqUrl === '/organization/getorganizationinfo') {
    //     try {
    //         const parsedUrl = url.parse(req.url!, true);
    //         const queryParams = parsedUrl.query;
    //         // Extract parameters from the query string object
    //         const orgid = queryParams.orgid?.toString();
    //         res.write(`<p>${orgid}</p>`);
    //         if(typeof orgid === 'string'){
    //             // let result = await api.getOrgInfo(parseInt(orgid));
    //             // let disp = JSON.stringify(result);
    //             // res.write(`<p>${disp}</p>`);
    //         }
    //         res.end();
    //     } catch (error) {
    //         console.error(error);
    //         res.statusCode = 500; // Internal Server Error
    //         res.write('Internal Server Error');
    //         res.end();
    //     }
    // }
    //get only active organizations
    // if (req.url === '/organization/getactiveorgs') {
    //     try {
    //         let result = await api.getActiveOrgs();
    //         let disp = JSON.stringify(result);
    //         res.write(`<p>${disp}</p>`);
    //         res.end();
    //     } catch (error) {
    //         console.error(error);
    //         res.statusCode = 500; // Internal Server Error
    //         res.write('Internal Server Error');
    //         res.end();
    //     }
    // }
    //get organization details by it name
    // if (req.url === '/organization/getorgbyname') {
    //     try {
    //         let result = await api.getOrgByName();
    //         let disp = JSON.stringify(result);
    //         res.write(`<p>${disp}</p>`);
    //         res.end();
    //     } catch (error) {
    //         console.error(error);
    //         res.statusCode = 500; // Internal Server Error
    //         res.write('Internal Server Error');
    //         res.end();
    //     }
    // }
    // //get product  wise lic information of organization
    // if (req.url === '/organization/getOrgProductWiseLicenseInfo') {
    //     try {
    //         let result = await api.getOrgProductWiseLicenseInfo();
    //         let disp = JSON.stringify(result);
    //         res.write(`<p>${disp}</p>`);
    //         res.end();
    //     } catch (error) {
    //         console.error(error);
    //         res.statusCode = 500; // Internal Server Error
    //         res.write('Internal Server Error');
    //         res.end();
    //     }
    // }
    // get org admins for seats increase emails
    // if (req.url === '/organization/getOrgAdminsSeatsIncreaseEmail') {
    //     try {
    //         let result = await api.getOrgAdminsSeatsIncreaseEmail();
    //         let disp = JSON.stringify(result);
    //         res.write(`<p>${disp}</p>`);
    //         res.end();
    //     } catch (error) {
    //         console.error(error);
    //         res.statusCode = 500; // Internal Server Error
    //         res.write('Internal Server Error');
    //         res.end();
    //     }
    //  }
    if (req.url === '/login' && req.method == 'POST') {
        try {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            });
            req.on('end', () => {
                const data = Buffer.concat(body).toString();
                // Move response code inside the 'end' event handler
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(`<p>${data}</p>`);
                res.end();
            });
        }
        catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
}));
exports.server.listen(3000);
