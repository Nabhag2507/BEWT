import { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({
    children,
}:
    {
        children: ReactNode
    }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" href="/login">Login page</Link>
                            <Link className="nav-link" href="/signup">Sign up page</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                {children}
            </div>
        </>
    )
}