"use client"

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function StudentDetails() {

    const [data, setData] = useState<any>([]);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        if (!id) return;

        const apiUrl = `https://697710595b9c0aed1e853ebc.mockapi.io/students/${id}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))

    }, [id]);

    // if (!data) return <h3>Loading...</h3>;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={data.avatar} className="card-img-top" alt="student" />
            <div className="card-body">
                <h5 className="card-title">{data.studentName}</h5>
                <h6>Student roll no: {data.rollno}</h6>
                <h6>Student semester: {data.sem}</h6>
                <h6>Student city name: {data.cityname}</h6>
            </div>
        </div>
    )
}

export default StudentDetails;
