import React from 'react'
import ReactVivus from 'react-vivus'
import Logo from '../assets/log.svg'

const Loader = ({ refElement, height }) => {
    return (
        <div style={{ height: height, background: "#84754C"}}>
            <div ref={ refElement } style={{ paddingTop: height/2-150 }}>
                <ReactVivus
                id="svg-wrapper"
                option={{
                    file: Logo,
                    pathTimingFunction: 'LINEAR',
                    type: 'scenario',
                }}
                style={{ height: '250px', width: '250px'}}
                />
            </div>
        </div>
    )
}

export default Loader