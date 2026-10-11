import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { SHARE_IMAGE } from '@/lib/seo';

// Default social share image for every page (statically generated at build time)
export const alt = SHARE_IMAGE.alt;
export const size = { width: SHARE_IMAGE.width, height: SHARE_IMAGE.height };
export const contentType = 'image/png';

export default async function OpengraphImage() {
    const logo = await readFile(join(process.cwd(), 'public/MyGlo3D_4.png'));
    const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px',
                    background: 'linear-gradient(135deg, #FFF3F0 0%, #FFFFFF 55%, #FFE4EC 100%)',
                    color: '#140000',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
                    <img src={logoSrc} width={96} height={95} alt="" />
                    <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: '-2px' }}>MyGlo</div>
                </div>
                <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-1.5px', maxWidth: '900px' }}>
                    The all-in-one beauty booking platform
                </div>
                <div style={{ fontSize: 32, color: '#534B4B', marginTop: '28px', maxWidth: '900px' }}>
                    Discover local hair, makeup and nail artists through their work, and book in one place.
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignSelf: 'flex-start',
                        marginTop: '44px',
                        padding: '12px 24px',
                        borderRadius: '999px',
                        background: '#140000',
                        color: '#FFFFFF',
                        fontSize: 26,
                        fontWeight: 700,
                    }}
                >
                    Coming soon to Australia · myglo.app
                </div>
            </div>
        ),
        size,
    );
}
