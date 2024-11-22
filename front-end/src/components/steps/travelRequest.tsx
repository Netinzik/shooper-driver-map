import axios from "axios";
import { useDriverContext } from "@/contexts/driver";
import useFormTravel, {FormTravelProps} from "@/hooks/useFormTravel";

export default function TravelRequest() {
  const { handleStepChange } = useDriverContext();
  const { formData, errors, handleFormDataChange, handleErrorsChange } = useFormTravel();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleFormDataChange(name, value);
    handleErrorsChange( {} as FormTravelProps, name);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {
      userId: formData.userId ? "" : "O ID do usuário é obrigatório.",
      origin: formData.origin ? "" : "O endereço de origem é obrigatório.",
      destination: formData.destination ? "" : "O endereço de destino é obrigatório."
    };

    handleErrorsChange(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post("/ride/estimate", formData);
      console.log("Estimativa recebida:", response.data);
      handleStepChange(2);
    } catch (error) {
      console.error("Erro ao estimar a viagem:", error);
      alert("Erro ao estimar a viagem. Tente novamente.");
    }
  };

  return (
    <div>
      <h2>Solicitação de Viagem</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">ID do Usuário</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
          />
          {errors.userId && <p style={{ color: "red" }}>{errors.userId}</p>}
        </div>

        <div>
          <label htmlFor="origin">Endereço de Origem</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
          />
          {errors.origin && <p style={{ color: "red" }}>{errors.origin}</p>}
        </div>

        <div>
          <label htmlFor="destination">Endereço de Destino</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          />
          {errors.destination && <p style={{ color: "red" }}>{errors.destination}</p>}
        </div>

        <button type="submit">Estimar Valor da Viagem</button>
      </form>
    </div>
  );
}
