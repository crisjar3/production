import "./App.css";
import { Job } from "./algorithms/interfaces/job";
import { organizeJobs } from "./algorithms/tpl";
import DataTable from "./components/generics/DataTable";

function App() {

  const jobs: Job[] = [
    { name: 'Job 101', processingTime: 65, remainingDays: 5 },
    { name: 'Job 102', processingTime: 73, remainingDays: 2 },
    { name: 'Job 103', processingTime: 44, remainingDays: 3 },
    { name: 'Job 104', processingTime: 97, remainingDays: 1 },
    { name: 'Job 105', processingTime: 52, remainingDays: 1 },
  ];

  const results = organizeJobs(jobs);

  console.log(results)

  return (
    <DataTable
      title='TCP'
      subtitle='Modo de ordenamiento por tamaño de proceso mas largo'
      headers={Object.keys(results[0])}
      rows={results}
    />
  )
}

export default App;
