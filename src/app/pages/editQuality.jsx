import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EditForm from '../components/ui/editForm';

axios.interceptors.response.use(
  res => res,
  error => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.log('Unexpected Error (catched in interceptor)');
    }
    return Promise.reject(error);
  }
);

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null);
  const id = useParams().id;
  const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`;
  const handleSubmit = data => {
    const sendDataToDb = async data => {
      try {
        await axios
          .put(qualityEndPoint, data)
          .then(res => console.log(res.data.content));
      } catch (error) {
        // console.log(error.request);
        console.log('Error=>', error);
      }
    };

    sendDataToDb(data);
  };
  useEffect(() => {
    const fetchQualities = async () => {
      const { data } = await axios.get(qualityEndPoint);
      setQuality(data.content);
    };
    fetchQualities();
  }, [qualityEndPoint]);
  if (!quality) {
    return 'Loading...';
  }
  return (
    <>
      <h1>Edit Quality Page</h1>{' '}
      <EditForm data={quality} onSubmit={handleSubmit} />
    </>
  );
};

export default EditQualityPage;
