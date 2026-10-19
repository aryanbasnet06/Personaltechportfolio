import { useState } from "react";
import { Play } from "lucide-react";

export const YouTubeEmbed = ({ id, title, thumb, testid, className = "" }) => {
  const [play, setPlay] = useState(false);
  return (
    <div className={`relative aspect-video w-full overflow-hidden rounded-[20px] bg-black ${className}`} data-testid={testid}>
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          data-testid={`${testid}-iframe`}
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="yt-facade group focus-ring absolute inset-0 h-full w-full" aria-label={`Play video: ${title}`} data-testid={`${testid}-play`}>
          <img src={thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]" />
          <span className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
          <span className="yt-play">
            <Play size={22} fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
};
