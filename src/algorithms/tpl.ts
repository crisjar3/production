import { Job } from "./interfaces/job";
import { ResponseTable } from "./interfaces/response-tables";

function calculateResult(job: Job, lastFlowTime: number): ResponseTable {
    const currentFlowTime = job.processingTime + lastFlowTime;
    const deliveryDate = job.remainingDays;
    const currentDelay = Math.max(0, currentFlowTime - deliveryDate);

    return {
        name: job.name,
        processingTime: job.processingTime,
        remainingDays: job.remainingDays,
        delay: currentDelay,
        deliveryDate: deliveryDate,
        flowTime: currentFlowTime
    };
}

export function organizeJobs(jobs: Job[]): ResponseTable[] {
    jobs.sort((a, b) => b.processingTime - a.processingTime);

    let lastFlowTime = 0;

    return jobs.map(job => {
        const result = calculateResult(job, lastFlowTime);

        lastFlowTime = result.flowTime;

        return result;
    });
}
