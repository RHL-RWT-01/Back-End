import React, { useState, useEffect, useRef, useCallback } from 'react';

const Tasks = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchImages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => { 
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className="gallery">
      <h1>Image Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => {
          if (index === images.length - 1) {
            return (
              <div key={image.id} ref={lastElementRef} className="image-card">
                <img src={image.download_url} alt={image.author} 
                style={{width: "500px", height: "400px"}}
                />
                <p>By {image.author}</p>
              </div>
            );
          } else {
            return (
              <div key={image.id} className="image-card">
                <h2>{image.id}</h2>
                <img src={image.download_url} alt={image.author}
                style={{width: "500px", height: "400px"}}
                />
                <p>By {image.author}</p>
              </div>
            );
          }
        })}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Tasks;
