'use client';

import TravelHistory from "@/components/steps/travelHistory";
import TravelOptions from "@/components/steps/travelOptions";
import TravelRequest from "@/components/steps/travelRequest";
import { useDriverContext } from "@/contexts/driver";

export default function Home() {
  const { step } = useDriverContext();

  const titleByStep: Record<number, string> = {
    1: 'Solicitação de Viagem',
    2: 'Opções de Viagem',
    3: 'Histórico de Viagens'
  }

  const componentByStep: Record<number, JSX.Element> = {
    1: <TravelRequest />,
    2: <TravelOptions />,
    3: <TravelHistory />
  };

  return (
    <section>
      <h1>{titleByStep[step] ?? 'App Táxi'}</h1>
      {componentByStep[step] ?? <TravelRequest />}
    </section>
  );
}
