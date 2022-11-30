import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

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
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                'background': {
                    'color': '#1d1d1d'
                },
                'fpsLimit': 120,
                'interactivity': {
                    'detectsOn': 'canvas',
                    'events': {
                        'resize': true
                    },
                },
                'particles': {
                    'color': {
                        'value': '#7fffd4'
                    },
                    'collisions': {
                        'enable': true,
                    },
                    'move': {
                        'directions': 'none',
                        'enable': true,
                        'outModes': {
                            'default': 'bounce',
                        },
                        'random': true,
                        'speed': 0.2,
                        'straight': false,
                    },
                    'number': {
                        'density': {
                            'enable': true,
                            'area': 800,
                        },
                        'value': 100,
                    },
                    'opacity': {
                        'value': 0.8,
                    },
                    'shape': {
                        'type': 'circle',
                    },
                    'size': {
                        'value': { 'min': 0.5, 'max': 0.5 },
                    },
                },
                'detectRetina': true,
            }}
        />
    )
}

export default ParticlesBG