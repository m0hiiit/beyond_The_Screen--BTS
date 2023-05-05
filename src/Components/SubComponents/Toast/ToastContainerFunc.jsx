import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ToastContainerFunc = ({ }) => {
    return (
        <ToastContainer
            position="top-center"
            autoClose={800}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={true}
            pauseOnHover
            theme="colored"
            transition={Flip}
            limit={1}
        />
    )
}
const ToastError = (messege) => {
    toast.error(messege, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        Flip: true,
    })
}
const ToastSuccess = (messege) =>
    toast.success(messege, {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        Flip: true,
    })



export default ToastContainerFunc;
export { ToastError, ToastSuccess };