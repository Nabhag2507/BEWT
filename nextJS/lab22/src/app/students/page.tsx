"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function StudentPage() {
    const [student, setStudent] = useState<any>([]);

    useEffect(() => {
        const apiUrl = "https://697710595b9c0aed1e853ebc.mockapi.io/students"

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setStudent(res))
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Roll no</th>
                        <th scope="col">Image</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((stu: any) => (
                        <tr key={stu.id}>
                            <td>{stu.id}</td>
                            <td>{stu.studentName}</td>
                            <td>{stu.rollNo}</td>
                            <td><img src={stu.avatar} alt="image" width={100} /></td>
                            <td><Link className='btn btn-primary' href={`students/${stu.id}`}>View Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default StudentPage