import { MetadataRoute } from 'next';
import { SITE_DESCRIPTION } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MyGlo - Beauty Booking Platform',
        short_name: 'MyGlo',
        description: SITE_DESCRIPTION,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/MyGlo3D_4.png',
                sizes: '503x496',
                type: 'image/png',
            },
        ],
    };
}
