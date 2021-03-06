import React, { useContext } from 'react'
import { Context } from "./context";
export default function Folders(props) {
    let key = 0;
    const foldersRaw = props.folders;
    const { setCurrentFolder } = useContext(Context);
    let folders = foldersRaw.map(item => <div key={key++} onClick={() => setCurrentFolder(item)}>{item}</div>)
    return (
        <div>
            {folders}
        </div>
    )
}
