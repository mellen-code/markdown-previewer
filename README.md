# Markdown Previewer
This tool allows the user to enter plain text in a box with Markdown notation, and see an immediate live preview of the result to the right.

This project was built with Vite, React, TypeScript, and CSS. It uses the Marked and DOMPurify packages to process the Markdown and sanitize it again using Cross-Site Scripting (XSS).



Markdown Guide for a quick overview of all the Markdown syntax elements:
https://markdownguide.offshoot.io/cheat-sheet/



From MayanWolfe's Markdown Live Preview: https://github.com/Mayanwolfe/Markdown_Live_Preview/tree/main

### Next version steps
TypeScript has flagged the rawMarkup argument passed into sanitizedMarkup (App.tsx, line 30). Was able to remove the error by making createSanitizedOutput an async function. However, then the function is flagged when passed into dangerouslySetInnerHTML.

Kept createSanitizedOutput as a synchronous function for now, because the program works as is, but want to figure out how to remove the error and have program run successfully.