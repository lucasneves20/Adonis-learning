import React, { ReactElement } from 'react'
import "../styles/templates/footer.scss"


export default function Footer(): ReactElement {
    return (
        <div className="container-footer">
            <span>Feito por WebMaster</span>
            <div id="padding">
                <a href="https://github.com/webMasterAlumni">Meu GitHub</a>
            </div>
        </div>
    )
}
