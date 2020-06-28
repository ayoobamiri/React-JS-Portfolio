import React from 'react';


export const Footer = () => {
    return (
        <div className="main-footer text-center" >
            <div className="container ">
                <div className="row">
                    {/* Column1 */}
                    <div className="col-sm-4 ">
                        <h4 >Mohammad Amiri</h4>
                        <ul className="list-unstyled">
                            <li>8501 Bruceville rd</li>
                            <li>+1 925 791 7686</li>
                            <li>+1 925 791 7686</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col-sm-4">
                        <h4>Company Inc</h4>
                        <ul className="list-unstyled">
                            <li>Test 04</li>
                            <li>Test 05</li>
                            <li>Test 06</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col-sm-4">
                        <h4>Contacts</h4>
                        <ul className="list-unstyled">
                            <li>Test 07</li>
                            <li>Test 08</li>
                            <li>Test 09</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy; {new Date().getFullYear()} Company Inc | All right reserved | Terms Of Service | Privecy
                    </p>
                </div>
            </div>
        </div>

    )
}


