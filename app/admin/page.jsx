import Heading from "@/components/Heading";
import AdminRoomsTable from "@/components/AdminRoomsTable";
import AdminBookingsTable from "@/components/AdminBookingsTable";

const AdminPage = () => {
    return (
        <>
            <Heading title="Admin Panel" />
            <section className="mt-6">
                <h2 className="text-xl font-bold mb-4">All Rooms</h2>
                <AdminRoomsTable />
            </section>
            <section className="mt-10">
                <h2 className="text-xl font-bold mb-4">All Bookings</h2>
                <AdminBookingsTable />
            </section>
        </>
    );
};

export default AdminPage;
