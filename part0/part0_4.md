# Part 0.4 - New Note Diagram

Diagram  depicting a situation where the user creates a new note on the page <https://studies.cs.helsinki.fi/exampleapp/notes> by writing something into the text field and clicking the Save button. This sequence diagram was used using `Mermaid`-syntax.

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: user fills form with new note "Hello World!" and clicks the Save button
    browser->>server: POST <https://studies.cs.helsinki.fi/exampleapp/new_note>
    activate server
    Note left of server:Responds with 302 redirect
    deactivate server
 
    browser->>server: GET <https://studies.cs.helsinki.fi/exampleapp/notes>
    activate server
    server-->>browser: Notes HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "Hello World!", "date": "2024-7-10" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```
