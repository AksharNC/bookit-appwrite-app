import {NextResponse} from "next/server";
import checkAuth from "./app/actions/checkAuth";

export async function middleware(request) {
    const {isAuthenticated, user} = await checkAuth();

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Restrict admin panel to admin users
    if (
        request.nextUrl.pathname.startsWith("/admin") &&
        user.email !== "admin.bookit@gmail.com"
    ) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/bookings", "/rooms/add", "/rooms/my", "/admin"],
};
