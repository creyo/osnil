import React, { useState, useEffect } from 'react';

function Html({folderName,fileName}) {
  const [htmlContent, setHtmlContent] = useState('');
  const [cssContent, setCssContent] = useState('');

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const htmlResponse = await fetch(`./files/${folderName}/${fileName}`);
        const cssResponse = await fetch(`./files/${folderName}/style.css`);

        if (!htmlResponse.ok || !cssResponse.ok) {
          throw new Error('Failed to fetch HTML or CSS file');
        }

        const htmlText = await htmlResponse.text();
        const cssText = await cssResponse.text();

        setHtmlContent(htmlText);
        setCssContent(cssText);
      } catch (error) {
        console.error('Error fetching HTML or CSS:', error);
      }
    };

    fetchHtml();
  }, [folderName,fileName]);

  return (
    <div>
      {/* Render the fetched HTML content */}
      <style>{cssContent}</style>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default Html;
