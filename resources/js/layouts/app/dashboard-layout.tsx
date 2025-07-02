import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
// import { AppSidebar } from '@/components/app-sidebar';
import { AppContentHeader } from '@/components/app-content-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';
import AppHeader from '@/components/app-header';

export default function DashboardLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            {/*<AppSidebar />*/}
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppHeader />
                <AppContentHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
}

