import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

export default function ExerciseList() {
  const { data, error, isLoading } = useSWR('/api/exercises')

  { isLoading && <p>Loading...</p> }
  { error && <p>Error fetching Data</p> }

  return (<>
    <h1>Exercises</h1>
    <div>
      {data?.map(exercise => (
        <Link key={exercise.id} href={`/exercises/${exercise.id}`}>
          <h2>{exercise.name}</h2>
          <img src={exercise.imageUrl} width={100} height={150}/>
          <ul>
            {exercise.muscleGroups.map((muscle, index) => <li key={index}>{muscle}</li>)}
          </ul>
        </Link>))}
    </div>
  </>
  )
}
