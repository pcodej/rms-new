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
const orgApiModel_1 = require("../model/orgApiModel");
function getActiveOrgs() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let params = 'id, name, is_active';
            const activOrgs = yield (0, orgApiModel_1.getActiveOrganizations)(params);
            console.log(activOrgs);
        }
        catch (error) {
            console.log("Error in getting active orgs - " + error);
        }
    });
}
function getOrgInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let orgId = 11;
            const orgInfo = yield (0, orgApiModel_1.getOrgInformation)(orgId);
            console.log(orgInfo);
        }
        catch (error) {
            console.log("Error in getting orgs info- " + error);
        }
    });
}
function getOrgProductWiseLicenseInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let orgId = 14513;
            let productId = 1;
            const orgProductInfo = yield (0, orgApiModel_1.getOrgProductWiseLicenseInformation)({ orgId, productId });
            console.log(orgProductInfo);
        }
        catch (error) {
            console.log("Error in getting orgs info- " + error);
        }
    });
}
function getOrgByName() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let orgName = "TestSchool";
            const orgInfo = yield (0, orgApiModel_1.getOrganizationByName)(orgName);
            console.log(orgInfo);
        }
        catch (error) {
            console.log("Error in getting orgs info by name- " + error);
        }
    });
}
// getActiveOrgs();
// getOrgInfo();
// getOrgProductWiseLicenseInfo();
getOrgByName();
