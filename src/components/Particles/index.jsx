import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBG() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: "#1d1d1d"
                },
                fpsLimit: 120,
                interactivity: {
                    detectsOn: 'canvas',
                    events: {
                        resize: true
                    },
                },
                particles: {
                    color: {
                        value: ["#ff00cc", "#fb19d0", "#f727d4", "#f231d8", "#ee39dc", "#e940df", "#e546e3", "#e04ce6", "#db51e9", "#d656eb", "#d15aee", "#cc5ff0", "#c763f3", "#c266f5", "#bd6af7", "#b86df8", "#b271fa", "#ad74fb", "#a877fc", "#a279fd", "#9d7cfe", "#987fff", "#9281ff", "#8d83ff", "#8886ff", "#8388ff", "#7e8aff", "#798cff", "#748dff", "#6f8fff", "#6a91fe", "#6692fd", "#6194fc", "#5d96fb", "#5997fa", "#5598f8", "#529af7", "#4f9bf5", "#4c9cf4", "#4a9df2"]
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 1 },
                    },
                    twinkle: {
                        particles: {
                            enable: true,
                            frequency: 0.05,
                            opacity: 1
                        }
                    }
                },
                detectRetina: true,
            }}
        />
    )
}

export default ParticlesBG