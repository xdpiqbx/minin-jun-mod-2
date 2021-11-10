import React from 'react';
import { useParams } from 'react-router';
import QualityForm from '../components/ui/qualityForm';
import { useQualities } from '../hooks/useQualities';

const EditQualityPage = () => {
  const id = useParams().id;
  const { getQualitie, updateQuality } = useQualities();
  const quality = getQualitie(id);

  const handleSubmit = data => {
    console.log(data);
    updateQuality(data);
  };

  return (
    <>
      <h1>Edit Quality Page</h1>{' '}
      <QualityForm data={quality} onSubmit={handleSubmit} />
    </>
  );
};

export default EditQualityPage;
