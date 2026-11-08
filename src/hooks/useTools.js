import { useEffect, useState } from "react";

const useTools = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://sn-computer-parts-server.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};
export default useTools;
