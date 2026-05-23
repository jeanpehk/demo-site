# Demo site

This is just a demo site I wrote to test out plain html/css/javascript webdev.
The backend is a simple express.js server that just returns the index page, rest of the logic is on the frontend side.

- localhost:3000
    - A basic html/css/js website.
    - srcs in public/index*
- localhost:3000/redo
    - The same site but with heavy js focus, the DOM elements are dynamically created with javascript.
    - srcs in public/redo*

## Build & Run

You will need npm + Node.js (tested on Node v24.15).

```bash
npm install
node src/back.js
```

You can now visit the site at localhost:3000