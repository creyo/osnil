import React, { useState } from 'react';
import './CardPage.css'; // Assuming you have a separate CSS file for styling
import folderIcon from '../Component/image/folder.png'; // Assuming you have a folder icon image
import fileIcon from '../Component/image/html.png'; // Assuming you have an HTML file icon image
import cssIcon from '../Component/image/css.png'; // Assuming you have a CSS file icon image

function CardPage() {
    const initialFolderStructure = {
        name: 'Root',
        type: 'folder',
        children: [
            {
                name: 'Oyum',
                type: 'folder',
                children: [
                    {
                        name: 'index.html',
                        type: 'file'
                    },
                    {
                        name: 'styles.css',
                        type: 'file'
                    }
                ]
            },
            {
                name: 'Appsala',
                type: 'folder',
                children: [
                    {
                        name: 'index.html',
                        type: 'file'
                    },
                    {
                        name: 'styles.css',
                        type: 'file'
                    }
                ]
            },
            {
                name: 'Jumji',
                type: 'folder',
                children: [
                    {
                        name: 'index.html',
                        type: 'file'
                    },
                    {
                        name: 'styles.css',
                        type: 'file'
                    }
                ]
            }
        ]
    };

    const [currentFolder, setCurrentFolder] = useState(initialFolderStructure);

    const handleFolderClick = (folder) => {
        setCurrentFolder(folder);
    };

    const handleGoBack = () => {
        if (currentFolder.parent) {
            setCurrentFolder(currentFolder.parent);
        }
    };

    const handleFileClick = async (fileName) => {
        try {
            if (fileName.endsWith('.html')) {
                // If the file is an HTML file, open it in a new tab
                const fileURL = `files/${currentFolder.name}/${fileName}`;
                window.open(fileURL, '_blank');
            } else {
                // For other file types, fetch the content
                const response = await fetch(`/files/${currentFolder.name}/${fileName}`);
                const content = await response.text();
                console.log(content); // Do something with the file content
            }
        } catch (error) {
            console.error('Error loading file:', error);
        }
    };
    

    return (
        <div className="cardPage">
            <div className="folderContent">
                <button onClick={handleGoBack} disabled={!currentFolder.parent}>Go Back</button>
                <ul className="folders">
                    {currentFolder.children.map((item, index) => (
                        item.type === 'folder' ? (
                            <li key={index} className="folderContainer" onClick={() => handleFolderClick(item)}>
                                <img src={folderIcon} alt="Folder Icon" className="folderIcon" />
                                <span className="folderName">{item.name}</span>
                            </li>
                        ) : null
                    ))}
                </ul>
                <ul className="files">
                    {currentFolder.children.map((item, index) => (
                        item.type === 'file' ? (
                            <li key={index} className="fileContainer" onClick={() => handleFileClick(item.name)}>
                                {item.name.endsWith('.css') ? (
                                    <img src={cssIcon} alt="CSS File Icon" className="fileIcon" />
                                ) : (
                                    <img src={fileIcon} alt="HTML File Icon" className="fileIcon" />
                                )}
                                <span className="fileName">{item.name}</span>
                            </li>
                        ) : null
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CardPage;
