import { Job } from './../interfaces/job';

const SortStrategies = {
    FEP(jobs: Job[]) {
        return [...jobs].reverse();
    },
    TPL(jobs: Job[]) {
        return [...jobs].sort((a, b) => b.processingTime - a.processingTime);
    },
    TPC(jobs: Job[]) {
        return [...jobs].sort((a, b) => a.processingTime - b.processingTime)
    },
    PEPS(jobs: Job[]) {
        return jobs;
    }
};

export const Planning = [
    {
        Title: "FEP",
        Subtitle: "Primero en llegar último en salir",
        Sort: SortStrategies.FEP,
    },
    {
        Title: "TPL",
        Subtitle: "Tiempo de finalización más largo",
        Sort: SortStrategies.TPL,
    },
    {
        Title: "PEPS",
        Subtitle: "Primero en llegar primero en salir",
        Sort: SortStrategies.PEPS,
    },
    {
        Title: "TPC",
        Subtitle: "Tiempo de finalización más corto",
        Sort: SortStrategies.TPC,
    },
];