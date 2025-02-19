import React, { Fragment } from 'react'
import useSWR from 'swr'

export default function ExerciseList() {
  const { data, error, isLoading } = useSWR('/api/exercises')
  return (<>
    <h1>Exercises</h1>
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching Data</p>}
      {data && data.map(exercise => (
        <Fragment key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src='/muscle.png' width={200} height={200} />
          <ul>{exercise.muscleGroups.map((muscle, index) => <li key={index}>{muscle}</li>)}</ul>
        </Fragment>))}
    </div>
  </>
  )
}
