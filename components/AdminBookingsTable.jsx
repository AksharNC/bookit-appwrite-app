"use client";

import {useEffect, useState} from "react";
import getAllBookings from "@/app/actions/getAllBookings";
import {DateTime} from "luxon";

const AdminBookingsTable = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            const data = await getAllBookings();
            // console.log("Bookings Data in Frontend:", data); // Debugging
            setBookings(data);
            setLoading(false);
        };

        fetchBookings();
    }, []);

    const formatDateTime = (isoString) => {
        return DateTime.fromISO(isoString).toFormat("yyyy-MM-dd HH:mm:ss");
    };

    if (loading) return <p>Loading bookings...</p>;

    if (bookings.length === 0) {
        return <p>No bookings available or failed to fetch data.</p>;
    }

    return (
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr>
                    <th className="px-4 py-2 border">Room Name</th>
                    <th className="px-4 py-2 border">Booked By</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Check-In</th>
                    <th className="px-4 py-2 border">Check-Out</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking) => (
                    <tr key={booking.$id}>
                        <td className="px-4 py-2 border">{booking.roomName}</td>
                        <td className="px-4 py-2 border">{booking.userName}</td>
                        <td className="px-4 py-2 border">
                            {booking.userEmail}
                        </td>
                        <td className="px-4 py-2 border">
                            {formatDateTime(booking.check_in)}
                        </td>
                        <td className="px-4 py-2 border">
                            {formatDateTime(booking.check_out)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdminBookingsTable;
