import React from "react";

const NavBar = () => {

    return (
        <div>
            <nav id="ashNav" className="global-bg-g100 ashNav" aria-label="Primary">
                <div class="container">
                    <ul className="ashNav-list">
                        <li class="ashNav-listItem">
                            <a className="ashLinkButton-link ashLinkButton-linkInline site-color-primary site-bg-hover-secondary global-color-hover-white site-bg-active-secondary global-color-active-white u-fw-b active" href="#" target="_self">Homepage</a>
                        </li>
                        <li class="ashNav-listItem">
                            <a className='ashLinkButton-link ashLinkButton-linkInline site-color-secondary site-bg-hover-secondary global-color-hover-white site-bg-active-secondary global-color-active-white u-fw-b inactive' href="#" target="_self">Fitness Centers</a>                            
                        </li>
                        <li class="ashNav-listItem">
                            <a className='ashLinkButton-link ashLinkButton-linkInline site-color-secondary site-bg-hover-secondary global-color-hover-white site-bg-active-secondary global-color-active-white u-fw-b inactive' href="#" target="_self">Workouts</a>
                        </li>
                        <li class="ashNav-listItem">
                            <a className='ashLinkButton-link ashLinkButton-linkInline site-color-secondary site-bg-hover-secondary global-color-hover-white site-bg-active-secondary global-color-active-white u-fw-b inactive' href="#" target="_self">Spouse Benefits</a>
                        </li>
                        <li class="ashNav-listItem">
                            <a className='ashLinkButton-link ashLinkButton-linkInline site-color-secondary site-bg-hover-secondary global-color-hover-white site-bg-active-secondary global-color-active-white u-fw-b inactive' href="#" target="_self">Am I Eligible</a>
                        </li>
                        <li class="ashNav-listItem">
                            <a className='ashLinkButton-link ashLinkButton-linkInline site-color-secondary site-bg-hover-secondary global-color-hover-white site-bg-active-secondary global-color-active-white u-fw-b inactive' href="#" target="_self">FAQ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;