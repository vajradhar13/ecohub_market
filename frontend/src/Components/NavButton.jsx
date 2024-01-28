/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
function NavigationButton({ label, to, className }) {
    let navigate = useNavigate();
  
    return (
      <button className={className} onClick={() => navigate(to)}>
        {label}
      </button>
    );
  }
  

export default NavigationButton