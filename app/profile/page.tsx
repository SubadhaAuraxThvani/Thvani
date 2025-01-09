"use client"

import { useSession, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { IoIosMail } from "react-icons/io"
import Image from "next/image"
import img from "@/images/Home/bg4.png"

interface UserData {
    full_name: string
    email: string
    phone_number: string
    gender: string
    country: string
    language: string
    timezone: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export default function ProfilePage() {
    const { data: session } = useSession()
    const [userData, setUserData] = useState<UserData>({
        full_name: "",
        email: "",
        phone_number: "",
        gender: "",
        country: "",
        language: "",
        timezone: "",
    })
    const [editData, setEditData] = useState<UserData>({} as UserData)
    const [isLoading, setIsLoading] = useState(true)
    const [isEditing, setIsEditing] = useState(false)

    const timezones = Intl.supportedValuesOf('timeZone')
    const languages = ["English", "Hindi", "Telugu", "Marathi", "Bengali", "Kanada"]
    const countries = ["USA", "India", "Canada", "Australia", "Germany", "France", "Japan", "China"]
    const genders = ["Male", "Female", "Other", "Prefer not to say"]

    useEffect(() => {
        const fetchUserData = async () => {
            if (!session?.user?.email) return

            try {
                const response = await fetch(
                    `${API_BASE_URL}/auth/user/${session.user.email}`
                )
                if (!response.ok) throw new Error("Failed to fetch user data")

                const data = await response.json()
                setUserData(data.user)
                setEditData(data.user)
            } catch (error) {
                toast({
                    title: "Error",
                    description: "Failed to load profile data",
                    variant: "destructive",
                })
                console.log(error);
                
            } finally {
                setIsLoading(false)
            }
        }
        fetchUserData()
    }, [session])

    const handleEdit = async () => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/auth/update-profile`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...editData,
                        email: userData.email,
                    }),
                }
            )

            if (!response.ok) throw new Error("Failed to update profile")

            const data = await response.json();
            setUserData(data.user)
            setIsEditing(false)
            toast({
                title: "Success",
                description: "Profile updated successfully",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to update profile",
                variant: "destructive",
            })
            console.log(error);
            
        }
    }

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>
    }

    return (
        <div className="max-w-5xl mx-auto p-4 w-full">
            <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Profile</h1>
            <div className="space-y-4 bg-gray-100 p-4 md:p-6 rounded-lg shadow">
                <Dialog open={isEditing} onOpenChange={setIsEditing}>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                            <Image src={img} alt="Profile" className="rounded-full w-12 h-12 md:w-16 md:h-16 object-cover" />
                            <div>
                                <p className="text-base md:text-lg font-bold">{userData.full_name}</p>
                                <p className="text-sm md:text-base text-gray-600">{userData.email}</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-500 text-white hover:bg-blue-600 w-full sm:w-auto"
                        >
                            Edit
                        </Button>
                    </div>

                    <DialogContent className="sm:max-w-[425px] w-[95%] mx-auto">
                        <DialogHeader>
                            <DialogTitle>Edit Profile</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-500">Name</label>
                                <Input
                                    value={editData.full_name}
                                    onChange={(e) => setEditData(prev => ({ ...prev, full_name: e.target.value }))}
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Phone Number</label>
                                <Input
                                    value={editData.phone_number}
                                    onChange={(e) => setEditData(prev => ({ ...prev, phone_number: e.target.value }))}
                                />
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Gender</label>
                                <Select value={editData.gender} onValueChange={(value) => setEditData(prev => ({ ...prev, gender: value }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {genders.map(gender => (
                                            <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Country</label>
                                <Select value={editData.country} onValueChange={(value) => setEditData(prev => ({ ...prev, country: value }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {countries.map(country => (
                                            <SelectItem key={country} value={country}>{country}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Language</label>
                                <Select value={editData.language} onValueChange={(value) => setEditData(prev => ({ ...prev, language: value }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {languages.map(language => (
                                            <SelectItem key={language} value={language}>{language}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500">Timezone</label>
                                <Select value={editData.timezone} onValueChange={(value) => setEditData(prev => ({ ...prev, timezone: value }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select timezone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {timezones.map(timezone => (
                                            <SelectItem key={timezone} value={timezone}>{timezone}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button onClick={handleEdit} className="w-full">
                                Save Changes
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { label: "Full Name", value: userData.full_name },
                        { label: "Phone Number", value: userData.phone_number },
                        { label: "Gender", value: userData.gender },
                        { label: "Country", value: userData.country },
                        { label: "Language", value: userData.language },
                        { label: "Time Zone", value: userData.timezone }
                    ].map(({ label, value }) => (
                        <div key={label} className="flex flex-col gap-2">
                            <h2 className="text-sm text-gray-600">{label}</h2>
                            <p className="text-base md:text-lg bg-white p-2 rounded">{value || "Not specified"}</p>
                        </div>
                    ))}
                </div>

                <div className="border-t pt-4">
                    <h2 className="text-sm font-bold mb-2">My Email Address</h2>
                    <div className="flex items-center gap-2">
                        <IoIosMail className="text-gray-600" />
                        <p className="text-base md:text-lg">{userData.email}</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link href="/restpassword" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full">Change Password</Button>
                    </Link>
                    <Button
                        variant="destructive"
                        onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}
                        className="w-full sm:w-auto"
                    >
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    )
}