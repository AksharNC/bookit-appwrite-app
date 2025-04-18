"use server";

import {createAdminClient} from "@/config/appwrite";

async function getAllRoomsWithUsers() {
    try {
        const {databases, users} = await createAdminClient();

        // Fetch all rooms
        const {documents: rooms} = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS
        );

        // console.log("Rooms fetched from database:", rooms); // Debugging

        // Fetch user details for each room
        const roomsWithUsers = await Promise.all(
            rooms.map(async (room) => {
                try {
                    const user = await users.get(room.user_id);
                    return {
                        ...room,
                        userName: user.name,
                        userEmail: user.email,
                    };
                } catch (error) {
                    console.log(
                        `Failed to fetch user for room ${room.$id}:`,
                        error
                    );
                    return {
                        ...room,
                        userName: "Unknown User",
                        userEmail: "N/A",
                    };
                }
            })
        );

        // console.log("Rooms with Users (Processed):", roomsWithUsers); // Debugging
        return roomsWithUsers;
    } catch (error) {
        console.log("Failed to fetch rooms with user details:", error);
        return [];
    }
}

export default getAllRoomsWithUsers;
