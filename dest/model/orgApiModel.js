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
exports.getOrganizationByName = exports.getOrgProductWiseLicenseInformation = exports.getOrgInformation = exports.getActiveOrganizations = void 0;
const executeQuery_1 = require("../config/executeQuery");
function getActiveOrganizations(param) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `select ${param} from organization where is_active = 1`;
            const [activeOrg, fields] = yield (0, executeQuery_1.executeQuery)(sql);
            return activeOrg;
        }
        catch (error) {
            console.log("Error in active org fetch - " + error);
        }
    });
}
exports.getActiveOrganizations = getActiveOrganizations;
function getOrgInformation(orgId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `select * from organization o left join organization_license ol on ol.organization_id = o.id where o.id = ${orgId}`;
            const [orgInfo, fields] = yield (0, executeQuery_1.executeQuery)(sql);
            return orgInfo;
        }
        catch (error) {
            console.log("Error in org info fetch - " + error);
        }
    });
}
exports.getOrgInformation = getOrgInformation;
function getOrgProductWiseLicenseInformation({ orgId, productId }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `select * from organization_license ol where ol.organization_id = ${orgId} and ol.product_id = ${productId}`;
            const [orgProductInfo, fields] = yield (0, executeQuery_1.executeQuery)(sql);
            return orgProductInfo;
        }
        catch (error) {
            console.log("Error in org procuct fetch - " + error);
        }
    });
}
exports.getOrgProductWiseLicenseInformation = getOrgProductWiseLicenseInformation;
function getOrganizationByName(orgName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let sql = `select * from organization where name = '${orgName}'`;
            const [orgProductInfo, fields] = yield (0, executeQuery_1.executeQuery)(sql);
            return orgProductInfo;
        }
        catch (error) {
            console.log("Error in org detail by name - " + error);
        }
    });
}
exports.getOrganizationByName = getOrganizationByName;
