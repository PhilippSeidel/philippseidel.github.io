import React from 'react';
import ImageGallery from '../components/ImageGallery';

const Gallery: React.FC = () => {
    const bw_images = [
        {
            src: '/gallery_images/black_and_white/bw1.jpeg',
            alt: 'Beer cuddles',
        },
        {
            src: '/gallery_images/black_and_white/bw2.jpeg',
            alt: 'Nose boy',
        },
        {
            src: '/gallery_images/black_and_white/bw3.jpeg',
            alt: 'Stairs',
        },
        {
            src: '/gallery_images/black_and_white/bw4.jpeg',
            alt: 'Cigarette',
        },
        ];
    const kg_images = [
        {
            src: '/gallery_images/kodak_gold/kg1.jpg',
            alt: 'Gulschprogrammiernacht1',
        },
        {
            src: '/gallery_images/kodak_gold/kg2.jpg',
            alt: 'Gulschprogrammiernacht1',
        },
        {
            src: '/gallery_images/kodak_gold/kg3.jpg',
            alt: 'French Alps',
        },
        {
            src: '/gallery_images/kodak_gold/kg4.jpg',
            alt: 'Garden',
        },
        ];
    const ksm_images = [
        {
            src: '/gallery_images/kodak_super_max/ksm1.jpg',
            alt: 'Be Gay do Crime',
        },
        {
            src: '/gallery_images/kodak_super_max/ksm2.jpg',
            alt: 'Warsaw Uni',
        },
        {
            src: '/gallery_images/kodak_super_max/ksm3.jpg',
            alt: 'Gdansk1',
        },
        {
            src: '/gallery_images/kodak_super_max/ksm4.jpg',
            alt: 'Gdansk2',
        },
        {
            src: '/gallery_images/kodak_super_max/ksm5.jpg',
            alt: 'Gdansk3',
        },
        ];
    return (
        <section>
        <h1><i className="bi bi-camera"></i> Now look at this!</h1>
        <h3>Black and White Analogs, self-developed 2024</h3>
        <ImageGallery images={bw_images} />
        <br/>   
        <h3>Kodak Gold 2024</h3>
        <ImageGallery images={kg_images} />
        <br/>   
        <h3>Kodak Super Max 2024</h3>
        <ImageGallery images={ksm_images} />
        </section>
    );
};

export default Gallery;
