import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Only indexable, canonical URLs belong here. lastModified is set only where the
// date is actually known; a build timestamp would misreport every page as changed.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${SITE_URL}/app-showcase`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/privacy`,
            lastModified: new Date('2026-10-11'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/terms`,
            lastModified: new Date('2026-10-11'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
