import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <React.Fragment>
            <section className="container-fluid footer_section">
                <p>
                    Copyright © 2019 All Rights Reserved By
                    <Link to="/"> web-tech softs </Link>
                </p>
            </section>
        </React.Fragment>
    )
}

export default Footer