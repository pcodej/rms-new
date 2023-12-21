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
exports.getOrgAdminsSeatsIncreaseEmail = exports.getOrgByName = exports.getOrgProductWiseLicenseInfo = exports.getOrgInfo = exports.getActiveOrgs = void 0;
const orgApiModel_1 = require("../model/orgApiModel");
function getActiveOrgs(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const activOrgs = yield (0, orgApiModel_1.getActiveOrganizations)(params);
            return activOrgs;
        }
        catch (error) {
            console.log("Error in getting active orgs - " + error);
        }
    });
}
exports.getActiveOrgs = getActiveOrgs;
function getOrgInfo(orgId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orgInfo = yield (0, orgApiModel_1.getOrgInformation)(orgId);
            return orgInfo;
        }
        catch (error) {
            console.log("Error in getting orgs info- " + error);
        }
    });
}
exports.getOrgInfo = getOrgInfo;
function getOrgProductWiseLicenseInfo({ orgId, productId }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orgProductInfo = yield (0, orgApiModel_1.getOrgProductWiseLicenseInformation)({ orgId, productId });
            return orgProductInfo;
        }
        catch (error) {
            console.log("Error in getting orgs info- " + error);
        }
    });
}
exports.getOrgProductWiseLicenseInfo = getOrgProductWiseLicenseInfo;
function getOrgByName(orgName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orgInfo = yield (0, orgApiModel_1.getOrganizationByName)(orgName);
            return orgInfo;
        }
        catch (error) {
            console.log("Error in getting orgs info by name- " + error);
        }
    });
}
exports.getOrgByName = getOrgByName;
function getOrgAdminsSeatsIncreaseEmail(orgId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orgAdmins = yield (0, orgApiModel_1.getOrgAdminsForSeatsIncreaseEmail)(orgId);
            return orgAdmins;
        }
        catch (error) {
            console.log("Error in getting orgs info by name- " + error);
        }
    });
}
exports.getOrgAdminsSeatsIncreaseEmail = getOrgAdminsSeatsIncreaseEmail;
