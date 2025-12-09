import { ImageResponse } from 'next/og'

interface OGImageProps {
  title: string
  description?: string
  coverImageUrl?: string
  palette?: {
    darkVibrant?: {
      background?: string
    }
    darkMuted?: {
      background?: string
    }
  }
}

/**
 * Render an OG image with cover image + dark overlay style
 * Uses image palette for brand colors when available
 */
export async function renderOGImage({
  title,
  description,
  coverImageUrl,
  palette,
}: OGImageProps) {
  // Extract background color from palette, fallback to dark gray
  const bgColor = 
    palette?.darkVibrant?.background || 
    palette?.darkMuted?.background || 
    '#1a1a1a'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: bgColor,
        }}
      >
        {/* Cover Image */}
        {coverImageUrl && (
          <img
            src={coverImageUrl}
            alt=""
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
        
        {/* Dark Overlay Gradient */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '80px',
            color: 'white',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              lineHeight: 1.1,
              margin: 0,
              marginBottom: '24px',
              maxWidth: '900px',
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontSize: '32px',
                lineHeight: 1.4,
                margin: 0,
                maxWidth: '800px',
                opacity: 0.9,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

