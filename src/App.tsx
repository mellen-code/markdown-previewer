import React, { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './App.css';

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>('')

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value)
    }

    const exportToFile = () => {
// blob = binary large object. Creating new blob object containing markdown data
        const blob = new Blob([markdown], {type: 'text/markdown'});
// turn button into a link and then create a new element - anchor tag- attached to button:
        const link = document.createElement('a');
// set the target of that link to the file where putting stuff in, and pass in the blob:
        link.download = 'markdown-export.md';
        link.href = window.URL.createObjectURL(blob);
// immediately click the link and then remove it:
        link.click();
        link.remove();
    }

// If change to Async function, due to TS marking 'rawMarkup' in sanitizedMarkup as an error, program does not work.
// make the text safe [to be inputted to where it's going]
    const createSanitizedOutput = () => {
        const rawMarkup = marked(markdown);
        const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
        return { __html: sanitizedMarkup };
    }

    return (
        <div className='markdown-editor-container'>
            <h1 className='editor-title'>Markdown Previewer</h1>
            <textarea 
            className='editor-input' 
// store what the user types into state:
            value={markdown}
            onChange={handleInputChange}
            placeholder='Enter Markdown here...'
            />

            <div className='markdown-preview'
// sets HTML content from markdown. Calling function to sanitize immediately:
            dangerouslySetInnerHTML={createSanitizedOutput()}>
            </div>

            <button onClick={exportToFile} className='export-button'>Export to Markdown</button>
        </div>
    )
}

export default MarkdownEditor;

