import {
  useEffect,
  useState,
} from 'react';

const Common = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("./fakedb.JSON")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  //return core things
  return [service];
};

export default Common;
