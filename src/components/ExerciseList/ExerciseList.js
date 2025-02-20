import React, { Fragment } from 'react'
import useSWR from 'swr'

export default function ExerciseList() {
  const { data, error, isLoading } = useSWR('/api/exercises')
  
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error fetching Data</p>
  
  return (<>
    <h1>Exercises</h1>
    <div>
      {data?.map(exercise => (
        <Fragment key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src='/muscle.png' width={200} height={200} />
          <ul>
            {exercise.muscleGroups.map((muscle, index) => <li key={index}>{muscle}</li>)}
          </ul>
        </Fragment>))}
    </div>
  </>
  )
}
