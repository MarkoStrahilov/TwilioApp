import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ReqeustsCard = ({ children }) => {

    

    return (
        <div className="mockup-code">
            <pre data-prefix="$">
                <code>{children}</code>
            </pre>
        </div>
    )
}

export default ReqeustsCard