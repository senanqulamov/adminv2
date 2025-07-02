// components/app-header.tsx

import { NavUser } from '@/components/nav-user';
import { Link, usePage } from '@inertiajs/react';
import { Bell, Menu } from 'lucide-react';
import { useState } from 'react';

export default function AppHeader() {
    const [open, setOpen] = useState(false);
    const { env } = usePage().props as unknown as { env: string };

    return (
        <header className="flex items-center justify-between border-b border-sidebar-border/70 bg-background px-4 py-3 dark:border-sidebar-border">
            {/* Left - Mobile menu or title */}
            <div className="flex items-center gap-3">
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    <Menu className="h-5 w-5 text-foreground" />
                </button>
                <h1 className="text-lg font-semibold text-foreground">AdminV2</h1>
                {env && <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{env.toUpperCase()}</span>}
            </div>

            {/* Right - Actions */}
            <div className="ml-auto flex items-center gap-4">
                {/* Nav links */}
                <div className="hidden items-center gap-4 md:flex">
                    <Link href="/dashboard" className="text-sm hover:text-primary">
                        Dashboard
                    </Link>
                    <Link href="/users" className="text-sm hover:text-primary">
                        Users
                    </Link>
                </div>

                {/* Notifications */}
                <button className="relative text-foreground hover:text-primary">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
                </button>

                {/* User menu */}
                <NavUser />
            </div>
        </header>
    );
}
