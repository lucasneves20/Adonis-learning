import React, { ReactElement } from 'react'
import "../styles/content/home.scss"

interface Props {
    
}

export default function Home({}: Props): ReactElement {
    return (
        <div className="container-home">
            <h2>Bem vindos</h2>
        </div>
    )
}
