import { Job } from './../interfaces/job';

export const SortStrategies = {
    Reverse(jobs: Job[]) {
        return [...jobs].reverse();
    },
    ProcessingTime(jobs: Job[]) {
        return [...jobs].sort((a, b) => b.processingTime - a.processingTime);
    },
};