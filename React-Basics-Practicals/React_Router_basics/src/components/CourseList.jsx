import React from 'react'
import {Link} from 'react-router'
export default function CourseList() {

    const courses=[
  { id: "react", name: "React" },
  { id: "js", name: "JavaScript" },
    ]

  return (
    <>
    {
        courses.map((course)=><div key={course.id}>
         <Link to={`/courses/${course.id}`}>
         {course.name}
         </Link>
        </div>)
    }

    
    </>
  )
}
