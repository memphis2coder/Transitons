import React, {useState} from 'react'
//Styles
import Container from 'react-bootstrap/Container';
import './naviBar2.css';

function NaviBar2() {
    const [menu, setMenu] = useState("Menu");

    return (
        <div>
            <Container>
                <div className="navibar d-flex justify-content-between border-bottom py-3">
                    <logo>Gallery</logo>
                    <div className="navi-btn">
                        <button onClick={() => setMenu("Close")}>Menu</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NaviBar2

