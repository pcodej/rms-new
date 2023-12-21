import * as api from "../services/apiOrg";
import http from "http";
import { loginHtml } from "../views/loginForm";
import { OrgParams } from "../model/common";

export async function rocket(reqUrl: URL) {
  try {
    const urlPath = reqUrl.pathname;

    //route as per url received
    if (urlPath == "/organization/getorganizationinfo") {
      const parameterStr = reqUrl.searchParams;
      const orgid = parameterStr.get("orgid");
      console.log("logged orgid:", orgid);
      let disp: string = "";
      if (typeof orgid === "string") {
        let result = await api.getOrgInfo(parseInt(orgid, 10));
        disp = JSON.stringify(result);
      }
      return disp;
    }

    if (urlPath === "/organization/getactiveorgs") {
      try {
        let params = "id, name, is_active";
        let result = await api.getActiveOrgs(params);
        let disp: string = JSON.stringify(result);
        return disp;
      } catch (error) {
        console.error(error);
      }
    }
    //get product  wise lic information of organization
    if (urlPath === "/organization/getOrgProductWiseLicenseInfo") {
      try {
        const parameterStr = reqUrl.searchParams;
        const orgid = parameterStr.get("orgid");
        const procuctid = parameterStr.get("pid");
        let disp: string = "";
        if (orgid != null && procuctid != null) {
          const orgId = parseInt(orgid, 10);
          const productId = parseInt(procuctid, 10);
          let result = await api.getOrgProductWiseLicenseInfo({
            orgId,
            productId,
          });
          let disp = JSON.stringify(result);
          return disp;
        }
        return disp;
      } catch (error) {
        console.error(error);
      }
    }

    if (urlPath === '/organization/getOrgAdminsSeatsIncreaseEmail') {
      try {
          const parameterStr = reqUrl.searchParams;
          const orgid = parameterStr.get('orgid');
          let disp: string = "";
          if(orgid != null){
            const orgId = parseInt(orgid, 10);
            let result = await api.getOrgAdminsSeatsIncreaseEmail(orgId);
            let disp = JSON.stringify(result);
            return disp;
          }
          return disp;
      } catch (error) {
          console.error(error);
      }
    }

    //get organization details by it name
    if (urlPath === '/organization/getorgbyname') {
      try {
          let disp: string = "";
          const parameterStr = reqUrl.searchParams;
          const orgName = parameterStr.get('orgname');
          if(orgName != null){
            let result = await api.getOrgByName(orgName);
            let disp = JSON.stringify(result);
            return disp;
          }
          return disp;
      } catch (error) {
          console.error(error);
      }
    }

    if (urlPath === '/' || urlPath === '/login') {
      return 'login';
    }
  
  } catch (error) {
    console.error(error);
  }

}
