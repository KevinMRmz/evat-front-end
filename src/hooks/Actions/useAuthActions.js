import useFetch from "./../useFetch";
import useAlert from "./../useAlert";

const useAuthActions = () => {
  const { loginRequest } = useFetch();
  const { waitingResponseMessageSuccessMsg } = useAlert();

  const login = waitingResponseMessageSuccessMsg(
    async (data) => await loginRequest(data)
  );

  return { login };
};

export default useAuthActions;
