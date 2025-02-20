import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

export default function ExerciseDetails() {
    const router = useRouter()
    const { id } = router.query
    const { data, error, isLoading } = useSWR(`/api/exercises/${id}`)

    { isLoading && <p>Loading...</p> }
    { error && <p>Error fetching Data</p> }

    return (<>
    <Link href={'/'}>Back</Link>
        <h1>{data?.name}</h1>
        <div>
            {data && <div>
                {data.id}
                <ol>
                    {data?.instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}
                </ol>
            </div>}
        </div>
    </>
    )
}
