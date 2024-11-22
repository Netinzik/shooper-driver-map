'use client';

import { useCallback, useState } from "react";

export interface FormTravelProps {
  userId: string
  origin: string
  destination: string
}

export default function useFormTravel() {
  const [formData, setFormData] = useState<FormTravelProps>({
    userId: "",
    origin: "",
    destination: ""
  });

  const [errors, setErrors] = useState<FormTravelProps>({
    userId: "",
    origin: "",
    destination: ""
  });

  const handleErrorsChange = useCallback((errors: FormTravelProps, name?: string) => {
    if (name) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    } else setErrors(errors)
  }, []);

  const handleFormDataChange = useCallback((name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, []);

  return { formData, handleFormDataChange, errors, handleErrorsChange };
}
