import React from 'react';
import ImageGallery from '../components/ImageGallery';

const Gallery: React.FC = () => {
    const travel_images = [
        {
            src: '/gallery_images/world_tour/madrid_1.jpg',
            alt: 'Madrid notes',
        },
        {
            src: '/gallery_images/world_tour/budapest_1.jpg',
            alt: 'Budapest sunset',
        },
        {
            src: '/gallery_images/world_tour/island_1.jpg',
            alt: 'Diamond beach sunset',
        },
        {
            src: '/gallery_images/world_tour/island_2.jpg',
            alt: 'Ice and snow Iceland',
        },
        {
            src: '/gallery_images/world_tour/island_3.jpg',
            alt: 'Oil platform ocean',
        },
        {
            src: '/gallery_images/world_tour/island_4.jpg',
            alt: 'Faroe Islands',
        },
        {
            src: '/gallery_images/world_tour/island_5.jpg',
            alt: 'Ship harbor Iceland',
        },
        {
            src: '/gallery_images/world_tour/island_6.jpg',
            alt: 'Ice skating Iceland',
        },
        {
            src: '/gallery_images/world_tour/nyc_1.jpg',
            alt: 'Statue of liberty',
        },
        {
            src: '/gallery_images/world_tour/nyc_2.jpg',
            alt: 'Brooklyn bridge',
        },
        {
            src: '/gallery_images/world_tour/nyc_3.jpg',
            alt: 'Sunset NYC',
        },
        {
            src: '/gallery_images/world_tour/nyc_4.jpg',
            alt: 'NYC',
        },
        {
            src: '/gallery_images/world_tour/vietnam_1.jpg',
            alt: 'Coffee farm Vietnam',
        },
        {
            src: '/gallery_images/world_tour/vietnam_2.jpg',
            alt: 'Rice field Vietnam',
        },
        {
            src: '/gallery_images/world_tour/vietnam_3.jpg',
            alt: 'Temple Vietnam',
        },
    ];
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
        <h3>Some highlights from traveling around the world 2024/2025</h3>
        <ImageGallery images={travel_images} />
        <br/>
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
