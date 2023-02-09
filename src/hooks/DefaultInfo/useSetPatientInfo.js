function useSetPatientInfo(defaultInfo) {
  const defaultValues = {
    name: defaultInfo?.name || "",
    birthDate: defaultInfo?.birthDate || "",
    palliative: defaultInfo?.palliative || "",
    typeOfCancer: defaultInfo?.typeOfCancer || "",
    services: defaultInfo?.services || "",
  };

  return defaultValues;
}

export default useSetPatientInfo;
