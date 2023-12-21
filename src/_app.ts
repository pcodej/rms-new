import http from 'http';
import * as api from './services/apiOrg';
import { rocket } from './routes/routes';
import { loginHtml } from './views/loginForm';

export const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    try {
        const parsedUrl = new URL(`http://localhost:3000${req.url}`);
        const reqUrl = parsedUrl.pathname;
        
        let result = await rocket(parsedUrl);
        console.log(result);
        if(typeof result === "string"){
            if(result == 'login'){
                res.write(loginHtml);
            }
        }
        res.end(result); // Send the result as the response
    } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
