import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

export const Toastify = async (message,type) => {
  let messageString = '';

  if (Array.isArray(message)) {
    messageString = message.join(', ');
  } else if (typeof message !== 'string') {
    messageString = String(message);
  } else {
    messageString = message;
  }

  switch (type) {
    case 'success':
      toast.success(messageString, {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'dark',
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
      break;
    case 'error':
      toast.error(messageString, {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'dark',
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
      break;
    default:
      toast(messageString, {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'dark',
        pauseOnHover: false,
        pauseOnFocusLoss: false,
      });
  }
};
