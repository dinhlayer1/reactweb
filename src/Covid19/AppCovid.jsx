import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function AppCovid() {

    const [data, setData] = useState([]);

    const getCovidData = async() => {
       const res = await fetch('https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true');
       const actualData = await res.json();
       console.log(actualData.locations)
       setData(actualData.locations)
    }

    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h2 className="mb-5 text-center">
                        <span className="font-weight-bold">INDIA</span> COVID-19 Dashboard
                    </h2>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Death</th>
                                <th>Treating</th>
                                <th>Cases</th>
                                <th>Recovered</th>
                                <th>CasesToday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currEl, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{currEl.name}</th>
                                            <th>{currEl.death}</th>
                                            <th>{currEl.treating}</th>
                                            <th>{currEl.cases}</th>
                                            <th>{currEl.recovered}</th>
                                            <th>{currEl.casesToday}</th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AppCovid;