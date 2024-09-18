import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const privatePaths = ['/me'];
const authPaths = ['/login', '/register'];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const sessionToken = request.cookies.get('sessionToken')?.value;

	const { pathname } = request.nextUrl;

	// check private
	if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	// check auth
	if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
		return NextResponse.redirect(new URL('/me', request.url));
	}
	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/login', '/register', '/me'],
};
