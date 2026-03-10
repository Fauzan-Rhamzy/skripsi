import { List, Upload, CircleQuestionMarkIcon, LayoutGrid, Globe, BookOpen, FileText, History, ClipboardCheck } from "lucide-react";

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
            title: "Dashboard",
            href: "/k",
            icon: List,
        },

    ]
}