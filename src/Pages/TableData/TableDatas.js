import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import logo from '../../assets/ultimate hrm logo-05-02 2.png';

const TableDatas = () => {
    const [keys, setKeys] = useState([]);
    const [dates, setDates] = useState([]);

    const { data: attendances = {}, isLoading } = useQuery({
        queryKey: ['attendances'],
        queryFn: async () => {
            const res = await fetch('https://test.nexisltd.com/test', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json();
            const keys = Object.keys(attendances);
            setKeys(keys);
            keys?.forEach((key) => {
                const date = Object.keys(attendances[key].attendance);
                setDates(date);
            })
            return data;
        }
    })

    if (isLoading) {
        return <h1>Loading...............</h1>
    }
    return (
        <div>
            <img className='mt-12 ml-14 hidden md:block' src={logo} alt="" />
            <h1 className='text-2xl font-semibold text-white bg-primary w-fit py-3 px-7 rounded-md mx-auto mt-16 md:mt-3 mb-14'>Attendance information</h1>
            {
                keys?.length > 0 &&
                <>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-96 md:w-full overflow-hidden">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Satus</th>
                                    </tr>
                                </thead>
                                {
                                    keys?.map((key, i) =>
                                        <tbody key={i} className='text-center'>
                                            {
                                                dates?.map((date, i) => <tr key={i}>
                                                    <td className='mb-10'>
                                                        {date.replace(/-/g, '/')}
                                                    </td>
                                                    <td>{attendances[key].name}</td>
                                                    <td>{attendances[key].attendance[date].status}</td>
                                                </tr>)
                                            }
                                        </tbody>
                                    )
                                }
                            </table>
                        </div>
                    </div>
                </>
            }

        </div>
    );
};

export default TableDatas;