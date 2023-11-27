//interfacae
import { Job } from "./algorithms/interfaces/job";
import { ResponseView } from "./algorithms/interfaces/response-tables";
import { Planning } from "./algorithms/constants/constants";

//functions
import { JobsOrderPlanning } from "./algorithms/Planning";

//components
import DataTable from "./components/generics/DataTable";
import { JobForm } from "./components/jobs/JobForm";
import { Card } from "./components/planning/Card";
import FloatingButton from "./components/FloatingButton";

//libraries
import { toast } from "sonner";
import { MagicMotion } from "react-magic-motion";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [jobs, setjobs] = useState<Job[]>([]);
  const [iniatState, setinitialState] = useState(true);

  const [results, setresults] = useState<ResponseView[]>([]);

  const attributeNames = [
    "nombre",
    "tiempo de procesamiento",
    "dias restantes",
  ];

  const analize = () => {
    if (jobs.length < 2) {
      toast.error("por favor agrega al menos dos trabajos!", {
        duration: 1000,
      });

      // toast.custom(
      //   (t) => (
      //     <div onClick={() => toast.dismiss(t)}>
      //       por favor agrega al menos un trabajo
      //     </div>
      //   ),
      //   { duration: 10000 }
      // );
      return;
    }

    setinitialState(false);

    const results = Planning.map((strategy) => {
      return {
        Title: strategy.Title,
        SubTittle: strategy.Subtitle,
        ...JobsOrderPlanning(jobs, strategy.Sort),
      };
    });

    setresults((current) => [...current, ...results]);
  };

  const setDefaultState = () => {
    setinitialState(true);
    setresults([]);
    setjobs([]);
  };

  return (
    <>
      <h1 className="text-4xl font-semibold text-center">
        Planificacion de trabajos
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Produccion 2
        </p>
      </h1>

      {iniatState && (
        <JobForm
          setjobs={setjobs}
          initialJob={{ name: "", processingTime: 0, remainingDays: 0 }}
          analize={analize}
        />
      )}

      {jobs.length > 0 && (
        <DataTable
          title="Trabajos insertados por el usuario"
          subtitle="Lista de trabajos insertados por Usuario"
          headers={attributeNames}
          rows={jobs}
        />
      )}

      {jobs.length < 1 && (
        <h3 className="mt-10">
          Upps! al parecer aun no has añadido ningun trabajo.
        </h3>
      )}

      {!iniatState &&
        results.map((result, index) => (
          <MagicMotion>
            <React.Fragment key={index}>
              <DataTable
                title={result.Title}
                subtitle={result.SubTittle}
                headers={[
                  "nombre",
                  "tiempo de procesamiento",
                  "tiempo de flujo",
                  "fecha de entrega",
                  "retraso",
                ]}
                rows={result.Jobs}
              />
              <Card {...result} />              
            </React.Fragment>
          </MagicMotion>
        ))
      }

      {!iniatState && results.length > 0 && (
            <DataTable
              title="Analisis de metodos"
              subtitle="Tabla de valores resultantes"
              headers={[
                "Metodo",
                "Tiempo de terminacion promedio",
                "Medida de utilizacion",
                "Promedio de trabajo",
                "Retraso promedio"
              ]}
            rows={results.map(result => (
              {
                "Metodo": result.Title,
                "TTP": result.AverageCompletionType,
                "MU": result.MeasureUse,
                "TP": result.AverageJobs,
                "RP": result.AverageDelay
              }
            ))}
            />
        )
      }

      {!iniatState && <FloatingButton click={setDefaultState} />}

      {/* Calcular el método más factible */}
    {results.length > 0 && (
      <div className="text-center mt-4">
        <h3 className="text-4xl font-semibold">
          El método más factible es: 
        </h3>
        <h3 className="text-2xl">
          {results.reduce((minMethod, currentMethod) => {
            const currentSum = (
              currentMethod.AverageCompletionType +
              currentMethod.MeasureUse +
              currentMethod.AverageJobs +
              currentMethod.AverageDelay
            ) / 4;

            return currentSum < minMethod.sum ? { sum: currentSum, method: currentMethod.Title } : minMethod;
          }, { sum: Number.MAX_SAFE_INTEGER, method: '' }).method}
        </h3>
      </div>
    )}
    </>
  );
}

export default App;
