import { OrgParams } from "../model/common";
import { getActiveOrganizations, getOrgInformation, getOrgProductWiseLicenseInformation, getOrganizationByName, getOrgAdminsForSeatsIncreaseEmail} from "../model/orgApiModel"
export async function getActiveOrgs(params: string) {
    try{
        const activOrgs = await getActiveOrganizations(params);
        return activOrgs;
    }catch (error) {
        console.log("Error in getting active orgs - "+ error);
    }
    
}
export async function getOrgInfo(orgId: number) {
    try{
        const orgInfo = await getOrgInformation(orgId);
        return orgInfo;
    }catch (error) {
        console.log("Error in getting orgs info- "+ error);
    }
    
}

export async function getOrgProductWiseLicenseInfo({orgId, productId}: OrgParams) {
    try{
        const orgProductInfo = await getOrgProductWiseLicenseInformation({orgId, productId});
        return orgProductInfo;
    }catch (error) {
        console.log("Error in getting orgs info- "+ error);
    }
}

export async function getOrgByName(orgName: string) {
    try {
        const orgInfo = await getOrganizationByName(orgName);
        return orgInfo;
    } catch (error) {
        console.log("Error in getting orgs info by name- "+ error);
    }
}

export async function getOrgAdminsSeatsIncreaseEmail(orgId: number) {
    try{
        const orgAdmins = await getOrgAdminsForSeatsIncreaseEmail(orgId);
        return orgAdmins;
    } catch (error) {
        console.log("Error in getting orgs info by name- "+ error);
    }
}
