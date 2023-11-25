import { getActiveOrganizations, getOrgInformation, getOrgProductWiseLicenseInformation, getOrganizationByName} from "../model/orgApiModel"
async function getActiveOrgs() {
    try{
        let params = 'id, name, is_active';
        const activOrgs = await getActiveOrganizations(params);
        console.log(activOrgs);
    }catch (error) {
        console.log("Error in getting active orgs - "+ error);
    }
    
}
async function getOrgInfo() {
    try{
        let orgId = 11;
        const orgInfo = await getOrgInformation(orgId);
        console.log(orgInfo);
    }catch (error) {
        console.log("Error in getting orgs info- "+ error);
    }
    
}

async function getOrgProductWiseLicenseInfo() {
    try{
        let orgId = 14513;
        let productId = 1;
        const orgProductInfo = await getOrgProductWiseLicenseInformation({orgId, productId});
        console.log(orgProductInfo);
    }catch (error) {
        console.log("Error in getting orgs info- "+ error);
    }
}

async function getOrgByName() {
    try {
        let orgName = "TestSchool";
        const orgInfo = await getOrganizationByName(orgName);
        console.log(orgInfo);
    } catch (error) {
        console.log("Error in getting orgs info by name- "+ error);
    }
}
// getActiveOrgs();
// getOrgInfo();
// getOrgProductWiseLicenseInfo();
getOrgByName();