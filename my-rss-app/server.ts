import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const port = 8080;

for await (const req of server) {
  console.log(req.url);
  if(req.url === '/') {
    const response = await serveFile(req, 'index.html');
    req.respond(response)
  }
}