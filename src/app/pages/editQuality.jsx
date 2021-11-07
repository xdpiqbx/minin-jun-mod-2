import httpService from '../services/httpService';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EditForm from '../components/ui/editForm';

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null);
  const id = useParams().id;
  const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`;
  const handleSubmit = data => {
    const sendDataToDb = async data => {
      try {
        await httpService
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
      const { data } = await httpService.get(qualityEndPoint);
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
