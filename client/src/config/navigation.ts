import { List, Upload, CircleQuestionMarkIcon, LayoutGrid, Globe, BookOpen, FileText, History, ClipboardCheck, Users, Eye, CalendarCog, UserCog } from "lucide-react";

export type UserRole = 'student' | 'lecturer' | 'coordinator';

export const navigationConfig = {
    student: [
        {
            title: "Dashboard",
            href: "/m",
            icon: List,
        },
        {
            title: "Upload DPS",
            href: "/m/dps",
            icon: Upload,
        },
        {
            title: "FAQ",
            href: "/m/faq",
            icon: CircleQuestionMarkIcon,
        },
    ],
    lecturer: [
        {            
            title: "Semua Topik",
            href: "/d",
            icon: LayoutGrid,
        },
        {            
            title: "Kelola Topik",
            href: "/d/topik-saya",
            icon: BookOpen,
        },
        {            
            title: "Review Saya",
            href: "/d/review",
            icon: ClipboardCheck,
        },

    ],
    coordinator: [
        {            
            title: "Kelola Topik",
            href: "/k",
            icon: List,
        },
        {            
            title: "Atur Reviewer",
            href: "/k/atur-reviewer",
            icon: Users,
        },
        {            
            title: "Monitoring Review",
            href: "/k/monitoring",
            icon: Eye,
        },
        {            
            title: "Manajemen Periode",
            href: "/k/periode",
            icon: CalendarCog,
        },
        {            
            title: "Manajemen User",
            href: "/k/users",
            icon: UserCog,
        },

    ]
}