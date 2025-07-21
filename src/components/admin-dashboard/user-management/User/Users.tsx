"use client";

import { useEffect, useState } from "react";
import { API_URL } from '@/utils/apiUrl';
import axiosWrapper from '@/utils/api';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import DataTable, { TableColumn } from 'react-data-table-component';
import Image from 'next/image';  
import Link from 'next/link';

type User = {
    id: string;
    name: string;
    createdAt: string;
    email: string;
    isActive: boolean;
    companyName?: string;
    phoneNumber?: string;
    zipCode?: string;
    image?: string;
};

export default function UserTable() {
    const [users, setUsers] = useState<User[]>([]); 
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axiosWrapper('get', API_URL.GET_ALL_REGULAR_USERS, {}, token ?? undefined) as { data: User[] };
                setUsers(response.data);
            } catch (error) {
                setError('Error fetching users');
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [token]);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };

        return date.toLocaleString('en-US', options);
    };


    const handleEdit = (row: User) => {
        alert(`Editing user: ${row.name}`);
        // You can navigate to an edit page or open a modal here
    };

    const handleDelete = (row: User) => {
        const confirmation = window.confirm(`Are you sure you want to delete ${row.name}?`);
        if (confirmation) {
            alert(`User ${row.name} deleted.`);
            // Here, you would call an API to delete the user, then update the table state
        }
    };

    const columns: TableColumn<User>[] = [
        {
            name: 'User ID',
            selector: (row: User) => `# ${row.id}`,
            sortable: true,
        },
        {
            name: 'User Profile',
            cell: (row: User) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                        src={row.image || "/images/icons/User.svg"} 
                        alt={row.name}
                        width={40}  
                        height={40} 
                        style={{ borderRadius: '50%', marginRight: '10px' }} 
                    />
                    <span>{row.name}</span>
                </div>
            ),
            sortable: true,
        },
        {
            name: 'Company',
            selector: (row: User) => row.companyName || '',
            sortable: true,
        },
        {
            name: 'Date & Time',
            selector: (row: User) => formatDate(row.createdAt),
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row: User) => row.email,
            sortable: true,
        },
        {
            name: 'Action',
            button: true,
            cell: (row: User) => (
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="p-[px] h-[33px] bg-[#838383] text-[#FFFFFF]" onClick={() => handleEdit(row)}>Edit</button>
                    <button className="p-[px] h-[33px] bg-[#FFFFFF] text-[#838383]" onClick={() => handleDelete(row)}>Delete</button>
                </div>
            ),
        }
    ];

    const customStyles = {
        table: {
            style: {
                border: '1px solid #ddd',
            },
        },
        headCells: {
            style: {
                fontWeight: 'bold',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                padding: '24px',
                fontSize: '16px',
            },
        },
        cells: {
            style: {
                padding: '24px',
                fontSize: '16px',
                border: '1px #01010117',
            },
        },
    };

    // Loading and Error Handling
    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
        <div className="">
            <div className="flex justify-between items-center pb-[30px]">
                <h3 className="text-[24px] text-[#1C1C1C] text-[Inter]">List of Users</h3>

                <Link href="/admin/user-management/user/add"
                    className="w-[175px] h-[52px] bg-[#1C1C1C] text-white rounded-[5px] text-center flex justify-center items-center text-[16px] no-underline"
                >
                    Add New User
                </Link>
            </div>

            <DataTable
                columns={columns}
                data={users || []} 
                pagination
                paginationPerPage={6}
                paginationRowsPerPageOptions={[6, 10, 15, 20]}
                progressPending={loading}
                customStyles={customStyles}
                highlightOnHover
                striped
                dense
            />
        </div>
        </>
    );
}
