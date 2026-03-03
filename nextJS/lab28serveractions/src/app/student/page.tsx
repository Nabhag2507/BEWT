"use client"
import { useEffect, useState } from "react"

function TableAllStudent() {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch("/api/student")
            .then((res) => res.json())
            .then((result) => {
                setData(result)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <div className="min-h-screen bg-white px-6 py-10">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Student Records
                </h1>

                <div className="overflow-x-auto">
                    <table className="w-full border border-gray-300 rounded-lg overflow-hidden">

                        {/* Header */}
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th >
                                    Name
                                </th>
                                <th className="border border-gray-300 px-6 py-3 text-left">
                                    Roll No
                                </th>
                            </tr>
                        </thead>

                        {/* Body */}
                        <tbody>
                            {data.map((student: any, index: number) => (
                                <tr
                                    key={student.id}
                                    className="hover:bg-blue-50 transition duration-200"
                                >
                                    <td className="border border-gray-300 px-6 py-4">
                                        {student.name}
                                    </td>
                                    <td className="border border-gray-300 px-6 py-4">
                                        {student.roll}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    )
}

export default TableAllStudent