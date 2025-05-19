import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;

  const isProtectedRoute = pathname.startsWith('/admin');
  const isAuthRoute = pathname === '/login';

  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && token) {
    const dashboardUrl = new URL('/admin/level', request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
