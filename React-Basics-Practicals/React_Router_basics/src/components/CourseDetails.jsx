import React from 'react'
import {useParams} from 'react-router'
export default function CourseDetails() {
const {courseId}=useParams();

const courses=[
  { id: "react", name: "React" },
  { id: "js", name: "JavaScript" },
    ];

    const course=courses.find((c)=>c.id===courseId);

    if(!course){
       return <h2>Course Not Found</h2>
    }else{
     return <h2> Course details: {course.name}</h2>
    }
 
}
