// Create leaf image component Connor's Page

type LeafImageProps = {
  src: string
  alt: string
}

export function LeafImage({src, alt}: LeafImageProps) {
  return (
    <>
      <div className="flex justify-center">
        <img src={src} alt={alt} className="h-96" />
      </div>
    </>
  )
}

