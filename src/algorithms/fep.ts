import { Job } from "./interfaces/job";
import { ResponseTable } from "./interfaces/response-tables";
import { calculateResult } from "./tpl";

export function organizeJobs(jobs: Job[]): ResponseTable[] {
    jobs = jobs.reverse();

    let lastFlowTime = 0;

    return jobs.map(job => {
        const result = calculateResult(job, lastFlowTime);

        lastFlowTime = result.flowTime;

        return result;
    });
}