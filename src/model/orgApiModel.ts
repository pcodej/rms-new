import { executeQuery } from "../config/executeQuery";
import { OrgParams } from "./common";

export async function getActiveOrganizations(param: string) {
    try {
        let sql = `select ${param} from organization where is_active = 1`;
        const [activeOrg, fields] = await executeQuery(sql);
        return activeOrg;
    } catch (error) {
        console.log("Error in active org fetch - "+ error);
    }
}

export async function getOrgInformation(orgId: number) {
    try {
        let sql = `select * from organization o left join organization_license ol on ol.organization_id = o.id where o.id = ${orgId}`;        
        const [orgInfo, fields] = await executeQuery(sql);
        return orgInfo;
    } catch (error) {
        console.log("Error in org info fetch - "+ error);
    }
}

export async function getOrgProductWiseLicenseInformation({orgId, productId}: OrgParams) {
    try{
        let sql = `select * from organization_license ol where ol.organization_id = ${orgId} and ol.product_id = ${productId}`;        
        const [orgProductInfo, fields] = await executeQuery(sql);
        return orgProductInfo;
    }catch (error) {
        console.log("Error in org procuct fetch - "+ error);
    }
}


export async function getOrganizationByName(orgName:string) {
    try {
        let sql = `select * from organization where name = '${orgName}'`;        
        const [orgProductInfo, fields] = await executeQuery(sql);
        return orgProductInfo;
    } catch (error) {
        console.log("Error in org detail by name - "+ error);
    }
}

export async function getOrgAdminsForSeatsIncreaseEmail(orgId:number) {
    try{
        let sql = `select * from user u left join user_security_profile usp on u.id=usp.user_id where u.is_active = 1 and usp.security_profile_id = 3 and u.organization_id = ${orgId}`;        
        const [orgAdmins, fields] = await executeQuery(sql);
        return orgAdmins;
    } catch (error) {
        console.log("Error in org detail by name - "+ error);
    }
}