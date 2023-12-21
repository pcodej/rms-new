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
Object.defineProperty(exports, "__esModule", { value: true });
exports.rocket = void 0;
const api = __importStar(require("../services/apiOrg"));
function rocket(reqUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const urlPath = reqUrl.pathname;
            //route as per url received
            if (urlPath == "/organization/getorganizationinfo") {
                const parameterStr = reqUrl.searchParams;
                const orgid = parameterStr.get("orgid");
                console.log("logged orgid:", orgid);
                let disp = "";
                if (typeof orgid === "string") {
                    let result = yield api.getOrgInfo(parseInt(orgid, 10));
                    disp = JSON.stringify(result);
                }
                return disp;
            }
            if (urlPath === "/organization/getactiveorgs") {
                try {
                    let params = "id, name, is_active";
                    let result = yield api.getActiveOrgs(params);
                    let disp = JSON.stringify(result);
                    return disp;
                }
                catch (error) {
                    console.error(error);
                }
            }
            //get product  wise lic information of organization
            if (urlPath === "/organization/getOrgProductWiseLicenseInfo") {
                try {
                    const parameterStr = reqUrl.searchParams;
                    const orgid = parameterStr.get("orgid");
                    const procuctid = parameterStr.get("pid");
                    let disp = "";
                    if (orgid != null && procuctid != null) {
                        const orgId = parseInt(orgid, 10);
                        const productId = parseInt(procuctid, 10);
                        let result = yield api.getOrgProductWiseLicenseInfo({
                            orgId,
                            productId,
                        });
                        let disp = JSON.stringify(result);
                        return disp;
                    }
                    return disp;
                }
                catch (error) {
                    console.error(error);
                }
            }
            if (urlPath === '/organization/getOrgAdminsSeatsIncreaseEmail') {
                try {
                    const parameterStr = reqUrl.searchParams;
                    const orgid = parameterStr.get('orgid');
                    let disp = "";
                    if (orgid != null) {
                        const orgId = parseInt(orgid, 10);
                        let result = yield api.getOrgAdminsSeatsIncreaseEmail(orgId);
                        let disp = JSON.stringify(result);
                        return disp;
                    }
                    return disp;
                }
                catch (error) {
                    console.error(error);
                }
            }
            //get organization details by it name
            if (urlPath === '/organization/getorgbyname') {
                try {
                    let disp = "";
                    const parameterStr = reqUrl.searchParams;
                    const orgName = parameterStr.get('orgname');
                    if (orgName != null) {
                        let result = yield api.getOrgByName(orgName);
                        let disp = JSON.stringify(result);
                        return disp;
                    }
                    return disp;
                }
                catch (error) {
                    console.error(error);
                }
            }
            if (urlPath === '/' || urlPath === '/login') {
                return 'login';
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.rocket = rocket;
