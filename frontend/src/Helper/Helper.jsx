export const markdownComponent = {
    strong: ({ node, ...props }) => (
        <strong style={{ color: 'whitesmoke' }} {...props} />
    ),
    p: ({ node, ...props }) => (
        <p style={{ color: 'whitesmoke' }} {...props} />
    ),
    h3: ({ node, ...props }) => (
        <h3 style={{ color: 'white' }} {...props} />
    ),
    u: ({ node, ...props }) => (
        <u style={{ textDecoration: 'underline', fontStyle: 'italic', color: 'gold' }} {...props} />
    ),
    em: ({ node, ...props }) => (
        <em style={{ fontStyle: 'italic', color: 'lightgray' }} {...props} />
    ),
    code: ({ inline, className, children, ...props }) => {
        if (inline) {
            return (
                <code style={{ backgroundColor: '#333', padding: '2px 4px', borderRadius: '4px', color: 'orange' }} {...props}>
                    {children}
                </code>
            );
        }
        return (
            <pre style={{ backgroundColor: '#222', padding: '10px', borderRadius: '6px', color: 'orange', overflowX: 'auto' }}>
                <code className={className} {...props}>
                    {children}
                </code>
            </pre>
        );
    },
    ol: ({ node, ...props }) => (
        <ol style={{ color: 'whitesmoke', paddingLeft: '20px', marginBottom: '1em' }} {...props} />
    ),
    ul: ({ node, ...props }) => (
        <ul style={{ color: 'whitesmoke', paddingLeft: '20px', marginBottom: '1em', listStyleType: 'circle' }} {...props} />
    ),
    a: ({ node, ...props }) => (
        <a style={{ color: 'deepskyblue', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer" {...props} />
    ),
}