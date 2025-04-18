"use server";

import {createAdminClient} from "@/config/appwrite";

async function getAllBookings() {
    try {
        const {databases, users} = await createAdminClient();

        // Fetch all bookings
        const {documents: bookings} = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS
        );

        // console.log("Bookings fetched:", bookings); // Debugging

        // Fetch room and user details for each booking
        const bookingsWithDetails = await Promise.all(
            bookings.map(async (booking) => {
                // Handle cases where room_id is an object
                const roomId =
                    typeof booking.room_id === "object"
                        ? booking.room_id.$id // Extract the $id if room_id is an object
                        : booking.room_id;

                if (!roomId || roomId.length > 36) {
                    // console.log("Invalid room_id:", roomId); // Debugging
                    return {
                        ...booking,
                        roomName: "Invalid Room",
                        userName: "Unknown User",
                        userEmail: "N/A",
                    };
                }

                const room = await databases.getDocument(
                    process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
                    process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
                    roomId
                );

                const user = await users.get(booking.user_id);

                return {
                    ...booking,
                    roomName: room.name,
                    userName: user.name,
                    userEmail: user.email,
                };
            })
        );

        return bookingsWithDetails;
    } catch (error) {
        console.log("Failed to fetch bookings with details", error);
        return [];
    }
}

export default getAllBookings;
