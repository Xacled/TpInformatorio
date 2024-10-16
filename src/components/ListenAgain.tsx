import { useEffect, useState } from "react";
import AudioPlayer from "./PlaybackBar";
import { CSSProperties } from "react";

export interface AudioClip {
    title: string;
    description: string;
    urls: {
        high_mp3: string;
    };
    channel: {
        urls: {
            logo_image: {
                original: string;
            };
        };
    };
}

interface ListenAgainProps {
    limit?: number;
}

export function ListenAgain({ limit = 5 }: ListenAgainProps) {
    const [audioClips, setAudioClips] = useState<AudioClip[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedClip, setSelectedClip] = useState<{
        url: string;
        title: string;
    } | null>(null);
    const [isPlayerVisible, setPlayerVisible] = useState(false);

    useEffect(() => {
        const fetchAudioClips = async () => {
            try {
                const response = await fetch(
                    "https://api.audioboom.com/channels/5055750/audio_clips"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAudioClips(data.body.audio_clips);
            } catch (error) {
                console.error("Error fetching audio clips:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAudioClips();
    }, []);

    const handleClipSelection = (url: string, title: string) => {
        setSelectedClip({ url, title });
        setPlayerVisible(true);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>Listen Again</h2>
            <div style={styles.clipsContainer as React.CSSProperties}>
                {audioClips.length > 0 ? (
                    audioClips.slice(0, limit).map((clip, index) => (
                        <div key={index} style={styles.clip}>
                            <div
                                style={{
                                    ...styles.clipImage,
                                    backgroundImage: `url(${clip.channel.urls.logo_image.original})`,
                                }}
                                onClick={() => handleClipSelection(clip.urls.high_mp3, clip.title)}
                            />
                            <h3 style={styles.clipTitle}>{clip.title}</h3>
                            <p style={styles.clipDescription}>{clip.description}</p>
                        </div>
                    ))
                ) : (
                    <p style={styles.noClipsMessage}>No audio clips available.</p>
                )}
            </div>
            {selectedClip && (
                <AudioPlayer
                    audioUrl={selectedClip.url}
                    isVisible={isPlayerVisible}
                    onToggleVisibility={() => setPlayerVisible((prev) => !prev)}
                />
            )}
        </section>
    );
}

const styles: { [key: string]: CSSProperties } = {
    section: {
        backgroundColor: "#181818",
        padding: "20px",
    },
    heading: {
        color: "#fff",
        fontSize: "24px",
        marginBottom: "30px",
    },
    clipsContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    },
    clip: {
        textAlign: "center",
        marginBottom: "20px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    clipImage: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        overflow: "hidden",
        marginBottom: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    clipTitle: {
        color: "#fff",
        fontSize: "16px",
        marginBottom: "5px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "150px",
    },
    clipDescription: {
        color: "#b3b3b3",
        fontSize: "14px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "150px",
    },
    noClipsMessage: {
        color: "#fff",
    },
};
