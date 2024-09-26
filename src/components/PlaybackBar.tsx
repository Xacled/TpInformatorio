import { useRef, useState, useEffect } from "react";

// Definición de las propiedades que acepta el componente
interface AudioPlayerProps {
  audioUrl: string | undefined;
}

// Componente principal de AudioPlayer
export default function AudioPlayer({ audioUrl }: AudioPlayerProps) {
  // Estados para manejar la reproducción, el tiempo actual, la duración y si se está buscando
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Referencia al elemento de audio

  // Maneja el clic en el botón de reproducción/pausa
  function handleClick() {
    setIsPlaying((prev) => {
      const nextPlayingState = !prev;
      if (nextPlayingState) {
        audioRef.current?.play();
      } else {
        audioRef.current?.pause();
      }
      return nextPlayingState;
    });
  }

  // Maneja el clic en el botón de reinicio
  function handleReset() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
    }
  }

  // Efecto para actualizar el tiempo actual y la duración del audio
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const updateCurrentTime = () => {
        if (!isSeeking) {
          setCurrentTime(audio.currentTime);
        }
      };

      const setAudioDuration = () => {
        setDuration(audio.duration);
      };

      audio.addEventListener("timeupdate", updateCurrentTime);
      audio.addEventListener("loadedmetadata", setAudioDuration);

      return () => {
        audio.removeEventListener("timeupdate", updateCurrentTime);
        audio.removeEventListener("loadedmetadata", setAudioDuration);
      };
    }
  }, [isSeeking]);

  // Maneja el cambio en la barra de búsqueda
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCurrentTime(value);
  };

  // Maneja el final de la acción de búsqueda
  const handleSeekComplete = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
    }
    setIsSeeking(false);
  };

  // Efecto para cargar y reproducir el nuevo audio cuando cambia la URL
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = audioUrl || "";
      audio.load();

      if (audioUrl) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    }
    setCurrentTime(0);
    setDuration(0);
  }, [audioUrl]);

  // Maneja el cambio de volumen
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = Number(e.target.value);
    }
  };

  return (
    <>
      <div className="playback-bar" style={{width:"100%",left:0}}>
        <div className="playback-controls">
          <button onClick={handleReset}>🔄</button>
          <button onClick={handleClick}>{isPlaying ? "⏸️" : "▶️"}</button>
          <audio ref={audioRef} />
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "30%" }}>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            onMouseDown={() => setIsSeeking(true)}
            onMouseUp={handleSeekComplete}
            style={{ flex: 1, margin: "0 10px" }}
          />
          <span>
            {new Date((duration - currentTime) * 1000)
              .toISOString()
              .substr(14, 5)}
          </span>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={handleVolumeChange}
            style={{ width: "100px", marginLeft: "10px" }}
          />
        </div>
      </div>
    </>
  );
}
