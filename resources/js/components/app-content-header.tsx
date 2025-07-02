import { Breadcrumbs } from '@/components/breadcrumbs';
// import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { ArrowLeft } from 'lucide-react';
// import { usePage } from '@inertiajs/react';

export function AppContentHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const showBack = breadcrumbs.length > 1;

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                {showBack && (
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center text-sm text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back
                    </button>
                )}
                {/*<SidebarTrigger className="-ml-1" />*/}
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
        </header>
    );
}
