import React, { Fragment } from 'react'
import useSWR from 'swr'

export default function WorkoutList() {
  const { data, error, isLoading } = useSWR('/api/workouts')
  
  {isLoading && <p>Loading...</p>}
  {error && <p>Error fetching Data</p>}
  
  return (<>
    <div>
      {data?.map(workout => (
        <Fragment key={workout.id}>
          <h2>{workout.name}</h2>
          <ul>
            {workout.exercises.map((exercise, index) => <li key={index}>
                <p>{exercise.exerciseId}</p>
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                </li>)}
          </ul>
        </Fragment>))}
    </div>
  </>
  )
}
