import "./App.css";
import { organizeJobs } from "./algorithms/fep";
import { Job } from "./algorithms/interfaces/job";
// import { organizeJobs } from "./algorithms/tpl";
import DataTable from "./components/generics/DataTable";

function App() {

  const jobs: Job[] = [
    { name: 'Job 101', processingTime: 6, remainingDays: 5 },
    { name: 'Job 102', processingTime: 7, remainingDays: 3 },
    { name: 'Job 103', processingTime: 4, remainingDays: 4 },
    { name: 'Job 104', processingTime: 9, remainingDays: 7 },
    { name: 'Job 105', processingTime: 5, remainingDays: 2 },
  ];

  const results = organizeJobs(jobs);
  const nombresAtributos = [
    "nombre",
    "tiempo de procesamiento",
    "tiempo de flujo",
    "fecha de entrega",
    "retraso"
  ];

  console.log(results)

  return (
    <DataTable
      title='TCP'
      subtitle='Modo de ordenamiento por tamaño de proceso mas largo'
      headers={nombresAtributos}
      rows={results}
    />
  )
}

export default App;
