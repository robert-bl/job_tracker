import { useState } from "react"
import { Job } from "./Job"

export interface JobInfo {
    position?: string
    company?: string
}

export const JobList = () => {

    let testJobsArr: JobInfo[] = [{position: 'SWI', company: 'Veridian Dynamics'}, {position: "SWD", company: 'Evil Corp.'}, {position: 'FED', company: 'Home'}]

    const [jobs, setJobs] = useState<JobInfo[]>(testJobsArr)

    return(
        <div>
            {jobs.map((x, i) => (
                <Job jobInfo={x} key={i}/>
            ))}
        </div>
    )
}