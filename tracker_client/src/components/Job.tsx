import { useState } from "react"
import { JobInfo } from './JobList'

interface Props {
    jobInfo: JobInfo
}


export const Job = ({ jobInfo }: Props) => {

    return(
        <div className="flex">
            <div>{jobInfo.position}</div>
            <div>{jobInfo.company}</div>
        </div>
    )
}