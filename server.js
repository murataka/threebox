'use strict';
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
const express = require('express');
var baseDirectory = __dirname;
var port = process.env.PORT || 1337;
var counter = 0;


const options = {
  dotfiles: 'ignore',
  etag: false,
  // extensions: ['htm', 'html'],
  index: ["index.html"]
  // maxAge: '1d',
  // redirect: false
  // ,setHeaders: function (res, path, stat) {
  //   res.set('x-timestamp', Date.now())
  // }
}

let  app = express();

// let app=http.createServer(function (request, response) {
//     try {
//         var requestUrl = url.parse(request.url);
//         // need to use path.normalize so people can't access directories underneath baseDirectory
//         var fsPath = baseDirectory + path.normalize(requestUrl.pathname);
//
//         var ext = path.extname(fsPath)
//         var validExtensions = {
//             ".html": "text/html",
//             ".js": "application/javascript",
//             ".json": "application/json",
//             ".geojson": "application/json",
//             ".bin": "application/octet-stream",
//             ".css": "text/css",
//             ".txt": "text/plain",
//             ".bmp": "image/bmp",
//             ".jpg": "image/jpeg",
//             ".gif": "image/gif",
//             ".png": "image/png",
//             ".ico": "image/x-icon",
//             ".dae": "application/vnd.oipf.dae.svg+xml",
//             ".pbf": "application/octet-stream",
//             ".mtl": "model/mtl",
//             ".obj": "model/obj",
//             ".glb": "model/gltf-binary",
//             ".gltf": "model/gltf+json",
//             ".fbx": "application/octet-stream",
//             ".ttf": "application/octet-stream",
//             ".woff": "font/woff",
//             ".woff2": "font/woff2",
//
//         };
//
//         var isValidExt = validExtensions[ext];
//
//         var fileStream = fs.createReadStream(fsPath);
//         fileStream.pipe(response);
//         fileStream.on('open', function () {
//             response.setHeader("Content-Type", validExtensions[ext]);
//             response.writeHead(200);
//         });
//         fileStream.on('error', function (e) {
//             response.writeHead(404);    // assume the file doesn't exist
//             response.end();
//         });
//     } catch (e) {
//         response.writeHead(500);
//         response.end();    // end the response so browsers don't hang
//         console.log(e.stack);
//     }
//
// });

// app.use('/',function(req,res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.static('public', options));
app.use('/dist',express.static('dist', options));

app.listen(port);
