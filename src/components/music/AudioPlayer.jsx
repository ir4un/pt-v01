import { useRef, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import { motion, useAnimationControls } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faVolumeUp,
    faVolumeDown,
    faVolumeMute,
    faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";

import audioFile from "../content/audio/Placeholder.mp3"
import audioThumb from "../content/audio/testost_thumb.jpg"

const formWaveSurferOptions = (ref) => ({
    // Set WaveSurfer options
    container: ref,
    waveColor: '#ccc',
    progressColor: '#0178ff',
    cursorColor: 'transparent',
    responsive: true,
    height: 80,
    normalize: true,
    backend: 'WebAudio',
    barWidth: 2,
    barGap: 3,
})

function formatTime(seconds) {
    // Format time for WaveSurfer
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);

}
export default function AudioPlayer({ display, autoplayTriggered }) {
    // Set for Framer Motion Controls
    const mainControls = useAnimationControls();
    const btnControls = useAnimationControls();
    // Set for WaveSurfer initialization
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0);
    const [muted, setMuted] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [audioFileName, setAudioFileName] = useState('');

    useEffect(() => {
        // This stuff will be run on load
        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(audioFile);

        wavesurfer.current.on('ready', () => {
            wavesurfer.current.setVolume(0.5);
            setVolume(wavesurfer.current.getVolume());
            setDuration(wavesurfer.current.getDuration());
            setAudioFileName(audioFile.split('/').pop());

        });

        wavesurfer.current.on('audioprocess', () => {
            setCurrentTime(wavesurfer.current.getCurrentTime());
        });

        return () => {
            if (wavesurfer.current) { // Check if wavesurfer.current is defined
                wavesurfer.current.un('audioprocess');
                wavesurfer.current.un('ready');
                wavesurfer.current.destroy();
            }
        };
    }, []);

    // Use another useEffect to handle playing when autoplayTriggered changes
    useEffect(() => {
        if (autoplayTriggered && wavesurfer.current) {
            wavesurfer.current.play();
            setPlaying(true); // Set playing state to true
        }
    }, [autoplayTriggered]); // If autoplayTriggered changes, run this useEffect

    useEffect(() => {
        // Framer motion stuff on click changes
        mainControls.start({
            opacity: [0, 1],
        });
    }, [mainControls, display]);

    useEffect(() => {
        // Framer motion stuff on click changes
        btnControls.start({
            y: ['110%', '0%'],
        });
    }, [btnControls, display]);

    const handlePlayPause = () => {
        setPlaying(!playing);
        wavesurfer.current.playPause();
    }

    const handleVolumeChange = (newVolume) => {
        setVolume(newVolume);
        wavesurfer.current.setVolume(newVolume);
        setMuted(newVolume === 0)
    }

    const handleMute = () => {
        setMuted(!muted);
        wavesurfer.current.setVolume(muted ? volume : 0);
    }

    const handleVolumeUp = () => {
        handleVolumeChange(Math.min(volume + 0.1, 1));
    }

    const handleVolumeDown = () => {
        handleVolumeChange(Math.max(volume - 0.1, 0));
    }

    return (
        // Display changes state when use click on music button
        <div className={`music-content ${display ? '' : 'hidden'}`}>
            <motion.div
                animate={mainControls}
                transition={{ duration: 0.2, delay: 0.2 }}
                id="waveform"
                ref={waveformRef}
                style={{ width: '100%' }}>
                <div className="control-panel">
                    <div className="anim-container">
                        <motion.img
                            animate={btnControls}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            className="song-thumb"
                            src={audioThumb}
                            alt="Song Thumbnail" />
                    </div>
                    <div className="anim-container">
                        <motion.div className="controls"
                            animate={btnControls}
                            transition={{ duration: 0.2, delay: 0.2 }}>
                            <button className="song-btn" onClick={handlePlayPause}>
                                <FontAwesomeIcon icon={playing ? faPause : faPlay} />
                            </button>
                            <button className="song-btn" onClick={handleMute}>
                                <FontAwesomeIcon icon={muted ? faVolumeOff : faVolumeMute} />
                            </button>
                            <input
                                type="range"
                                id="volume"
                                name="volume"
                                min="0"
                                max="1"
                                step="0.05"
                                value={muted ? 0 : volume}
                                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                            />
                            <button className="song-btn" onClick={handleVolumeDown}>
                                <FontAwesomeIcon icon={faVolumeDown} />
                            </button>
                            <button className="song-btn" onClick={handleVolumeUp}>
                                <FontAwesomeIcon icon={faVolumeUp} />
                            </button>
                        </motion.div>
                    </div>
                    <div className="anim-container">
                        <motion.div className="audio-info"
                            animate={btnControls}
                            transition={{ duration: 0.2, delay: 0.2 }}>
                            <span>
                                Playing: {audioFileName} <br />
                            </span>
                            <span>
                                Duration: {formatTime(duration)} | Current Time: {' '}
                                {formatTime(currentTime)} <br />
                                <span>Volume: {Math.round(volume * 100)}%</span>
                            </span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

AudioPlayer.propTypes = {
    display: PropTypes.bool.isRequired,
    autoplayTriggered: PropTypes.bool.isRequired,
};
