function useSetStaffInfo(defaultInfo) {
  const defaultValues = {
    name: defaultInfo?.name || "",
    email: defaultInfo?.email || "",
    phone: defaultInfo?.phone || "",
    specialty: defaultInfo?.specialty || "",
    role: defaultInfo?.role.toLowerCase() || "nurse",
  };

  return defaultValues;
}

export default useSetStaffInfo;
