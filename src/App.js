import { useState, useEffect } from "react";
import './App.css';

function App() {
    const [albumId, setAlbumId] = useState(0);
    const [albums, setAlbums] = useState([]);

    const onClick = (albumId) => (e) => {
        setAlbumId(albumId);
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((data) => {
                setAlbums(data);
            });
    });

    return (
        <div className="gallery">
            <aside className="albums">
                <h4 className="albums__title">Albums</h4>
                <ul className="albums-list">
                    {albums.map(({ id, title }) => {
                        let classes = "albums-list__item";

                        if (albumId === id) {
                            classes += " albums-list__item--active";
                        }

                        return (
                            <li key={id} className={classes} onClick={onClick(id)}>{title}</li>
                        );
                    })}
                </ul>
            </aside>
            <main className="photos" />
        </div>
    );
}

export default App;
