import React from 'react';
import 'C:/CodeBoi/64arena/src/style.css';

function Gallery(){
    return(
        <div class="gallery" id="gallery">
        <div class="gallery-body">
           <h1><i class="fa-solid fa-expand"></i> Gallery</h1>
        </div>
        <div class="gallery-media">
           <img src="./images/pexels-alexander-nadrilyanski-7307392.jpg" loading='lazy' />
           <img src="./images/pexels-kampus-production-8941577.jpg" loading='lazy'/>
           <img src="./images/pexels-kampus-production-8941580.jpg" loading='lazy' />
           
           <img src="./images/pexels-ahmad-saeed-12116389.jpg" loading='lazy' />
           <img src="./images/pexels-rdne-stock-project-7188072.jpg" loading='lazy' />
           
           <div class="gallery-text">
              <p>Check More <a href="#">Here</a> ✨💕⚽</p>
           </div>

        </div>
     </div>
    )
}

export default Gallery;