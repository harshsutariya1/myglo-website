import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MyGlo - Beauty Booking Platform',
        short_name: 'MyGlo',
        description: 'Discover local talent, book appointments instantly, and build your community.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/MyGlo3D_4.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
