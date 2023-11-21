import React from "react";
import { ResultsPlaning } from "../../algorithms/interfaces/response-tables";

type CardContentProps = {
  title: string;
  subtitle: string;
  quantity: number;
};

export const Card: React.FC<ResultsPlaning> = ({
  AverageCompletionType,
  AverageDelay,
  AverageJobs,
  MeasureUse,
}) => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-10">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Analisis de resultado de Planeacion
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <CardContentRow
            title="Tiempo de terminacion promedio"
            subtitle="Suma de flujo Total/Numero de trabajos"
            quantity={AverageCompletionType}
          />

          <CardContentRow
            title="Medida de utilizacion"
            subtitle="Sumatoria de total de tiempo procesamiento/Suma de flujo Total"
            quantity={MeasureUse}
          />

          <CardContentRow
            title="Numero promedio de trabajo"
            subtitle="Suma de flujo Total/Sumatoria de total de tiempo procesamiento"
            quantity={AverageJobs}
          />

          <CardContentRow
            title="Retraso promedio"
            subtitle="Suma de retraso Total/Numero de trabajos"
            quantity={AverageDelay}
          />
        </ul>
      </div>
    </div>
  );
};

const CardContentRow: React.FC<CardContentProps> = ({
  quantity,
  subtitle,
  title,
}) => {
  return (
    <>
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {title}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {subtitle}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {quantity}
          </div>
        </div>
      </li>
    </>
  );
};
