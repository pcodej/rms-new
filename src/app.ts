import http from 'http'
import * as api from './services/apiOrg';
import { loginHtml } from './views/loginForm';
import { orgAddForm } from './views/organizationAdd';
import url from 'url';
import { type } from 'os';

export const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    let urlArr = req.url?.split("?");
    let reqUrl: string = "";
    if(urlArr){
        reqUrl = urlArr[0];
    }else{
        reqUrl = "/login"
    }
    return {req, res};
    //render login page
    if (reqUrl === '/login' && req.method != 'POST') {
        try {
            res.write(loginHtml);
            res.end();
        } catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //render add organization page
    if (reqUrl === '/create/organization') {
        try {
            res.write(orgAddForm);
            res.end();
        } catch (error) {
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
            const body: Buffer[] = [];
            req.on('data', (chunk: Buffer) => {
                body.push(chunk);
              });
            
              req.on('end', () => {
                const data: string = Buffer.concat(body).toString();
            
                // Move response code inside the 'end' event handler
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(`<p>${data}</p>`);
                res.end();
              });
        } catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    
});

server.listen(3000);
