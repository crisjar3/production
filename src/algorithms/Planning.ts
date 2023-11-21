import { Job } from "./interfaces/job";
import { ResponseTable, ResultsPlaning } from "./interfaces/response-tables";

function calculateResult(job: Job, lastFlowTime: number): ResponseTable {
    console.log(job.processingTime, lastFlowTime)
    
    // Casting to make sure
    const processingTime = Number(job.processingTime);
    const remainingDays = Number(job.remainingDays);
    lastFlowTime = Number(lastFlowTime);


    const currentFlowTime = processingTime + lastFlowTime;
    const deliveryDate = remainingDays;
    const currentDelay = Math.max(0, currentFlowTime - deliveryDate);

    return {
        name: job.name,
        processingTime: processingTime,
        flowTime: currentFlowTime,
        deliveryDate: deliveryDate,
        delay: currentDelay,
    };
}

export type SortStrategy = (jobs: Job[]) => Job[];

export function JobsOrderPlanning(jobs: Job[], sortStrategy: SortStrategy): ResultsPlaning {
    jobs = sortStrategy(jobs);

    let lastFlowTime = 0;

    const jobsPLanned = jobs.map(job => {
        const result = calculateResult(job, lastFlowTime);

        lastFlowTime = result.flowTime;

        return result;
    });

    const totalFlowTime = jobsPLanned.reduce((sum, job) => sum + job.flowTime, 0);
    const totalProccesingTime = jobsPLanned.reduce((sum, job) => sum + job.processingTime, 0);
    const totalDelayTime = jobsPLanned.reduce((sum, job) => sum + job.delay, 0);

    const averageCompletionTime = totalFlowTime / jobs.length;

    return {
        Jobs: jobsPLanned,
        AverageCompletionType: averageCompletionTime,
        MeasureUse: totalProccesingTime / totalFlowTime,
        AverageJobs: totalFlowTime / totalProccesingTime,
        AverageDelay: totalDelayTime / jobs.length
    }
}
