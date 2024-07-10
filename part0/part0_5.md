# Part 0.5 - Single page app diagram

Diagram depicting the situation where the user goes to the single-page app version of the notes app at <https://studies.cs.helsinki.fi/exampleapp/spa>. This sequence diagram was used using `Mermaid`-syntax.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: SPA HTML Document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file
    deactivate server
    Note left of server: The browser executes the JS code which fetches the JSON data and adds the HTML elements

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser:  [{"content":"Hello Spa world!", "date": "2024-7-10" }, ... ]
    deactivate server

    Note right of browser: The browser executes the event handler that renders the notes
```
