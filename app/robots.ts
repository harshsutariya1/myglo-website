import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Private and transactional pages (/waitlist, /welcome) use a noindex robots meta
// tag instead of Disallow, so crawlers can still read that tag.
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
