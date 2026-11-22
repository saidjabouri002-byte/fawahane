import { Play, Sparkles } from 'lucide-react';
import { partnershipVideo as video } from '@/lib/video';

export default function HeroVideo() {
  return (
    <figure className="hero-vsl" aria-label="Présentation vidéo du partenariat FAWAHAN">
      <div className="vsl-frame">
        {video.src ? (
          video.type === 'embed' ? (
            <iframe src={video.src} title="Découvrez le partenariat FAWAHAN en vidéo" allow="fullscreen; picture-in-picture; encrypted-media" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          ) : (
            <video controls playsInline preload="none" poster={video.poster} aria-label="Découvrez le partenariat FAWAHAN en vidéo">
              <source src={video.src} type="video/mp4" />
              {video.captions && <track kind="captions" src={video.captions} srcLang="fr" label="Français" default />}
              Votre navigateur ne prend pas en charge cette vidéo. <a href={video.src}>Ouvrir la vidéo</a>
            </video>
          )
        ) : (
          <div className="vsl-placeholder">
            <span className="vsl-brand"><Sparkles size={14} aria-hidden="true" /> FAWAHAN RETAIL PARTNER</span>
            <span className="vsl-play" aria-hidden="true"><Play size={29} fill="currentColor" /></span>
            <strong>Une nouvelle perspective<br />pour votre boutique.</strong>
            <span className="vsl-status">Vidéo de présentation à venir</span>
          </div>
        )}
      </div>
      <figcaption>Découvrez le partenariat FAWAHAN en vidéo.</figcaption>
    </figure>
  );
}
