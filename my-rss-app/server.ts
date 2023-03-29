import { serve } from "https://deno.land/std@0.181.0/http/server.ts";
import {serveFile} from "https://deno.land/std@0.181.0/http/file_server.ts"

const server = serve({ port:8000 })
const port = 8080;

for await (const req of server) {
  console.log(req.url);
  if(req.url === '/') {
    const response = await serveFile(req, 'index.html');
    req.respond(response)
  }
}

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });