import http from 'http'
import * as api from './services/apiOrg';
import { loginHtml } from './views/loginForm';
import { orgAddForm } from './views/organizationAdd';

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //render login page
    if (req.url === '/login') {
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
    if (req.url === '/create/organization') {
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
    if (req.url === '/organization/getorganizationinfo') {
        try {
            let result = await api.getOrgInfo();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        } catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //get only active organizations
    if (req.url === '/organization/getactiveorgs') {
        try {
            let result = await api.getActiveOrgs();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        } catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //get organization details by it name
    if (req.url === '/organization/getorgbyname') {
        try {
            let result = await api.getOrgByName();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        } catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    //get product  wise lic information of organization
    if (req.url === '/organization/getOrgProductWiseLicenseInfo') {
        try {
            let result = await api.getOrgProductWiseLicenseInfo();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        } catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    // get org admins for seats increase emails
    if (req.url === '/organization/getOrgAdminsSeatsIncreaseEmail') {
        try {
            let result = await api.getOrgAdminsSeatsIncreaseEmail();
            let disp = JSON.stringify(result);
            res.write(`<p>${disp}</p>`);
            res.end();
        } catch (error) {
            console.error(error);
            res.statusCode = 500; // Internal Server Error
            res.write('Internal Server Error');
            res.end();
        }
    }
    
});

server.listen(3000);
