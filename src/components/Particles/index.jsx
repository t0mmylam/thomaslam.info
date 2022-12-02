import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticlesBG(props) {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            options={{
                'background': {
                    'color': '#1d1d1d'
                },
                'fpsLimit': 60,
                'interactivity': {
                    'detectsOn': 'canvas',
                    'events': {
                        'resize': true
                    },
                },
                'particles': {
                    'color': {
                        'value': props.color
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
                            'area': 1000,
                        },
                        'value': 120,
                    },
                    'opacity': {
                        'value': 0.8,
                    },
                    'shape': {
                        'type': 'circle',
                    },
                    'size': {
                        'value': { 'min': 0.7, 'max': 0.7 },
                    },
                },
                'detectRetina': true,
            }}
        />
    )
}

export default ParticlesBG