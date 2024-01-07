import React, { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './App.css';

const MarkdownEditor: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(e.target.value)
    }

// make the text safe [to be inputted to where it's going]
    const createSanitizedOutput = () => {
        const rawMarkup = marked(markdown)
        const sanitizedMarkup = DOMPurify.sanitize(rawMarkup)
        return { __html: sanitizedMarkup }
    }

    return (
        <div className='markdown-editor-container'>
            <h1 className='editor-title'>Markdown Previewer</h1>
            <textarea 
            className='editor-input' 
        // store what the user types into state:
            value={markdown}
            onChange={handleInputChange}
            placeholder='Enter Markdown here...'>

            </textarea>

        </div>
    )
}

