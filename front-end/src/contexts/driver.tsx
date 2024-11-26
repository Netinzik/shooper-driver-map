'use client';

import { createContext, useCallback, useContext, useState, ReactNode } from "react";
import { DriverContextProps, RideEstimate } from "./typings";

const DriverContext = createContext<DriverContextProps | undefined>(undefined);

export const DriverProvider = ({ children }: { children: ReactNode }) => {
  const [rideInfos, setRideInfos] = useState<RideEstimate>();
  const [step, setStep] = useState(1);

  const handleRideInfosChange = useCallback((newRideInfos: RideEstimate) => {
    setRideInfos((prevRideInfos) => {
      if (!prevRideInfos) return newRideInfos;

      const updatedRideInfos: RideEstimate = {
        ...prevRideInfos,
        ...Object.keys(newRideInfos).reduce((acc, key) => {
          const typedKey = key as keyof RideEstimate;
          const newRideValue = newRideInfos[typedKey];
          const oldRideValue = prevRideInfos[typedKey];

          if (newRideValue !== oldRideValue) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (acc as any)[typedKey] = newRideValue;
          }
          return acc;
        }, {} as Partial<RideEstimate>),
      };

      return updatedRideInfos;
    });
  }, []);

  const handleStepChange = useCallback((newStep: number) => {
    setStep(newStep);
  }, []);

  return (
    <DriverContext.Provider
      value={{ rideInfos, handleRideInfosChange, step, handleStepChange }}
    >
      {children}
    </DriverContext.Provider>
  );
};

export const useDriverContext = () => {
  const context = useContext(DriverContext);
  if (!context) {
    throw new Error("useDriverContext must be used within a DriverProvider!");
  }
  return context;
};
