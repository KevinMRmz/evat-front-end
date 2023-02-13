import Swal from "sweetalert2";

const alertQuestion = async (msg, btnMsg) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: msg,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: btnMsg,
  });

  return result.isConfirmed;
};

export default alertQuestion;
