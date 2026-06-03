import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const alt = `${siteConfig.name} — Colorado Home Staging & Interior Design`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Brand Open Graph image, generated at build time. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2d3a3b',
          color: '#f7f6ef',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div
          style={{
            fontSize: 96,
            letterSpacing: 18,
            color: '#f7f6ef',
            textTransform: 'uppercase',
          }}
        >
          Blooming
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 30,
            letterSpacing: 12,
            color: '#a47c2d',
            textTransform: 'uppercase',
          }}
        >
          Staging and Design
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 30,
            color: 'rgba(247,246,239,0.85)',
          }}
        >
          Colorado Home Staging &amp; Interior Design
        </div>
      </div>
    ),
    { ...size },
  );
}
