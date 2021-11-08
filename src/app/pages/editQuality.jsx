import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import qualityService from '../services/qualityService';
import { toast } from 'react-toastify';
import QualityForm from '../components/ui/qualityForm';

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null);
  // const [, setErrors] = useState(null);
  const id = useParams().id;

  const updateQuality = async content => {
    try {
      const data = await qualityService.update(id, content);
      return data;
    } catch (error) {
      const { message } = error.response.data;
      // setErrors({ message, status });
      toast.error(message);
    }
  };

  const getQuality = async id => {
    try {
      const data = await qualityService.get(id);
      return data;
    } catch (error) {
      const { message } = error.response.data;
      // setErrors({ message, status });
      toast.error(message);
    }
  };

  const handleSubmit = data => {
    updateQuality(data);
  };

  useEffect(() => {
    getQuality(id).then(data => setQuality(data.content));
  }, [id]);

  if (!quality) {
    return 'Loading...';
  }
  return (
    <>
      <h1>Edit Quality Page</h1>{' '}
      <QualityForm data={quality} onSubmit={handleSubmit} />
    </>
  );
};

export default EditQualityPage;
