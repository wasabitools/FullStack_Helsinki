# Part 0.6 - New note in Single page app diagram

Diagram  depicting the situation where the user creates a new note using the single-page version of the app. This sequence diagram was used using `Mermaid`-syntax.

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: user fills form with new note "Hello Post Spa World!" and clicks the Save button
    browser->>server: POST <https://studies.cs.helsinki.fi/exampleapp/new_note_spa>
    activate server
    Note left of server:Responds with 201 created
    Note left of server: The data of the content and date are sent to the server as JSON format
    deactivate server

    Note over browser: The browser does not reload the whole page as the normal form behaviour for a GET is prevented
```
