import React, { useEffect, useState } from 'react';
import { getAllShorts } from '../../api/User/shortRequest';
import Layout from '../../components/User/layout/Layout';
import Shorts from '../../components/User/shorts/Shorts';

function Short() {
  const [shorts, setShorts] = useState();
  useEffect(() => {
    const allShorts = async () => {
      const getAllShort = await getAllShorts();
      setShorts(getAllShort);
    };
    allShorts();
  }, []);
  return (
    <Layout>
      <Shorts short={shorts} />
    </Layout>
  );
}
export default Short;
