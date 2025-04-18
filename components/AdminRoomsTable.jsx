"use client";

import {useEffect, useState} from "react";
import getAllRoomsWithUsers from "@/app/actions/getAllRoomsWithUsers";

const AdminRoomsTable = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true); // ← Add this

    useEffect(() => {
        const fetchRooms = async () => {
            const data = await getAllRoomsWithUsers();
            // console.log("Rooms Data in Frontend:", data); // Debugging
            setRooms(data);
            setLoading(false); // ← Set to false once data is fetched
        };

        fetchRooms();
    }, []);

    if (loading) return <p>Loading rooms...</p>;

    if (rooms.length === 0) {
        return <p>No rooms available or failed to fetch data.</p>;
    }

    return (
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr>
                    <th className="px-4 py-2 border">Room Name</th>
                    <th className="px-4 py-2 border">Uploaded By</th>
                    <th className="px-4 py-2 border">Email</th>
                </tr>
            </thead>
            <tbody>
                {rooms.map((room) => (
                    <tr key={room.$id}>
                        <td className="px-4 py-2 border">{room.name}</td>
                        <td className="px-4 py-2 border">{room.userName}</td>
                        <td className="px-4 py-2 border">{room.userEmail}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdminRoomsTable;
