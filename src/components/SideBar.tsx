import React, { ReactNode } from "react"
import Link from "next/link"
import { Role } from "@/firebase-common";
import Collapse from "./Collapse";

type SideBarProps = {
    mode: Role;
}

const StudentOptions: React.FC = () => {
    return (
        <div>
            <li><Link href="/worksheets">Worksheets</Link></li>
            <li><Link href="/pastpapers">Past papers</Link></li>
            <li><Link href="/lectures">Video Lectures</Link></li>
            <li><Link href="/aboutMe">My Profile</Link></li>
        </div>
    )
}

const TeacherOptions: React.FC = () => {
    return (
        <div>
            <li><Link href="/worksheets">Worksheets</Link></li>
            <li><Link href="/pastpapers">Past papers</Link></li>
            <li><Link href="/lectures">Video Lectures</Link></li>
            <li><Link href="/aboutMe">My Profile</Link></li>
        </div>

    )
}
const AdminOptions = () => {
    return (
        <div className="my-4">
            <div className="text-center font-bold text-2xl">Manage</div>
            <div className="my-8">
                {/* <li><Link href="/admin/sections">Sections</Link></li>
                <li><Link href="/admin/users">Users</Link></li> */}
                <Collapse title="Users">
                    <li><Link href="/admin/students">Students</Link></li>
                    <li><Link href="/admin/teachers">Teachers</Link></li>
                </Collapse>
                <Collapse title="Content">
                    <li><Link href="/admin/pastpapers">Past Papers</Link></li>
                    <li><Link href="/admin/lectures">Lectures</Link></li>
                    <li><Link href="/admin/notes">Notes</Link></li>
                </Collapse>
                <li><Link href="/admin/classes">Classes</Link></li>
                <li><Link href="/admin/subjects">Subjects</Link></li>
            </div>
        </div>
    )
}

const Sidebar: React.FC<SideBarProps> = ({ mode }) => {
    return (
        <div className="flex flex-grow h-fit max-w-fit">
            <ul className="menu menu-lg bg-base-200 w-56 rounded-box outline-primary">
                {mode === "student" ? (
                    <StudentOptions />
                ) : ((mode === "admin") ? (
                    <AdminOptions />
                ) : (<TeacherOptions />)
                )}
            </ul>
        </div>

    )
}

export default Sidebar;