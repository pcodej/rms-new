import { getActiveOrganizations, getOrgInformation, getOrgProductWiseLicenseInformation, getOrganizationByName, getOrgAdminsForSeatsIncreaseEmail} from "../model/orgApiModel"
export async function getActiveOrgs() {
    try{
        let params = 'id, name, is_active';
        const activOrgs = await getActiveOrganizations(params);
        return activOrgs;
    }catch (error) {
        console.log("Error in getting active orgs - "+ error);
    }
    
}
export async function getOrgInfo() {
    try{
        let orgId = 11;
        const orgInfo = await getOrgInformation(orgId);
        return orgInfo;
    }catch (error) {
        console.log("Error in getting orgs info- "+ error);
    }
    
}

export async function getOrgProductWiseLicenseInfo() {
    try{
        let orgId = 14513;
        let productId = 1;
        const orgProductInfo = await getOrgProductWiseLicenseInformation({orgId, productId});
        return orgProductInfo;
    }catch (error) {
        console.log("Error in getting orgs info- "+ error);
    }
}

export async function getOrgByName() {
    try {
        let orgName = "TestSchool";
        const orgInfo = await getOrganizationByName(orgName);
        return orgInfo;
    } catch (error) {
        console.log("Error in getting orgs info by name- "+ error);
    }
}

export async function getOrgAdminsSeatsIncreaseEmail() {
    try{
        let orgId = 11;
        const orgAdmins = await getOrgAdminsForSeatsIncreaseEmail(orgId);
        return orgAdmins;
    } catch (error) {
        console.log("Error in getting orgs info by name- "+ error);
    }
}
