import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Html from './Html';
import './CardPage.css';
import folderIcon from '../Component/image/folder.png';
import fileIcon from '../Component/image/html.png';
import cssIcon from '../Component/image/css.png';

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
                        name: 'author.html',
                        type: 'file'
                    },
                    {
                        name: 'profile.html',
                        type: 'file'
                    },
                    {
                        name: 'publication.html',
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
    const [selectedFile, setSelectedFile] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (params.folderName) {
            const folder = initialFolderStructure.children.find(folder => folder.name === params.folderName);
            if (folder) {
                setCurrentFolder(folder);
            }
        }
    }, [params.folderName,initialFolderStructure.children]);

    const handleFolderClick = (folder) => {
        setCurrentFolder(folder);
        window.history.pushState(null, '', `/${folder.name}`);
    };

    const handleFileClick = (fileName) => {
        setSelectedFile(fileName); // Set the selected file when a file name is clicked
    };

    return (
        <div className="cardPage">
            <div className="folderContent">
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
                {selectedFile ? null : (
                    <ul className="files">
                        {currentFolder.children.map((item, index) => (
                            item.type === 'file' ? (
                                <li key={index} className="fileContainer" onClick={() => handleFileClick(item.name)}>
                                    {item.name.endsWith('.css') ? (
                                        <img src={cssIcon} alt="CSS File Icon" className="fileIcon" />
                                    ) : (
                                        <>
                                            <img src={fileIcon} alt="HTML File Icon" className="fileIcon" />
                                            <span className="fileName">{item.name}</span>
                                        </>
                                    )}
                                </li>
                            ) : null
                        ))}
                    </ul>
                )}
            </div>
            {selectedFile && <Html folderName={currentFolder.name} fileName={selectedFile} />}
        </div>
    );
}

export default CardPage;
