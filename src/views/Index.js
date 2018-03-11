import React, { Component } from "react"

class Index extends Component {
    render() {
        return(
            <div className="Index">
                <a-scene>
                    <a-assets>
                        <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg"/>
                    </a-assets>

                    <a-gradient-sky material="shader: gradient; topColor: 191 96 255; bottomColor: 66 134 244;"></a-gradient-sky>

                    <a-ocean width="100" depth="100" density="90" color="#4286f4"></a-ocean>

                    <a-camera wasd-controls-enabled="false" position="0 0 0">
                        <a-cursor color="#05ffa1"></a-cursor>
                    </a-camera>
                </a-scene>
            </div>
        )
    }
}

export default Index