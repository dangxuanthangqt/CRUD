import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
           
                <footer className="page-footer font-small blue bg-primary" style={{
                    position: "absolute",
                    bottom: "0px",
                    width: '100%'
                }} >
                    {/* Copyright */}
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                    </div>
                    {/* Copyright */}
                </footer>

           

        );
    }
}

export default Footer;
