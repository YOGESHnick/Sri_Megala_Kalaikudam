import {Link} from "react-router-dom";

export const Navbar = ()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg mnc py-lg-4 ">
            <div className="container-fluid f">
                <button class="navbar-toggler tgl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto px-5 ">
                    <a className="navbar-brand" href="/"><img src="./assets/logo.png" class="logo top-logo" alt="logo" ></img></a>
                    <li class="nav-item px-4 gimme-margin-top " ><Link className="Link" to="/" >Home</Link> </li>
                    <li class="nav-item px-4 gimme-margin-top " ><Link className="Link" to="/services" >Services</Link> </li>
                    <li class="nav-item px-4 gimme-margin-top " ><Link className="Link" to="/about" >About</Link> </li>
                    <li class="nav-item px-4 gimme-margin-top " ><Link className="Link" to="/contact" >Contact</Link> </li>
                    <li class="nav-item px-4 gimme-margin-top " ><Link className="Link" to="/team" >Our<span className="hidee"></span>Team</Link> </li>
                    </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}